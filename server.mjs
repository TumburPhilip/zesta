import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const publicRoot = fileURLToPath(new URL(".", import.meta.url));
const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

const server = createServer(async (request, response) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  } catch {
    response.writeHead(400).end("Bad request");
    return;
  }

  const requestedPath = resolve(publicRoot, `.${pathname}`);
  const relativePath = relative(publicRoot, requestedPath);
  if (relativePath === ".." || relativePath.startsWith(`..${sep}`) || relativePath.startsWith(sep)) {
    response.writeHead(403).end("Forbidden");
    return;
  }

  try {
    let filePath = requestedPath;
    let info = await stat(filePath);
    if (info.isDirectory()) {
      if (!pathname.endsWith("/")) {
        response.writeHead(301, { Location: `${pathname}/${new URL(request.url, "http://localhost").search}` }).end();
        return;
      }
      filePath = resolve(filePath, "index.html");
      info = await stat(filePath);
    }
    if (!info.isFile()) throw new Error("Not a file");

    const body = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": mimeTypes[extname(filePath).toLowerCase()] || "application/octet-stream",
      "Content-Length": body.length,
      "X-Content-Type-Options": "nosniff",
    });
    response.end(body);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("Not found");
  }
});

const port = Number(process.env.PORT || 4173);
server.listen(port, "127.0.0.1", () => {
  console.log(`ZESTA is ready at http://localhost:${port}`);
});

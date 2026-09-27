const root = document.body.dataset.root || "./";
const image = (name) => `${root}assets/images/${name}`;
const route = (path = "") => `${root}${path}`;

const products = [
  {
    id: "peach-vibes",
    name: "Peach Vibes",
    flavor: "Peach",
    color: "#ff8a65",
    pale: "#ffe4d9",
    short: "Soft peach color. Sunny, feel-good energy.",
    hero: "peach-vibes-hero.jpg",
    studio: "peach-vibes-studio.jpg",
    can: "peach-vibes-can.jpg",
    carton: "peach-vibes-carton.jpg",
    detail: "peach-macro-detail.jpg",
    fruit: "detail-peach-slice.jpg",
    next: "lime-fizz",
  },
  {
    id: "lime-fizz",
    name: "Lime Fizz",
    flavor: "Lime",
    color: "#99cc33",
    pale: "#e8f2ce",
    short: "A green little spark for a fresh-start mood.",
    hero: "lime-fizz-hero.jpg",
    studio: "lime-fizz-studio.jpg",
    can: "lime-fizz-can.jpg",
    carton: "lime-fizz-carton.jpg",
    detail: "lime-macro-detail.jpg",
    fruit: "detail-lime-wedge.jpg",
    next: "berry-bliss",
  },
  {
    id: "berry-bliss",
    name: "Berry Bliss",
    flavor: "Mixed berry",
    color: "#7e57c2",
    pale: "#e9ddf7",
    short: "A rich berry palette with a little extra joy.",
    hero: "berry-bliss-hero.jpg",
    studio: "berry-bliss-studio.jpg",
    can: "berry-bliss-can.jpg",
    carton: "berry-bliss-carton.jpg",
    detail: "berry-macro-detail.jpg",
    fruit: "detail-berry-cluster.jpg",
    next: "tropical-escape",
  },
  {
    id: "tropical-escape",
    name: "Tropical Escape",
    flavor: "Tropical fruit",
    color: "#ffb300",
    pale: "#fff0c6",
    short: "A sunny splash of color for anywhere you are.",
    hero: "tropical-escape-hero.jpg",
    studio: "tropical-escape-studio.jpg",
    can: "tropical-escape-can.jpg",
    carton: "tropical-escape-carton.jpg",
    detail: "tropical-macro-detail.jpg",
    fruit: "detail-passionfruit.jpg",
    next: "peach-vibes",
  },
];

const productById = Object.fromEntries(products.map((product) => [product.id, product]));
const productHref = (product) => route(`flavors/${product.id}/`);
const app = document.querySelector("#app");

function header(activePage) {
  return `
    <header class="site-header" id="top">
      <div class="nav-wrap">
      <a class="wordmark" href="${route()}" aria-label="ZESTA home">ZESTA</a>
        <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="primary-nav">
          <span></span><span></span>
        </button>
        <nav class="primary-nav" id="primary-nav" aria-label="Main navigation">
          <a class="nav-link ${activePage === "home" ? "is-active" : ""}" href="${route()}" ${activePage === "home" ? 'aria-current="page"' : ""}>Home</a>
          <a class="nav-link ${activePage === "flavors" || activePage === "product" ? "is-active" : ""}" href="${route("flavors/")}" ${activePage === "flavors" ? 'aria-current="page"' : ""}>Flavors</a>
          <a class="nav-link ${activePage === "about" ? "is-active" : ""}" href="${route("about/")}" ${activePage === "about" ? 'aria-current="page"' : ""}>About</a>
          <a class="nav-link ${activePage === "find" ? "is-active" : ""}" href="${route("find-zesta/")}" ${activePage === "find" ? 'aria-current="page"' : ""}>Find ZESTA</a>
        </nav>
        <a class="button button-dark nav-cta" href="${route("find-zesta/")}">Shop ZESTA <span aria-hidden="true">↗</span></a>
      </div>
    </header>`;
}

function footer() {
  return `
    <footer class="site-footer" id="contact">
      <div class="footer-top">
        <a class="wordmark footer-mark" href="${route()}" aria-label="ZESTA home">ZESTA</a>
        <p>Bright fruit flavor.<br />A little more ZESTA.</p>
        <nav class="footer-nav" aria-label="Footer navigation">
          <a href="${route("flavors/")}">Flavors</a>
          <a href="${route("about/")}">About</a>
          <a href="${route("find-zesta/")}">Find ZESTA</a>
          <a href="#contact">Contact</a>
        </nav>
        <div class="footer-social" aria-label="Social channels">
          <span>Instagram</span><span>TikTok</span>
        </div>
      </div>
      <div class="footer-bottom"><span>© ZESTA</span><span>Made for a brighter kind of fizz.</span><a href="#top">Back to top ↑</a></div>
    </footer>`;
}

function flavorCards() {
  return products.map((product, index) => `
    <article class="flavor-card" style="--flavor:${product.color};--flavor-pale:${product.pale}">
      <a class="flavor-card-image" href="${productHref(product)}" aria-label="Discover ${product.name}">
        <img src="${image(product.hero)}" alt="${product.name} can and four-can carton among fresh fruit" loading="lazy" decoding="async" />
        <span class="card-number">0${index + 1}</span>
        <span class="card-arrow" aria-hidden="true">↗</span>
      </a>
      <div class="flavor-card-copy">
        <div><p class="micro-label">${product.flavor} · 330 ml</p><h3><a href="${productHref(product)}">${product.name}</a></h3></div>
        <a class="text-link" href="${productHref(product)}" aria-label="Discover ${product.name}">Meet the flavor <span aria-hidden="true">→</span></a>
      </div>
    </article>`).join("");
}

function homePage() {
  return `
    ${header("home")}
    <main id="main-content">
      <section class="home-hero">
        <div class="hero-copy">
          <p class="eyebrow"><span class="eyebrow-dot"></span> Naturally flavored sparkling water</p>
          <h1>Find your<br /><em>fizz.</em></h1>
          <p class="hero-intro">Bright fruit flavor. Crisp sparkling water. Pick your mood.</p>
          <div class="hero-actions">
            <a class="button button-dark" href="${route("flavors/")}">Explore flavors <span aria-hidden="true">↗</span></a>
            <a class="underlined-link" href="${route("find-zesta/")}">Find ZESTA <span aria-hidden="true">→</span></a>
          </div>
          <div class="hero-note"><span class="note-sparkle" aria-hidden="true">✳</span><span>Four flavors.<br />One very good mood.</span></div>
        </div>
        <figure class="hero-image-wrap">
          <img src="${image("zesta-hero-master.jpg")}" alt="All four ZESTA sparkling water flavors with cans, four-can cartons and fresh fruit" fetchpriority="high" decoding="async" />
          <figcaption><span>Meet the whole ZESTA family</span><span>01 / 04 flavors</span></figcaption>
          <span class="hero-sticker">Pick<br />your<br /><b>mood!</b></span>
        </figure>
        <div class="hero-index" aria-hidden="true">01 <span>/</span> 04</div>
      </section>

      <div class="ticker" aria-label="Bright fruit flavor, crisp sparkling water, pick your mood">
        <div class="ticker-track"><span>Bright fruit flavor</span><b>✳</b><span>Crisp sparkling water</span><b>✳</b><span>Pick your mood</span><b>✳</b><span>Bright fruit flavor</span><b>✳</b><span>Crisp sparkling water</span><b>✳</b><span>Pick your mood</span><b>✳</b></div>
      </div>

      <section class="section flavor-section" id="flavors">
        <div class="section-heading heading-row">
          <div><p class="eyebrow">Find your kind of bright</p><h2>Four flavors.<br /><em>One ZESTA mood.</em></h2></div>
          <p class="heading-aside">A colorful little lineup for whatever kind of day it is.</p>
        </div>
        <div class="flavor-grid">${flavorCards()}</div>
        <div class="section-end-link"><a class="underlined-link" href="${route("flavors/")}">Get to know every flavor <span aria-hidden="true">→</span></a></div>
      </section>

      <section class="packaging-story">
        <div class="packaging-photo">
          <img src="${image("berry-bliss-studio.jpg")}" alt="Berry Bliss can and carton with fruit, color and sculptural props" loading="lazy" decoding="async" />
          <span class="photo-caption">Color with a little more character</span>
        </div>
        <div class="packaging-copy">
          <p class="eyebrow"><span class="eyebrow-dot"></span> Good looks. Good fizz.</p>
          <h2>Big fruit<br /><em>energy.</em></h2>
          <p>Color, fruit and bold type make every flavor feel like itself—while the whole family still feels unmistakably ZESTA.</p>
          <a class="button button-cream" href="${route("about/")}">Get to know us <span aria-hidden="true">↗</span></a>
          <span class="packaging-doodle" aria-hidden="true">✳</span>
        </div>
      </section>

      <section class="section color-system">
        <div class="section-heading heading-row">
          <div><p class="eyebrow">A color for every mood</p><h2>Four colors.<br /><em>Four moods.</em></h2></div>
          <p class="heading-aside">Same ZESTA spirit. Four very different ways to brighten your day.</p>
        </div>
        <div class="mood-strip">${products.map((product, index) => `
          <a class="mood-tile" href="${productHref(product)}" style="--flavor:${product.color};--flavor-pale:${product.pale}">
            <span class="mood-index">0${index + 1} / COLOR MOOD</span>
            <img src="${image(product.can)}" alt="${product.name} sparkling water can" loading="lazy" decoding="async" />
            <span class="mood-name">${product.name}<span aria-hidden="true">↗</span></span>
          </a>`).join("")}
        </div>
      </section>

      <section class="lifestyle-section">
        <img src="${image("zesta-poolside-lifestyle.jpg")}" alt="The four ZESTA flavors set out by a sunny pool" loading="lazy" decoding="async" />
        <div class="lifestyle-stamp"><span>Good<br />days</span><b>✳</b><span>taste<br />like this</span></div>
        <div class="lifestyle-caption"><p class="eyebrow">A brighter kind of break</p><h2>Make a little<br /><em>room for fun.</em></h2><a class="underlined-link" href="${route("flavors/")}">Pick your flavor <span aria-hidden="true">→</span></a></div>
        <span class="lifestyle-side-note">ZESTA · SPARKLING WATER · 330 ML</span>
      </section>

      <section class="brand-note section">
        <div class="brand-note-mark" aria-hidden="true">Z<span>.</span></div>
        <div class="brand-note-copy"><p class="eyebrow">A little zest goes a long way</p><h2>Make every day<br />a little more <em>ZESTA.</em></h2></div>
        <p class="brand-note-body">Made for the moments that call for something bright, crisp and refreshing. Pour a little color into your day.</p>
      </section>

      <section class="locator-band">
        <div class="locator-intro"><p class="eyebrow"><span class="eyebrow-dot"></span> Out in the world</p><h2>Find your next<br /><em>ZESTA.</em></h2></div>
        <form class="locator-form" data-locator-form>
          <label for="home-location">Your city or postcode</label>
          <div class="locator-input-row"><input id="home-location" name="location" type="search" placeholder="Enter your city or postcode" autocomplete="postal-code" /><button class="button button-dark" type="submit" aria-label="Search for ZESTA near you">Find it <span aria-hidden="true">↗</span></button></div>
          <p class="locator-message" data-locator-message role="status" aria-live="polite"></p>
          <span class="locator-note">We’re getting our store locator ready. Check back soon.</span>
        </form>
      </section>
    </main>
    ${footer()}`;
}

function flavorsPage() {
  return `
    ${header("flavors")}
    <main id="main-content" class="flavors-page">
      <section class="collection-intro">
        <p class="eyebrow"><span class="eyebrow-dot"></span> Meet your new favorite</p>
        <h1>One little sip<br /><em>of something bright.</em></h1>
        <p>Four fruit moods. One crisp, sparkling ZESTA feeling. Which one are you today?</p>
        <span class="collection-doodle" aria-hidden="true">✳</span>
      </section>
      <section class="section collection-section" aria-labelledby="collection-title">
        <div class="collection-subhead"><h2 id="collection-title">The flavor lineup</h2><span>4 bright ideas · 330 ml each</span></div>
        <div class="flavor-grid flavor-grid-large">${flavorCards()}</div>
      </section>
      <section class="flavor-closer"><span class="closer-flower" aria-hidden="true">✳</span><p>However your day feels,</p><h2>there’s a fizz<br /><em>for that.</em></h2><a class="button button-dark" href="${route("find-zesta/")}">Find ZESTA <span aria-hidden="true">↗</span></a></section>
    </main>
    ${footer()}`;
}

function productPage(product) {
  const index = products.indexOf(product);
  const next = productById[product.next];
  const related = products.filter((candidate) => candidate.id !== product.id);
  return `
    ${header("product")}
    <main id="main-content" class="product-page" style="--flavor:${product.color};--flavor-pale:${product.pale}">
      <div class="product-crumb"><a href="${route("flavors/")}">All flavors</a><span aria-hidden="true">/</span><span>${product.name}</span><span class="crumb-count">0${index + 1} <i>/</i> 04</span></div>
      <section class="product-hero">
        <div class="product-hero-copy">
          <p class="eyebrow"><span class="eyebrow-dot"></span> ${product.flavor} · naturally flavored</p>
          <h1>${product.name.replace(" ", "<br />")}<span>.</span></h1>
          <p class="product-lede">${product.short} Meet your new sparkling-water mood.</p>
          <a class="button button-dark" href="#product-details">Get to know it <span aria-hidden="true">↓</span></a>
          <a class="underlined-link product-back" href="${route("flavors/")}">See all four flavors <span aria-hidden="true">→</span></a>
          <span class="product-flower" aria-hidden="true">✳</span>
        </div>
        <figure class="product-hero-image">
          <img src="${image(product.studio)}" alt="${product.name} 330 ml can and four-can carton styled with ${product.flavor.toLowerCase()} fruit" fetchpriority="high" decoding="async" />
          <figcaption>330 ml can · four-can carton</figcaption>
          <span class="product-image-tag">A bright<br />kind of fizz</span>
        </figure>
      </section>
      <div class="product-specs" aria-label="Product details"><div><span>01</span><b>${product.flavor}</b><small>Flavor</small></div><div><span>02</span><b>330 ml</b><small>Can format</small></div><div><span>03</span><b>4 cans</b><small>Multipack</small></div><div><span>04</span><b>Sparkling water</b><small>Naturally flavored</small></div></div>

      <section class="product-gallery section" id="product-details">
        <div class="section-heading heading-row"><div><p class="eyebrow">A closer look</p><h2>All dressed<br /><em>in ${product.flavor.toLowerCase()}.</em></h2></div><p class="heading-aside">A familiar ZESTA shape, dressed for its own flavor mood.</p></div>
        <div class="gallery-grid">
          <figure class="gallery-main"><img src="${image(product.can)}" alt="Front view of the ${product.name} 330 ml can" loading="lazy" decoding="async" /><figcaption>The single can</figcaption></figure>
          <figure class="gallery-tall"><img src="${image(product.carton)}" alt="Front view of the ${product.name} four-can carton" loading="lazy" decoding="async" /><figcaption>The four-can carton</figcaption></figure>
          <figure class="gallery-detail"><img src="${image(product.detail)}" alt="Close-up fruit and color detail for ${product.name}" loading="lazy" decoding="async" /><figcaption>Color, fruit, ZESTA</figcaption></figure>
        </div>
      </section>

      <section class="packaging-profile">
        <div class="profile-fruit"><img src="${image(product.fruit)}" alt="Fresh ${product.flavor.toLowerCase()} fruit detail" loading="lazy" decoding="async" /><span>Fruit, color<br />and good fizz</span></div>
        <div class="profile-copy"><p class="eyebrow">One family. Four personalities.</p><h2>A ZESTA<br /><em>original.</em></h2><p>Our signature ZESTA wordmark and 330 ml can give the range its familiar shape. ${product.name} makes it its own with a ${product.flavor.toLowerCase()} color world and fruit-forward details.</p><div class="profile-swatch"><span style="background:${product.color}"></span><span><b>${product.name}</b><small>${product.color.toUpperCase()} · flavor color</small></span></div></div>
        <span class="profile-spark" aria-hidden="true">✳</span>
      </section>

      <section class="purchase-section" id="purchase">
        <div><p class="eyebrow">Want a little more bright?</p><h2>Make it a<br /><em>${product.name} day.</em></h2><p>Find ZESTA near you, or discover the rest of the lineup.</p></div>
        <div class="purchase-actions"><button class="button button-dark" type="button" data-cart>Add to cart <span aria-hidden="true">↗</span></button><a class="underlined-link" href="${route("find-zesta/")}">Find ZESTA <span aria-hidden="true">→</span></a><p class="cart-message" data-cart-message role="status" aria-live="polite"></p></div>
        <span class="purchase-can" aria-hidden="true"><img src="${image(product.can)}" alt="" loading="lazy" decoding="async" /></span>
      </section>

      <section class="section related-section"><div class="section-heading heading-row"><div><p class="eyebrow">Keep the good mood going</p><h2>More to <em>love.</em></h2></div><a class="underlined-link" href="${route("flavors/")}">All flavors <span aria-hidden="true">→</span></a></div><div class="flavor-grid related-grid">${related.slice(0, 3).map((item) => flavorCardsSingle(item)).join("")}</div><a class="next-flavor" href="${productHref(next)}"><span>Up next</span><b>${next.name} <i aria-hidden="true">↗</i></b></a></section>
    </main>
    ${footer()}`;
}

function flavorCardsSingle(product) {
  const index = products.indexOf(product);
  return `<article class="flavor-card" style="--flavor:${product.color};--flavor-pale:${product.pale}"><a class="flavor-card-image" href="${productHref(product)}" aria-label="Discover ${product.name}"><img src="${image(product.hero)}" alt="${product.name} can and carton with fresh fruit" loading="lazy" decoding="async" /><span class="card-number">0${index + 1}</span><span class="card-arrow" aria-hidden="true">↗</span></a><div class="flavor-card-copy"><div><p class="micro-label">${product.flavor} · 330 ml</p><h3><a href="${productHref(product)}">${product.name}</a></h3></div><a class="text-link" href="${productHref(product)}">Meet the flavor <span aria-hidden="true">→</span></a></div></article>`;
}

function aboutPage() {
  return `
    ${header("about")}
    <main id="main-content" class="about-page">
      <section class="about-hero">
        <div class="about-hero-copy"><p class="eyebrow"><span class="eyebrow-dot"></span> A little more color, please</p><h1>Make every day<br />a little more<br /><em>ZESTA.</em></h1><p>Bright, crisp and refreshingly full of personality. That’s the whole idea.</p><a class="button button-dark" href="${route("flavors/")}">Meet the flavors <span aria-hidden="true">↗</span></a></div>
        <figure><img src="${image("zesta-poolside-lifestyle.jpg")}" alt="All four ZESTA sparkling water flavors together by a sunny pool" fetchpriority="high" decoding="async" /><figcaption>A little ZESTA on a sunny day</figcaption></figure>
      </section>
      <section class="about-manifesto section"><p class="eyebrow">Our kind of refreshment</p><h2>Something bright.<br /><em>Something bubbly.<br />Something very ZESTA.</em></h2><div class="manifesto-right"><p>ZESTA is made for the moments that call for something bright, crisp and refreshing. Four fruit-inspired flavors bring their own color and mood to the same playful family.</p><a class="underlined-link" href="${route("flavors/")}">Find your flavor <span aria-hidden="true">→</span></a></div></section>
      <section class="about-family"><div class="family-copy"><p class="eyebrow">One master brand, four flavor worlds</p><h2>Easy to spot.<br /><em>Hard to forget.</em></h2><p>Every can shares the same ZESTA signature and 330 ml format. Flavor color, fruit imagery and flavor name do the rest.</p><a class="button button-cream" href="${route("flavors/")}">See the full lineup <span aria-hidden="true">↗</span></a></div><img src="${image("zesta-hero-master.jpg")}" alt="The ZESTA family: Peach Vibes, Lime Fizz, Berry Bliss and Tropical Escape" loading="lazy" decoding="async" /></section>
      <section class="about-values section"><div><span class="value-number">01</span><h3>Fruit first</h3><p>Four fruit moods, each with its own clear flavor identity.</p></div><div><span class="value-number">02</span><h3>Color with purpose</h3><p>Flavor colors make the range easy to spot and fun to explore.</p></div><div><span class="value-number">03</span><h3>One ZESTA family</h3><p>A shared design language ties every can and carton together.</p></div></section>
      <section class="about-closer"><p class="eyebrow">That’s the ZESTA feeling</p><h2>Here’s to a little<br /><em>more fizz.</em></h2><a class="button button-dark" href="${route("find-zesta/")}">Find ZESTA <span aria-hidden="true">↗</span></a></section>
    </main>
    ${footer()}`;
}

function findPage() {
  return `
    ${header("find")}
    <main id="main-content" class="find-page">
      <section class="find-hero">
        <div class="find-copy"><p class="eyebrow"><span class="eyebrow-dot"></span> Your next little refresh</p><h1>Find your<br /><em>next ZESTA.</em></h1><p>Tell us where to look and we’ll help you find your next bright moment.</p>
          <form class="locator-form find-form" data-locator-form><label for="find-location">Enter your city or postcode</label><div class="locator-input-row"><input id="find-location" name="location" type="search" placeholder="Enter your city or postcode" autocomplete="postal-code" /><button class="button button-dark" type="submit">Search <span aria-hidden="true">↗</span></button></div><p class="locator-message" data-locator-message role="status" aria-live="polite"></p></form>
          <span class="find-footnote">Store information is coming soon.</span>
        </div>
        <div class="find-art"><img src="${image("zesta-hero-master.jpg")}" alt="The four ZESTA sparkling water flavors displayed together" fetchpriority="high" decoding="async" /><span class="find-art-sticker">Where<br />to next?</span><span class="find-art-label">Meet the whole lineup</span></div>
      </section>
      <section class="find-bottom"><p class="eyebrow">Pick your mood while you wait</p><h2>Four flavors.<br /><em>One very good place to start.</em></h2><a class="button button-dark" href="${route("flavors/")}">Explore flavors <span aria-hidden="true">↗</span></a></section>
    </main>
    ${footer()}`;
}

function notFoundPage() {
  return `${header("")}<main id="main-content" class="not-found"><p class="eyebrow">A little fizz in the wrong place</p><h1>Oops, no<br /><em>ZESTA here.</em></h1><a class="button button-dark" href="${route()}">Back home <span aria-hidden="true">↗</span></a></main>${footer()}`;
}

const page = document.body.dataset.page;
let content;
if (page === "home") content = homePage();
else if (page === "flavors") content = flavorsPage();
else if (page === "about") content = aboutPage();
else if (page === "find") content = findPage();
else if (page === "product" && productById[document.body.dataset.slug]) content = productPage(productById[document.body.dataset.slug]);
else content = notFoundPage();
app.innerHTML = content;

const menuButton = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");
if (menuButton && primaryNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    primaryNav.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });
  primaryNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      primaryNav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    }
  });
}

document.querySelectorAll("[data-locator-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = form.querySelector("input");
    const message = form.querySelector("[data-locator-message]");
    if (!message) return;
    message.textContent = input.value.trim() ? "Store locator data coming soon." : "Enter a city or postcode to get started.";
  });
});

const cartButton = document.querySelector("[data-cart]");
if (cartButton) {
  cartButton.addEventListener("click", () => {
    const message = document.querySelector("[data-cart-message]");
    if (message) message.textContent = "Shopping links aren’t set up for this concept yet.";
  });
}

document.querySelectorAll('a[href="#contact"]').forEach((link) => {
  link.addEventListener("click", () => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }));
});

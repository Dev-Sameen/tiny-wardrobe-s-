/* ═══════════════════════════════════════════════
   TINY WARDROBE — script.js
   Pure Vanilla JavaScript · No Dependencies
═══════════════════════════════════════════════ */

/* ════════════════════════════════════════
   PRODUCT DATA
════════════════════════════════════════ */
const products = [
  {
    id: 1,
    name: "Floral Frock",
    tag: "Best Seller",
    desc: "A light, airy cotton frock with delicate floral print. Perfect for summer outings and special occasions.",
    sizes: ["2T", "3T", "4T", "S", "M"],
    colors: ["#E8A9B8", "#D4A5C9", "#F7DBA7", "#FFFFFF"],
    price: 1250,
    img: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf6?w=500&q=80"
  },
  {
    id: 2,
    name: "Boys Polo Shirt",
    tag: "New Arrival",
    desc: "Breathable pique cotton polo in classic cut. Soft collar, durable stitching, made for active boys.",
    sizes: ["3T", "4T", "S", "M", "L"],
    colors: ["#4A7FA5", "#5A9B6E", "#E8506A", "#F5E6C8"],
    price: 850,
    img: "data:image/jpeg;base64,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mnZXU3XxdpY/jjk29vh1N10ftTKPp4diyLVZCy5S1IeKeeOUstwnBuD8GK+G9uPCehbVZUREQEREBERAREQEREBWu2K5Ucgg/Tuf1lCN1p/TCorXQGkHM5lc+FzpHMMYeBhDXAh2E67kfVC+LOixt9U8nlaxdeepImI0VQpTi0TRW1zy3/2x6iszdE0Hh5umPsLXuGInRS4NElPvnn6Yuwrhojp/Dz+dF7tPcTEQope+SOm8NP50Xu1d8kdN4afzovdp7hiH1UKXxojpfDT+fEPyVmGh+l8NUX+3F7lPcMQ2q3UxDQ9TeHm86PZ5I1R2iGn8LN57PdJ7hjF/0/DuspHmpum86mNfIaP80YaAVBjdI4yYA/G5ru8x2thY23flfXrl1dqwREWVEREBERAREQEREBUVUQafLNBK/CYpMBF73YJA6/GLj7itMcmVw+kxeWmPqlC+wVpYFdHy0VBVjvp4z4qcj81eiOjn8KzqiPzFv+BCcCE0agU8mq7wf5CPxLMIncY6P+Vs+DCcGE0a0RKuBbHgwqcEEGsERurn491vKCfWtlwYVcAQaZ0VSe9fGPHE535gXldk7KB+lMaP9NO38TivpLKqajW5FoZ4g/hqgzE2w3jZFhtf6u3/AIWyRFFEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB/9k="
    
  },
  {
    id: 3,
    name: "Baby Romper",
    tag: "Organic",
    desc: "Ultra-soft organic cotton romper for newborns. Snap buttons for easy changes, gentle on delicate skin.",
    sizes: ["0-3M", "3-6M", "6-12M", "12-18M"],
    colors: ["#F7DBA7", "#E8506A", "#A8D5B5", "#D4E8F5"],
    price: 1100,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYpwDqvhg4pZ-gzh3ZwB1eUnaL_yq15fVqVw&s"
  },
  {
    id: 4,
    name: "Denim Dungaree",
    tag: "Trending",
    desc: "Classic denim dungarees with adjustable straps and deep pockets. Built tough for all-day adventures.",
    sizes: ["2T", "3T", "4T", "S", "M", "L"],
    colors: ["#4A6FA5", "#2C3E50", "#8B7355", "#5A9B6E"],
    price: 1650,
    img: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500&q=80"
  },
  {
    id: 5,
    name: "Princess Dress",
    tag: "Premium",
    desc: "Dreamy layered tulle dress with satin bodice. Every little girl's fairy-tale fantasy come true.",
    sizes: ["2T", "3T", "4T", "S", "M"],
    colors: ["#E8506A", "#B88FD4", "#F7DBA7", "#FFFFFF"],
    price: 2200,
    img: "https://fairytaletutus.com/wp-content/uploads/2019/03/blush-pink-tulle-dress-fairytale-tutus-baby-flower-girl-tutu-flowergirl-gown-satin-ribbon-sash-halloween-photo-prop-princess-birthday-outfit-5c7e06f4.jpg"

  },
  {
    id: 6,
    name: "Cozy Hoodie",
    tag: "Winter",
    desc: "Soft fleece-lined hoodie with kangaroo pocket. Warm, stretchy, and perfect for cool evenings.",
    sizes: ["3T", "4T", "S", "M", "L"],
    colors: ["#5A9B6E", "#4A7FA5", "#E8506A", "#888888"],
    price: 1800,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt9QZdwexWTlPUVC8FbcKZZmrIWoCgrWbiKQ&s"
    
  },
  {
    id: 7,
    name: "Summer Play Set",
    tag: "Summer",
    desc: "Matching printed shorts and t-shirt combo. Lightweight cotton keeps kids cool during outdoor play.",
    sizes: ["2T", "3T", "4T", "S", "M", "L"],
    colors: ["#F0A500", "#4A7FA5", "#E8506A", "#5A9B6E"],
    price: 1350,
    img: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvVZtgQHtLmagQlmOq_QlgqpM6r4jxsvf5AORbFn1xFA&s"
  },
  {
    id: 8,
    name: "Embroidered Kurta",
    tag: "Festive",
    desc: "Elegant traditional kurta with hand-guided embroidery. Ideal for Eid, weddings, and family gatherings.",
    sizes: ["3T", "4T", "S", "M", "L"],
    colors: ["#E8506A", "#F0A500", "#B88FD4", "#5A9B6E"],
    price: 1950,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1loeZg5ZQSV_TkjaMtIbyhK54shAlnNHibQ&s"
  }
];

/* ════════════════════════════════════════
   STATE
════════════════════════════════════════ */
let cart = [];
let selectedSizes  = {};
let selectedColors = {};

/* ════════════════════════════════════════
   INIT
════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  products.forEach(p => {
    selectedSizes[p.id]  = p.sizes[0];
    selectedColors[p.id] = p.colors[0];
  });
  renderProducts();
  renderCart();
  initScrollAnimations();
  initNavbar();
  initModalClose();
});

/* ════════════════════════════════════════
   RENDER PRODUCTS
════════════════════════════════════════ */
function renderProducts() {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  grid.innerHTML = products.map((p, idx) => `
    <div class="product-card fade-up" style="transition-delay:${idx * 60}ms" data-id="${p.id}">
      <div class="product-img-wrap">
        <img
          src="${p.img}"
          alt="${p.name}"
          loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&q=80'"
        />
        ${p.tag ? `<div class="product-tag">${p.tag}</div>` : ""}
      </div>
      <div class="product-body">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.desc}</p>

        <p class="product-sizes-label">Select Size</p>
        <div class="size-options" id="sizes-${p.id}">
          ${p.sizes.map((s, i) => `
            <button
              class="size-btn ${i === 0 ? "selected" : ""}"
              onclick="pickSize(${p.id}, '${s}', this)"
            >${s}</button>
          `).join("")}
        </div>

        <p class="product-colors-label">Colour</p>
        <div class="color-options" id="colors-${p.id}">
          ${p.colors.map((c, i) => `
            <div
              class="color-dot ${i === 0 ? "selected" : ""}"
              style="background:${c};"
              onclick="pickColor(${p.id}, '${c}', this)"
              title="${c}"
            ></div>
          `).join("")}
        </div>

        <div class="product-footer">
          <div class="product-price">
            PKR ${p.price.toLocaleString()}
            <small>per piece</small>
          </div>
          <button class="add-btn" onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
      </div>
    </div>
  `).join("");

  initScrollAnimations();
}

/* ════════════════════════════════════════
   SIZE & COLOR SELECTION
════════════════════════════════════════ */
function pickSize(pid, size, btn) {
  selectedSizes[pid] = size;
  const wrap = document.getElementById(`sizes-${pid}`);
  wrap.querySelectorAll(".size-btn").forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");
}

function pickColor(pid, color, dot) {
  selectedColors[pid] = color;
  const wrap = document.getElementById(`colors-${pid}`);
  wrap.querySelectorAll(".color-dot").forEach(d => d.classList.remove("selected"));
  dot.classList.add("selected");
}

/* ════════════════════════════════════════
   ADD TO CART
════════════════════════════════════════ */
function addToCart(pid) {
  const product = products.find(p => p.id === pid);
  if (!product) return;

  const size  = selectedSizes[pid];
  const color = selectedColors[pid];
  const key   = `${pid}-${size}-${color}`;
  const existing = cart.find(i => i.key === key);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      key,
      pid,
      name:  product.name,
      img:   product.img,
      size,
      color,
      price: product.price,
      qty:   1
    });
  }

  updateBadge();
  renderCart();
  showToast(`✓  ${product.name} added to cart`);
}

/* ════════════════════════════════════════
   RENDER CART
════════════════════════════════════════ */
function renderCart() {
  const emptyEl   = document.getElementById("cartEmpty");
  const contentEl = document.getElementById("cartContent");
  const listEl    = document.getElementById("cartItemsList");

  if (!emptyEl || !contentEl || !listEl) return;

  if (cart.length === 0) {
    emptyEl.classList.remove("hidden");
    contentEl.classList.add("hidden");
    return;
  }

  emptyEl.classList.add("hidden");
  contentEl.classList.remove("hidden");

  listEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">
        <img
          src="${item.img}"
          alt="${item.name}"
          onerror="this.src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=100&q=60'"
        />
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-meta">
          <span>Size: ${item.size}</span>
          <span class="meta-color-dot" style="background:${item.color};"></span>
        </div>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" onclick="changeQty('${item.key}', -1)">−</button>
        <span class="qty-display">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty('${item.key}', 1)">+</button>
      </div>
      <div class="cart-item-price">PKR ${(item.price * item.qty).toLocaleString()}</div>
      <button class="remove-btn" onclick="removeItem('${item.key}')" title="Remove item">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/>
          <path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/>
        </svg>
      </button>
    </div>
  `).join("");

  const total = getTotal();
  const sub   = document.getElementById("subtotalAmt");
  const tot   = document.getElementById("totalAmt");
  if (sub) sub.textContent = `PKR ${total.toLocaleString()}`;
  if (tot) tot.textContent = `PKR ${total.toLocaleString()}`;
}

function changeQty(key, delta) {
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.key !== key);
    showToast("Item removed", "error");
  }
  updateBadge();
  renderCart();
}

function removeItem(key) {
  cart = cart.filter(i => i.key !== key);
  updateBadge();
  renderCart();
  showToast("Item removed from cart", "error");
}

function getTotal() {
  return cart.reduce((sum, i) => sum + i.price * i.qty, 0);
}

function updateBadge() {
  const badge = document.getElementById("cartBadge");
  if (!badge) return;
  const count = cart.reduce((s, i) => s + i.qty, 0);
  badge.textContent = count;
  badge.style.transform = "scale(1.3)";
  setTimeout(() => (badge.style.transform = ""), 250);
}

function scrollToCart() {
  const cartSection = document.getElementById("cart");
  if (cartSection) cartSection.scrollIntoView({ behavior: "smooth" });
}

/* ════════════════════════════════════════
   ORDER MODAL
════════════════════════════════════════ */
function openModal() {
  if (cart.length === 0) {
    showToast("Your cart is empty!", "error");
    return;
  }
  const overlay = document.getElementById("modalOverlay");
  if (overlay) overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const overlay = document.getElementById("modalOverlay");
  if (overlay) overlay.classList.remove("open");
  document.body.style.overflow = "";
}

function initModalClose() {
  const overlay = document.getElementById("modalOverlay");
  if (!overlay) return;
  overlay.addEventListener("click", e => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });
}

/* ════════════════════════════════════════
   FORM VALIDATION & CONFIRM ORDER
════════════════════════════════════════ */
function confirmOrder() {
  const fields = [
    { id: "fName",    errId: "errName",    label: "Full name is required" },
    { id: "fPhone",   errId: "errPhone",   label: "Phone number is required" },
    { id: "fCity",    errId: "errCity",    label: "City is required" },
    { id: "fAddress", errId: "errAddress", label: "Delivery address is required" }
  ];

  let isValid = true;

  fields.forEach(f => {
    const el  = document.getElementById(f.id);
    const err = document.getElementById(f.errId);
    if (!el || !err) return;

    const val = el.value.trim();
    if (!val) {
      el.classList.add("error");
      err.textContent = f.label;
      isValid = false;
    } else {
      el.classList.remove("error");
      err.textContent = "";
    }

    el.addEventListener("input", () => {
      if (el.value.trim()) {
        el.classList.remove("error");
        err.textContent = "";
      }
    }, { once: false });
  });

  if (!isValid) {
    showToast("Please fill in all required fields", "error");
    return;
  }

  const customer = {
    name:    document.getElementById("fName").value.trim(),
    phone:   document.getElementById("fPhone").value.trim(),
    city:    document.getElementById("fCity").value.trim(),
    address: document.getElementById("fAddress").value.trim()
  };

  closeModal();
  showThankYou(customer);
}

/* ════════════════════════════════════════
   THANK YOU PAGE
════════════════════════════════════════ */
function showThankYou(customer) {
  const screen = document.getElementById("thankyouScreen");
  const summaryEl = document.getElementById("tySummary");
  if (!screen || !summaryEl) return;

  const total = getTotal();

  const itemsHTML = cart.map(item => `
    <div class="ty-item">
      <span>${item.name} &nbsp;×${item.qty}&nbsp; <em style="font-size:0.8em;color:#9E7F6E;">(${item.size})</em></span>
      <span>PKR ${(item.price * item.qty).toLocaleString()}</span>
    </div>
  `).join("");

  summaryEl.innerHTML = `
    <h4>Order Summary</h4>
    ${itemsHTML}
    <div class="ty-total-row">
      <span>Total (incl. free delivery)</span>
      <span>PKR ${total.toLocaleString()}</span>
    </div>
    <div class="ty-address-box">
      📍 &nbsp;<strong>${customer.name}</strong> · ${customer.phone}<br>
      ${customer.address}, ${customer.city}
    </div>
  `;

  screen.classList.add("active");
  document.body.style.overflow = "hidden";
}

function continueShopping() {
  const screen = document.getElementById("thankyouScreen");
  if (screen) screen.classList.remove("active");
  document.body.style.overflow = "";

  // Reset cart & form
  cart = [];
  updateBadge();
  renderCart();
  ["fName", "fPhone", "fCity", "fAddress"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ════════════════════════════════════════
   TOAST NOTIFICATIONS
════════════════════════════════════════ */
function showToast(message, type = "success") {
  const wrap = document.getElementById("toastWrap");
  if (!wrap) return;

  const toast = document.createElement("div");
  toast.className = `toast${type === "error" ? " error" : ""}`;
  toast.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      ${type === "error"
        ? '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'
        : '<polyline points="20 6 9 17 4 12"/>'}
    </svg>
    ${message}
  `;
  wrap.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("exiting");
    setTimeout(() => toast.remove(), 380);
  }, 2800);
}

/* ════════════════════════════════════════
   SCROLL ANIMATIONS
════════════════════════════════════════ */
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, i * 60);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".fade-up:not(.visible)").forEach(el => observer.observe(el));
}

/* ════════════════════════════════════════
   NAVBAR
════════════════════════════════════════ */
function initNavbar() {
  const navbar = document.getElementById("navbar");

  // Scroll shadow
  window.addEventListener("scroll", () => {
    if (!navbar) return;
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  }, { passive: true });

  // Active link highlight
  const sections = document.querySelectorAll("section[id], div[id]");
  const links    = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sec => {
      const top = sec.offsetTop - 100;
      if (window.scrollY >= top) current = sec.id;
    });
    links.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }, { passive: true });
}

function toggleMenu() {
  const navLinks  = document.getElementById("navLinks");
  const hamburger = document.getElementById("hamburger");
  if (!navLinks || !hamburger) return;
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("open");
}

// Close mobile menu when a nav link is clicked
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      document.getElementById("navLinks")?.classList.remove("open");
      document.getElementById("hamburger")?.classList.remove("open");
    });
  });
});
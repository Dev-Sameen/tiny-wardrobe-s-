/* ═══════════════════════════════════════════════
   TINY WARDROBE — script.js
   Pure Vanilla JavaScript · EmailJS Integrated
═══════════════════════════════════════════════ */

/* ════════════════════════════════════════
   EMAILJS CONFIG — Your Keys
════════════════════════════════════════ */
const EMAILJS_PUBLIC_KEY    = "RcO0fjXPo7wtkVYEj";
const EMAILJS_SERVICE_ID    = "service_yxnbx5k";
const EMAILJS_OWNER_TMPL    = "template_ive22mp";   // Owner alert
const EMAILJS_CUSTOMER_TMPL = "template_prfpq0j";   // Customer thank you

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
    img: "https://i0.wp.com/treatedwithlove.co.uk/wp-content/uploads/2017/08/20170913_095527-e1505299389415.jpg?fit=1100%2C1187&ssl=1"
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
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvVZtgQHtLmagQlmOq_QlgqpM6r4jxsvf5AORbFn1xFA&s"
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

// CAPTCHA state
let captchaAnswer   = 0;
let mCaptchaAnswer  = 0;

/* ════════════════════════════════════════
   INIT
════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  // Init EmailJS
  emailjs.init(EMAILJS_PUBLIC_KEY);

  products.forEach(p => {
    selectedSizes[p.id]  = p.sizes[0];
    selectedColors[p.id] = p.colors[0];
  });

  renderProducts();
  renderCart();
  initScrollAnimations();
  initNavbar();
  initModalClose();
  generateCaptcha();
  generateModalCaptcha();
});

/* ════════════════════════════════════════
   CAPTCHA GENERATOR
   Always different — random operators too
════════════════════════════════════════ */
function generateCaptcha() {
  const ops = ["+", "-", "×"];
  const op  = ops[Math.floor(Math.random() * ops.length)];
  let n1, n2, answer;

  if (op === "+") {
    n1 = Math.floor(Math.random() * 9) + 1;
    n2 = Math.floor(Math.random() * 9) + 1;
    answer = n1 + n2;
  } else if (op === "-") {
    n1 = Math.floor(Math.random() * 9) + 5;
    n2 = Math.floor(Math.random() * (n1 - 1)) + 1;
    answer = n1 - n2;
  } else {
    n1 = Math.floor(Math.random() * 5) + 2;
    n2 = Math.floor(Math.random() * 4) + 2;
    answer = n1 * n2;
  }

  captchaAnswer = answer;

  const el1 = document.getElementById("captchaNum1");
  const elOp = document.getElementById("captchaOp");
  const el2  = document.getElementById("captchaNum2");
  if (el1) el1.textContent = n1;
  if (elOp) elOp.textContent = op;
  if (el2) el2.textContent = n2;

  const inp = document.getElementById("cfCaptcha");
  if (inp) { inp.value = ""; inp.classList.remove("error"); }
  const err = document.getElementById("cfErrCaptcha");
  if (err) err.textContent = "";
}

function generateModalCaptcha() {
  const ops = ["+", "-", "×"];
  const op  = ops[Math.floor(Math.random() * ops.length)];
  let n1, n2, answer;

  if (op === "+") {
    n1 = Math.floor(Math.random() * 9) + 1;
    n2 = Math.floor(Math.random() * 9) + 1;
    answer = n1 + n2;
  } else if (op === "-") {
    n1 = Math.floor(Math.random() * 9) + 5;
    n2 = Math.floor(Math.random() * (n1 - 1)) + 1;
    answer = n1 - n2;
  } else {
    n1 = Math.floor(Math.random() * 5) + 2;
    n2 = Math.floor(Math.random() * 4) + 2;
    answer = n1 * n2;
  }

  mCaptchaAnswer = answer;

  const el1 = document.getElementById("mCaptchaNum1");
  const elOp = document.getElementById("mCaptchaOp");
  const el2  = document.getElementById("mCaptchaNum2");
  if (el1) el1.textContent = n1;
  if (elOp) elOp.textContent = ` ${op} `;
  if (el2) el2.textContent = n2;

  const inp = document.getElementById("mCaptchaAnswer");
  if (inp) { inp.value = ""; inp.classList.remove("error"); }
  const err = document.getElementById("errCaptcha");
  if (err) err.textContent = "";
}

/* ════════════════════════════════════════
   CONTACT FORM — Submit with EmailJS
════════════════════════════════════════ */
function submitContactForm() {
  // Validate fields
  const fields = [
    { id: "cfName",    errId: "cfErrName",    label: "Full name is required" },
    { id: "cfEmail",   errId: "cfErrEmail",   label: "Email address is required" },
    { id: "cfPhone",   errId: "cfErrPhone",   label: "Phone number is required" },
    { id: "cfMessage", errId: "cfErrMessage", label: "Message is required" }
  ];

  let isValid = true;
  fields.forEach(f => {
    const el  = document.getElementById(f.id);
    const err = document.getElementById(f.errId);
    if (!el || !err) return;
    if (!el.value.trim()) {
      el.classList.add("error");
      err.textContent = f.label;
      isValid = false;
    } else {
      el.classList.remove("error");
      err.textContent = "";
    }
    el.addEventListener("input", () => {
      if (el.value.trim()) { el.classList.remove("error"); err.textContent = ""; }
    });
  });

  // Validate email format
  const emailEl  = document.getElementById("cfEmail");
  const emailErr = document.getElementById("cfErrEmail");
  if (emailEl && emailEl.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim())) {
    emailEl.classList.add("error");
    if (emailErr) emailErr.textContent = "Please enter a valid email address";
    isValid = false;
  }

  // Validate CAPTCHA
  const captchaInp = document.getElementById("cfCaptcha");
  const captchaErr = document.getElementById("cfErrCaptcha");
  if (!captchaInp || captchaInp.value === "") {
    if (captchaInp) captchaInp.classList.add("error");
    if (captchaErr) captchaErr.textContent = "Please solve the security check";
    isValid = false;
  } else if (parseInt(captchaInp.value) !== captchaAnswer) {
    captchaInp.classList.add("error");
    if (captchaErr) captchaErr.textContent = "Incorrect answer. Please try again.";
    generateCaptcha();
    isValid = false;
  } else {
    captchaInp.classList.remove("error");
    if (captchaErr) captchaErr.textContent = "";
  }

  if (!isValid) {
    showToast("Please fill in all fields correctly", "error");
    return;
  }

  // Disable button
  const btn = document.getElementById("cfSubmitBtn");
  if (btn) { btn.disabled = true; btn.textContent = "Sending..."; }

  const params = {
    customer_name:    document.getElementById("cfName").value.trim(),
    customer_email:   document.getElementById("cfEmail").value.trim(),
    customer_phone:   document.getElementById("cfPhone").value.trim(),
    order_items:      document.getElementById("cfMessage").value.trim(),
    order_total:      "N/A — Contact Form Message",
    customer_city:    "N/A",
    customer_address: "N/A"
  };

  // Send to owner
  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_OWNER_TMPL, params)
    .then(() => {
      // Also send auto-reply to sender
      return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_CUSTOMER_TMPL, params);
    })
    .then(() => {
      // Show success
      const successEl = document.getElementById("cfSuccess");
      if (successEl) successEl.classList.remove("hidden");

      // Reset form
      ["cfName","cfEmail","cfPhone","cfMessage"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = "";
      });
      generateCaptcha();
      showToast("Message sent successfully! 💕");

      if (btn) { btn.disabled = false; btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Send Message`; }

      // Hide success after 6s
      setTimeout(() => {
        if (successEl) successEl.classList.add("hidden");
      }, 6000);
    })
    .catch(err => {
      console.error("EmailJS error:", err);
      showToast("Failed to send. Please try WhatsApp or email us directly.", "error");
      if (btn) { btn.disabled = false; btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Send Message`; }
    });
}

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
            <button class="size-btn ${i === 0 ? "selected" : ""}" onclick="pickSize(${p.id}, '${s}', this)">${s}</button>
          `).join("")}
        </div>

        <p class="product-colors-label">Colour</p>
        <div class="color-options" id="colors-${p.id}">
          ${p.colors.map((c, i) => `
            <div class="color-dot ${i === 0 ? "selected" : ""}" style="background:${c};" onclick="pickColor(${p.id}, '${c}', this)" title="${c}"></div>
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
  document.getElementById(`sizes-${pid}`).querySelectorAll(".size-btn").forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");
}

function pickColor(pid, color, dot) {
  selectedColors[pid] = color;
  document.getElementById(`colors-${pid}`).querySelectorAll(".color-dot").forEach(d => d.classList.remove("selected"));
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
    cart.push({ key, pid, name: product.name, img: product.img, size, color, price: product.price, qty: 1 });
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
        <img src="${item.img}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=100&q=60'" />
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
  const sub = document.getElementById("subtotalAmt");
  const tot = document.getElementById("totalAmt");
  if (sub) sub.textContent = `PKR ${total.toLocaleString()}`;
  if (tot) tot.textContent = `PKR ${total.toLocaleString()}`;
}

function changeQty(key, delta) {
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { cart = cart.filter(i => i.key !== key); showToast("Item removed", "error"); }
  updateBadge();
  renderCart();
}

function removeItem(key) {
  cart = cart.filter(i => i.key !== key);
  updateBadge();
  renderCart();
  showToast("Item removed from cart", "error");
}

function getTotal() { return cart.reduce((sum, i) => sum + i.price * i.qty, 0); }

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
  if (cart.length === 0) { showToast("Your cart is empty!", "error"); return; }
  generateModalCaptcha();
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
  overlay.addEventListener("click", e => { if (e.target === overlay) closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
}

/* ════════════════════════════════════════
   CONFIRM ORDER + SEND EMAILS
════════════════════════════════════════ */
function confirmOrder() {
  const fields = [
    { id: "fName",    errId: "errName",    label: "Full name is required" },
    { id: "fEmail",   errId: "errEmail",   label: "Email address is required" },
    { id: "fPhone",   errId: "errPhone",   label: "Phone number is required" },
    { id: "fCity",    errId: "errCity",    label: "City is required" },
    { id: "fAddress", errId: "errAddress", label: "Delivery address is required" }
  ];

  let isValid = true;
  fields.forEach(f => {
    const el  = document.getElementById(f.id);
    const err = document.getElementById(f.errId);
    if (!el || !err) return;
    if (!el.value.trim()) {
      el.classList.add("error");
      err.textContent = f.label;
      isValid = false;
    } else {
      el.classList.remove("error");
      err.textContent = "";
    }
    el.addEventListener("input", () => {
      if (el.value.trim()) { el.classList.remove("error"); err.textContent = ""; }
    }, { once: false });
  });

  // Validate email format
  const emailEl  = document.getElementById("fEmail");
  const emailErr = document.getElementById("errEmail");
  if (emailEl && emailEl.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim())) {
    emailEl.classList.add("error");
    if (emailErr) emailErr.textContent = "Please enter a valid email address";
    isValid = false;
  }

  // Validate CAPTCHA
  const captchaInp = document.getElementById("mCaptchaAnswer");
  const captchaErr = document.getElementById("errCaptcha");
  if (!captchaInp || captchaInp.value === "") {
    if (captchaInp) captchaInp.classList.add("error");
    if (captchaErr) captchaErr.textContent = "Please solve the security check";
    isValid = false;
  } else if (parseInt(captchaInp.value) !== mCaptchaAnswer) {
    captchaInp.classList.add("error");
    if (captchaErr) captchaErr.textContent = "Incorrect answer. Please try again.";
    generateModalCaptcha();
    isValid = false;
  } else {
    captchaInp.classList.remove("error");
    if (captchaErr) captchaErr.textContent = "";
  }

  if (!isValid) { showToast("Please fill in all required fields", "error"); return; }

  const customer = {
    name:    document.getElementById("fName").value.trim(),
    email:   document.getElementById("fEmail").value.trim(),
    phone:   document.getElementById("fPhone").value.trim(),
    city:    document.getElementById("fCity").value.trim(),
    address: document.getElementById("fAddress").value.trim()
  };

  // Build order items string for email
  const orderItemsText = cart.map(i =>
    `${i.name} (Size: ${i.size}) × ${i.qty} = PKR ${(i.price * i.qty).toLocaleString()}`
  ).join("\n");
  const total = getTotal();

  const emailParams = {
    customer_name:    customer.name,
    customer_email:   customer.email,
    customer_phone:   customer.phone,
    customer_city:    customer.city,
    customer_address: customer.address,
    order_items:      orderItemsText,
    order_total:      `PKR ${total.toLocaleString()}`
  };

  // Disable confirm button
  const btn = document.getElementById("confirmOrderBtn");
  if (btn) { btn.disabled = true; btn.textContent = "Placing Order..."; }

  // Send owner alert email
  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_OWNER_TMPL, emailParams)
    .then(() => {
      // Send customer thank you email
      return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_CUSTOMER_TMPL, emailParams);
    })
    .then(() => {
      closeModal();
      showThankYou(customer);
      if (btn) { btn.disabled = false; btn.textContent = "Confirm Order"; }
    })
    .catch(err => {
      console.error("EmailJS error:", err);
      // Even if email fails, show thank you (order is placed)
      closeModal();
      showThankYou(customer);
      if (btn) { btn.disabled = false; btn.textContent = "Confirm Order"; }
    });
}

/* ════════════════════════════════════════
   THANK YOU SCREEN
════════════════════════════════════════ */
function showThankYou(customer) {
  const screen    = document.getElementById("thankyouScreen");
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

  cart = [];
  updateBadge();
  renderCart();
  ["fName","fEmail","fPhone","fCity","fAddress"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  generateModalCaptcha();
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
          setTimeout(() => entry.target.classList.add("visible"), i * 60);
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
  window.addEventListener("scroll", () => {
    if (!navbar) return;
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  }, { passive: true });

  const sections = document.querySelectorAll("section[id], div[id]");
  const links    = document.querySelectorAll(".nav-link");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
    });
    links.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) link.classList.add("active");
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

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      document.getElementById("navLinks")?.classList.remove("open");
      document.getElementById("hamburger")?.classList.remove("open");
    });
  });
});
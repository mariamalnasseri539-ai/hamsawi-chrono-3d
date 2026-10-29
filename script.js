/**
 * HAMSAWI CHRONO - Luxury Watch & Timepiece Store
 * Complete Store Script:
 * - Full Arabic / English Bilingual Support (i18n & RTL/LTR)
 * - Dark & Light Mode Theme Switcher
 * - Shopping Cart with WhatsApp Order Integration
 * - Interactive Product Category Filtering & Live Search
 * - Interactive Hotspots & Specifications Modal
 * - Toast Notification System
 */

// ==================== I18N DICTIONARY ====================
const translations = {
  en: {
    // Nav
    nav_home: "3D Showroom",
    nav_collection: "Collection",
    nav_specs: "Specifications",
    nav_features: "Innovations",
    nav_reviews: "Reviews",
    nav_contact: "Contact",
    nav_cart: "My Bag",
    currency_label: "USD ($)",

    // Top Bar
    top_phone: "+967 736 637 418",
    top_email: "vip@hamsawi-chrono.com",
    top_location: "Sana'a • Aden • Mukalla",
    top_shipping: "Free Worldwide Express Delivery on All Luxury Timepieces",

    // Hero / Showroom
    hero_badge: "✨ 3D Interactive Exhibition Pedestal",
    hero_title_p1: "HAMSAWI CHRONO",
    hero_title_highlight: "ROYAL EDITION",
    hero_desc: "Experience the pinnacle of horology. Rotate, examine every polished facet in 360°, inspect the sapphire crystal, and customize your royal edition timepiece in real-time.",
    hero_cta_order: "Order Custom Timepiece",
    hero_cta_explore: "Explore Collection",

    // Showroom Controls
    ctrl_title_angles: "Showroom Camera Views",
    ctrl_angle_front: "Front Dial",
    ctrl_angle_profile: "Crown Profile",
    ctrl_angle_caseback: "Caseback Movement",
    ctrl_angle_iso: "3D Isometric",
    ctrl_angle_top: "Top View",

    ctrl_title_finishes: "Materials & Finishes",
    ctrl_finish_gold: "18K Royal Gold",
    ctrl_finish_obsidian: "Obsidian Ceramic",
    ctrl_finish_titanium: "Brushed Titanium",
    ctrl_finish_rosegold: "Sunset Rose Gold",
    ctrl_finish_cyber: "Cyber Midnight",

    ctrl_title_lighting: "Showroom Ambiance",
    ctrl_light_studio: "Studio Spotlight",
    ctrl_light_cyber: "Cyber Neon",
    ctrl_light_sunset: "Golden Sunset",
    ctrl_light_minimal: "Obsidian Dark",

    ctrl_auto_rotate: "360° Turntable Spin",
    ctrl_sound_tick: "Mechanical Tick",
    ctrl_capture: "Capture 3D Snapshot",

    // Specs Section
    specs_badge: "Engineering Precision",
    specs_title: "Mastery in Every Micron",
    specs_subtitle: "Crafted for connoisseurs of timeless precision and modern luxury.",
    spec_1_title: "Grade-5 Titanium Case",
    spec_1_desc: "Ultralight, corrosion-proof aerospace metallurgy with hand-chamfered edges.",
    spec_2_title: "Dual Sapphire Crystal",
    spec_2_desc: "Scratch-resistant synthetic sapphire with 7-layer anti-reflective coating.",
    spec_3_title: "Calibre 9000 Chronograph",
    spec_3_desc: "Swiss automatic movement with 72-hour power reserve and 28,800 vph.",
    spec_4_title: "100M Water Resistance",
    spec_4_desc: "Screw-down crown with triple gasket seal for uncompromising diving security.",

    // Collection
    collection_badge: "Signature Timepieces",
    collection_title: "The Hamsawi Chrono Series",
    collection_subtitle: "Discover iconic watches designed to leave an everlasting impression",
    filter_all: "All Series",
    filter_chrono: "Chronographs",
    filter_smart: "Smart Pro",
    filter_diver: "Diver 300M",
    filter_gold: "Gold Heritage",
    btn_add_cart: "Add to Bag",
    btn_quick_view: "Inspect 3D",

    // Cart Modal
    cart_title: "Your Luxury Bag",
    cart_empty: "Your bag is empty. Explore our 3D Showroom!",
    cart_total: "Order Total:",
    cart_clear: "Clear Bag",
    cart_whatsapp: "Order via WhatsApp",

    // Footer
    footer_tagline: "The premier luxury horology atelier in Yemen & the Arabian Gulf.",
    footer_rights: "All rights reserved.",
    footer_credits: "Developed with ❤️ by Hamsawi Tech • 3D WebGL Portfolio Project",

    // Toasts
    toast_added: "added to your luxury bag!",
    toast_cleared: "Bag cleared.",
    toast_theme: "Theme switched",
    toast_lang: "Language switched to English",
    toast_snapshot: "📸 High-resolution 3D snapshot downloaded!"
  },

  ar: {
    // Nav
    nav_home: "منصة العرض 3D",
    nav_collection: "المجموعة الملكية",
    nav_specs: "المواصفات الفنية",
    nav_features: "الابتكارات",
    nav_reviews: "آراء النخبة",
    nav_contact: "تواصل معنا",
    nav_cart: "حقيبة الشراء",
    currency_label: "ريال يمني (YR)",

    // Top Bar
    top_phone: "736637418 (967+)",
    top_email: "vip@hamsawi-chrono.com",
    top_location: "صنعاء • عدن • المكلا",
    top_shipping: "توصيل ملكي مجاني مؤمن لجميع المدن والمحافظات",

    // Hero / Showroom
    hero_badge: "✨ منصة عرض تفاعلية ثلاثية الأبعاد (360° 3D Turntable)",
    hero_title_p1: "ساعات حمساوي الفاخرة",
    hero_title_highlight: "HAMSAWI CHRONO",
    hero_desc: "شاهد الساعة وهي تلف وتدور على منصة العرض الملكية من جميع جهاتها وزواياها! يمكنك لمس الساعة وتدويرها بحرية، تكبير الزوايا، فحص التاج والمحرك الخلفي، وتغيير الخامات والإضاءات فورياً.",
    hero_cta_order: "طلب الساعة المخصصة",
    hero_cta_explore: "استعراض المجموعة",

    // Showroom Controls
    ctrl_title_angles: "زوايا كاميرا المعرض",
    ctrl_angle_front: "الميناء الأمامي",
    ctrl_angle_profile: "الجانب والتاج",
    ctrl_angle_caseback: "المحرك الخلفي",
    ctrl_angle_iso: "منظور فخم 3D",
    ctrl_angle_top: "عرض علوي",

    ctrl_title_finishes: "الخامات والألوان",
    ctrl_finish_gold: "ذهب ملكي 18K",
    ctrl_finish_obsidian: "سيراميك أوبسيديان",
    ctrl_finish_titanium: "تيتانيوم مصقول",
    ctrl_finish_rosegold: "روز جولد فاخر",
    ctrl_finish_cyber: "أزرق سايبر نيون",

    ctrl_title_lighting: "إضاءات منصة العرض",
    ctrl_light_studio: "استوديو احترافي",
    ctrl_light_cyber: "نيون سايبر",
    ctrl_light_sunset: "غروب ذهبي دافئ",
    ctrl_light_minimal: "إضاءة ليلية خافتة",

    ctrl_auto_rotate: "دوران المنصة 360°",
    ctrl_sound_tick: "صوت دقات الساعة",
    ctrl_capture: "التقاط صورة 3D بدقة عالية",

    // Specs Section
    specs_badge: "هندسة الدقة المتناهية",
    specs_title: "إتقان في كل ميكرون",
    specs_subtitle: "صُممت لأصحاب الذوق الرفيع وعشاق الساعات الميكانيكية والذكية الفاخرة.",
    spec_1_title: "جرم تيتانيوم درجة 5",
    spec_1_desc: "معدن طيران فائق الخفة ومقاوم للصدمات مع حواف مشطوفة يدوياً.",
    spec_2_title: "زجاج ياقوتي مزدوج (Sapphire)",
    spec_2_desc: "مقاوم للخدش بنسبة 100% مع 7 طبقات لامتصاص الانعكاسات الضوئية.",
    spec_3_title: "محرك كاليبر 9000 السويسري",
    spec_3_desc: "حركة أوتوماتيكية باحتياطي طاقة 72 ساعة وتردد 28,800 ذبذبة/ساعة.",
    spec_4_title: "مقاومة ماء حتى عمق 100 متر",
    spec_4_desc: "تاج محكم لولبياً مع صمامات حماية ثلاثية للغوص والرياضات المائية.",

    // Collection
    collection_badge: "مجموعاتنا المتميزة",
    collection_title: "سلسلة ساعات حمساوي كرونو",
    collection_subtitle: "اكتشف تحفاً فنية صُممت لتدوم أجيالاً وتخطف الأنظار",
    filter_all: "جميع الساعات",
    filter_chrono: "كرونوغراف",
    filter_smart: "سمارت برو",
    filter_diver: "دايفر 300M",
    filter_gold: "هيريتدج ذهبي",
    btn_add_cart: "أضف للحقيبة",
    btn_quick_view: "معاينة 3D",

    // Cart Modal
    cart_title: "حقيبة مقتنياتك الفاخرة",
    cart_empty: "حقيبتك فارغة حالياً. تصفح المعرض وأضف ساعتك المميزة!",
    cart_total: "المجموع الكلي:",
    cart_clear: "تفريغ الحقيبة",
    cart_whatsapp: "إرسال الطلب عبر واتساب",

    // Footer
    footer_tagline: "دار الساعات الفاخرة والكرونوغراف الرائدة في اليمن والخليج العربي.",
    footer_rights: "جميع الحقوق محفوظة.",
    footer_credits: "تم التطوير والإخراج بكل إتقان • مشروع بورتفوليو 3D WebGL",

    // Toasts
    toast_added: "تمت إضافتها إلى حقيبة مقتنياتك!",
    toast_cleared: "تم إفراغ الحقيبة.",
    toast_theme: "تم تبديل المظهر",
    toast_lang: "تم تحويل اللغة إلى العربية",
    toast_snapshot: "📸 تم التقاط وحفظ صورة 3D بدقة عالية!"
  }
};

// ==================== APP STATE ====================
let currentLang = localStorage.getItem("hamsawi_lang") || "ar";
let currentTheme = localStorage.getItem("hamsawi_theme") || "dark";
let cartItems = JSON.parse(localStorage.getItem("hamsawi_cart") || "[]");

// Products Data
const productsData = [
  {
    id: "h1",
    name_en: "Hamsawi Royal Chrono 18K",
    name_ar: "حمساوي رويال كرونو ذهب 18K",
    category: "chrono",
    price: 1250,
    rating: "5.0",
    img: "new-product-3.jpg",
    desc_en: "18K Yellow Gold with ceramic bezel, automatic movement, and sapphire display.",
    desc_ar: "ذهب أصفر عيار 18 مع إطار سيراميك، حركة أوتوماتيكية، وميناء ياقوتي فاخر."
  },
  {
    id: "h2",
    name_en: "Phantom Obsidian Edition",
    name_ar: "فانتوم أوبسيديان سيراميك",
    category: "chrono",
    price: 980,
    rating: "4.9",
    img: "new-product-3.jpg",
    desc_en: "Stealth matte black ceramic case with cyan neon luminescent hands.",
    desc_ar: "هيكل سيراميك أسود غير لامع مع عقارب مضيئة بنور النيون السماوي."
  },
  {
    id: "h3",
    name_en: "Titanium Aero Diver 300M",
    name_ar: "تيتانيوم إيرو دايفر 300م",
    category: "diver",
    price: 1100,
    rating: "5.0",
    img: "new-product-3.jpg",
    desc_en: "Grade 5 brushed titanium with helium escape valve and 300m water resistance.",
    desc_ar: "تيتانيوم مصقول فئة 5 مع صمام تنفيس الهيليوم ومقاومة ماء 300 متر."
  },
  {
    id: "h4",
    name_en: "Smartwatch Ultra Pro",
    name_ar: "سمارت واتش ألترا برو",
    category: "smart",
    price: 450,
    rating: "4.8",
    img: "new-product-3.jpg",
    desc_en: "OLED sapphire display, ECG monitor, titanium casing, and 14-day battery life.",
    desc_ar: "شاشة أوليد ياقوتية، تخطيط قلب ECG، جرم تيتانيوم، وبطارية تدوم 14 يوماً."
  },
  {
    id: "h5",
    name_en: "Sunset Rose Gold Heritage",
    name_ar: "صن سيت روز جولد هيريتدج",
    category: "gold",
    price: 1350,
    rating: "5.0",
    img: "new-product-3.jpg",
    desc_en: "Hand-finished rose gold alloy with Italian alligator leather strap.",
    desc_ar: "سبيكة روز جولد بتشطيب يدوي سويسري مع حزام جلد تمساح إيطالي فاخر."
  },
  {
    id: "h6",
    name_en: "Cyber Midnight Chrono",
    name_ar: "سايبر ميدنايت كرونوغراف",
    category: "smart",
    price: 890,
    rating: "4.9",
    img: "new-product-3.jpg",
    desc_en: "Deep blue PVD titanium alloy, dual chronograph counters, and sapphire glass.",
    desc_ar: "تيتانيوم معالج بطبقة PVD كحلية داكنة مع عدادات كرونوغراف وزجاج ياقوت."
  }
];

// ==================== DOM READY ====================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage();
  initProductGrid();
  initCart();
  initModals();
});

// ==================== THEME MANAGEMENT ====================
function initTheme() {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  applyTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(currentTheme);
      showToast(translations[currentLang].toast_theme);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("hamsawi_theme", theme);

  const icon = document.querySelector("#themeToggleBtn i");
  if (icon) {
    icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }
}

// ==================== LANGUAGE MANAGEMENT ====================
function initLanguage() {
  const langToggleBtn = document.getElementById("langToggleBtn");
  applyLanguage(currentLang);

  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      currentLang = currentLang === "ar" ? "en" : "ar";
      applyLanguage(currentLang);
      showToast(translations[currentLang].toast_lang);
    });
  }
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("hamsawi_lang", lang);

  const isRTL = lang === "ar";
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");

  // Update data-i18n elements
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update button text
  const langBtnText = document.getElementById("langBtnText");
  if (langBtnText) {
    langBtnText.textContent = lang === "ar" ? "English" : "العربية";
  }

  // Re-render product grid in current language
  renderProducts();
  updateCartUI();
}

// ==================== PRODUCT GRID & FILTER ====================
function initProductGrid() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      renderProducts(category);
    });
  });

  renderProducts("all");
}

function renderProducts(category = "all") {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  const filtered = category === "all"
    ? productsData
    : productsData.filter((p) => p.category === category);

  grid.innerHTML = filtered.map((prod) => `
    <div class="product-card" data-category="${prod.category}">
      <div class="product-card-img-box">
        <img src="${prod.img}" alt="${currentLang === 'ar' ? prod.name_ar : prod.name_en}">
        <span class="product-badge">${prod.rating} ★</span>
      </div>
      <div class="product-card-body">
        <h3 class="product-card-title">${currentLang === "ar" ? prod.name_ar : prod.name_en}</h3>
        <p class="product-card-desc">${currentLang === "ar" ? prod.desc_ar : prod.desc_en}</p>
        <div class="product-card-bottom">
          <span class="product-price">$${prod.price}</span>
          <button class="btn btn-primary btn-sm" onclick="addToCartById('${prod.id}')">
            <i class="fa-solid fa-cart-plus"></i>
            ${translations[currentLang].btn_add_cart}
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

// ==================== CART & ORDER MANAGEMENT ====================
function initCart() {
  const cartTriggerBtns = document.querySelectorAll(".cart-trigger-btn");
  const cartModal = document.getElementById("cartModal");
  const cartCloseBtn = document.getElementById("cartCloseBtn");
  const clearCartBtn = document.getElementById("clearCartBtn");
  const whatsappOrderBtn = document.getElementById("whatsappOrderBtn");

  cartTriggerBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openModal("cartModal");
    });
  });

  if (cartCloseBtn) {
    cartCloseBtn.addEventListener("click", () => closeModal("cartModal"));
  }

  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      cartItems = [];
      saveCart();
      updateCartUI();
      showToast(translations[currentLang].toast_cleared);
    });
  }

  if (whatsappOrderBtn) {
    whatsappOrderBtn.addEventListener("click", () => {
      if (cartItems.length === 0) return;
      const phone = "967736637418";
      let msg = currentLang === "ar"
        ? `*طلب ساعات فاخرة من موقع حمساوي كرونو:*%0A------------------------%0A`
        : `*New Luxury Watch Order from Hamsawi Chrono:*%0A------------------------%0A`;

      let total = 0;
      cartItems.forEach((item, idx) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        msg += `${idx + 1}. ${item.name} (${item.quantity}x) - $${itemTotal}%0A`;
      });

      msg += `------------------------%0A*المجموع:* $${total}%0Aالعنوان: اليمن - صنعاء / عدن / المكلا`;
      window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
    });
  }

  updateCartUI();
}

function addToCartById(productId) {
  const prod = productsData.find((p) => p.id === productId);
  if (!prod) return;

  const name = currentLang === "ar" ? prod.name_ar : prod.name_en;
  const existing = cartItems.find((item) => item.id === prod.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cartItems.push({
      id: prod.id,
      name: name,
      price: prod.price,
      image: prod.img,
      quantity: 1
    });
  }

  saveCart();
  updateCartUI();
  showToast(`✨ "${name}" ${translations[currentLang].toast_added}`);
}
window.addToCartById = addToCartById;

function updateCartQty(index, delta) {
  if (cartItems[index]) {
    cartItems[index].quantity += delta;
    if (cartItems[index].quantity <= 0) {
      cartItems.splice(index, 1);
    }
    saveCart();
    updateCartUI();
  }
}
window.updateCartQty = updateCartQty;

function saveCart() {
  localStorage.setItem("hamsawi_cart", JSON.stringify(cartItems));
}

function updateCartUI() {
  const badgeCounts = document.querySelectorAll(".cart-badge-count");
  const cartList = document.getElementById("cartItemsList");
  const cartTotalPrice = document.getElementById("cartTotalPrice");
  const whatsappOrderBtn = document.getElementById("whatsappOrderBtn");

  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  badgeCounts.forEach((b) => {
    b.textContent = totalCount;
    b.style.display = totalCount > 0 ? "inline-flex" : "none";
  });

  if (cartTotalPrice) cartTotalPrice.textContent = `$${totalPrice.toLocaleString()}`;
  if (whatsappOrderBtn) whatsappOrderBtn.disabled = cartItems.length === 0;

  if (!cartList) return;

  if (cartItems.length === 0) {
    cartList.innerHTML = `
      <div style="text-align:center; padding:35px 20px; color:var(--text-muted);">
        <i class="fa-solid fa-clock-rotate-left" style="font-size:2.8rem; margin-bottom:12px; color:var(--text-dim);"></i>
        <p>${translations[currentLang].cart_empty}</p>
      </div>
    `;
    return;
  }

  cartList.innerHTML = cartItems.map((item, index) => `
    <div class="cart-item-row">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <span class="cart-item-price">$${(item.price * item.quantity).toLocaleString()} ($${item.price} ea)</span>
      </div>
      <div class="cart-qty-ctrls">
        <button onclick="updateCartQty(${index}, -1)" class="cart-qty-btn"><i class="fa-solid fa-minus"></i></button>
        <span class="cart-qty-num">${item.quantity}</span>
        <button onclick="updateCartQty(${index}, 1)" class="cart-qty-btn"><i class="fa-solid fa-plus"></i></button>
      </div>
    </div>
  `).join("");
}

// ==================== MODALS ====================
function initModals() {
  document.querySelectorAll(".modal-overlay").forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay.active").forEach((m) => m.classList.remove("active"));
      document.body.style.overflow = "";
    }
  });
}

function openModal(id) {
  const m = document.getElementById(id);
  if (m) {
    m.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(id) {
  const m = document.getElementById(id);
  if (m) {
    m.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// ==================== TOAST SYSTEM ====================
function showToast(message) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast-item";
  toast.innerHTML = `
    <div class="toast-content">
      <i class="fa-solid fa-gem toast-icon"></i>
      <span>${message}</span>
    </div>
  `;

  container.appendChild(toast);
  setTimeout(() => toast.classList.add("show"), 10);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

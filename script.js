/**
 * RateJajanan - Peta Interaktif & Review Kuliner Kaki Lima
 * Kategori: Cilok, Batagor, Seblak (Bandung, Jakarta, Yogyakarta)
 * Peta: OpenStreetMap (100% Gratis, Tanpa API Key)
 */

// Helper: Menjamin foto 100% sesuai kategori makanan
function getCategoryFallbackImage(category, id = 1) {
  const cat = (category || "").toLowerCase();
  const n = Number(id) || 1;
  if (cat === "cilok") return n % 2 === 0 ? "images/cilok_2.jpg" : "images/cilok_1.jpg";
  if (cat === "batagor") return n % 2 === 0 ? "images/batagor_2.jpg" : "images/batagor_1.jpg";
  if (cat === "seblak") return n % 2 === 0 ? "images/seblak_2.jpg" : "images/seblak_1.jpg";
  return "images/cilok_1.jpg";
}

// ==========================================
// 1. DATASET 12 SPOT JAJANAN PILIHAN UTAMA
// ==========================================
const DEFAULT_JAJANAN_DATA = [
  // --- CILOK (4 SPOT) ---
  {
    id: 1,
    name: "Cilok Goreng Setiabudhi",
    category: "cilok",
    city: "Bandung",
    lat: -6.8601,
    lng: 107.5942,
    price: 10000,
    priceRange: "Rp 10.000 / porsi",
    rating: 4.9,
    reviewsCount: 850,
    spicyLevel: 3,
    address: "Jl. Dr. Setiabudi No. 120, Gegerkalong, Bandung",
    image: "images/cilok_1.jpg",
    tags: ["Legendaris 1998", "Cilok Goreng Telur", "Bumbu Kacang"],
    hours: "10.00 - 21.00 WIB",
    scores: { rasa: 4.9, bumbu: 4.9, porsi: 4.8, kebersihan: 4.6, value: 5.0 },
    reviewStory: "Cilok legendaris Bandung Utara dengan balutan telur kocok garing keemasan dan bumbu kacang gurih pedas manis yang melimpah.",
    comments: [
      { author: "Budi Santoso", time: "2 hari lalu", text: "Selalu antre tiap sore, bumbu kacangnya juara dunia!" },
      { author: "Nadia Rahma", time: "5 hari lalu", text: "Paling suka minta bumbunya dipisah biar ciloknya tetap kriuk telur." }
    ]
  },
  {
    id: 2,
    name: "Cilok Denok Braga",
    category: "cilok",
    city: "Bandung",
    lat: -6.9174,
    lng: 107.6098,
    price: 12000,
    priceRange: "Rp 12.000 / porsi",
    rating: 4.8,
    reviewsCount: 620,
    spicyLevel: 4,
    address: "Jl. Braga No. 45, Sumur Bandung, Kota Bandung",
    image: "images/cilok_2.jpg",
    tags: ["Kuah Mercon", "Isi Daging Sapi", "Braga Hits"],
    hours: "15.00 - 23.30 WIB",
    scores: { rasa: 4.8, bumbu: 4.9, porsi: 4.7, kebersihan: 4.7, value: 4.8 },
    reviewStory: "Cilok kuah mercon pedas gurih dengan isian daging cincang tebal dan perasan jeruk limau segar di kawasan Braga.",
    comments: [
      { author: "Rian Pratama", time: "Kemarin", text: "Kuah kaldunya gurih dan pedasnya nendang banget!" }
    ]
  },
  {
    id: 3,
    name: "Cilok Kuah Pedas Tebet",
    category: "cilok",
    city: "Jakarta",
    lat: -6.2415,
    lng: 106.8001,
    price: 12000,
    priceRange: "Rp 12.000 / mangkuk",
    rating: 4.7,
    reviewsCount: 430,
    spicyLevel: 4,
    address: "Jl. Tebet Timur Dalam Raya No. 34, Jakarta Selatan",
    image: "images/cilok_2.jpg",
    tags: ["Kaldu Sapi", "Rawit Pedas", "Kuliner Tebet"],
    hours: "11.00 - 22.00 WIB",
    scores: { rasa: 4.7, bumbu: 4.8, porsi: 4.6, kebersihan: 4.6, value: 4.7 },
    reviewStory: "Cilok kenyal disajikan dalam mangkuk kaldu sapi hangat bertabur tetelan empuk dan irisan cabai rawit pedas.",
    comments: [
      { author: "Kevin Anggara", time: "3 hari lalu", text: "Tetelannya empuk, pas banget dimakan pas malam hari di Tebet." }
    ]
  },
  {
    id: 4,
    name: "Cilok Gajahan Alun-Alun Kidul",
    category: "cilok",
    city: "Yogyakarta",
    lat: -7.8124,
    lng: 110.3639,
    price: 8000,
    priceRange: "Rp 8.000 / porsi",
    rating: 4.9,
    reviewsCount: 940,
    spicyLevel: 2,
    address: "Alun-Alun Kidul, Kraton, Kota Yogyakarta",
    image: "images/cilok_1.jpg",
    tags: ["Pelopor Jogja", "Bumbu Medok", "Antrean Hits"],
    hours: "14.30 - 18.00 WIB",
    scores: { rasa: 4.9, bumbu: 5.0, porsi: 4.8, kebersihan: 4.5, value: 5.0 },
    reviewStory: "Pelopor cilok paling ramai di Alun-Alun Kidul Jogja. Teksturnya sangat empuk dengan siraman bumbu kacang medok manis gurih nikmat.",
    comments: [
      { author: "Fitri Astuti", time: "1 minggu lalu", text: "Satu porsi nggak bakal cukup, bumbu kacangnya juara se-Jogja!" }
    ]
  },

  // --- BATAGOR (4 SPOT) ---
  {
    id: 5,
    name: "Batagor Kingsley Bandung",
    category: "batagor",
    city: "Bandung",
    lat: -6.9189,
    lng: 107.6145,
    price: 25000,
    priceRange: "Rp 25.000 / porsi",
    rating: 4.9,
    reviewsCount: 1250,
    spicyLevel: 2,
    address: "Jl. Veteran No. 25, Kebon Pisang, Bandung",
    image: "images/batagor_1.jpg",
    tags: ["Tenggiri Asli", "Legendaris 1982", "Juara Bandung"],
    hours: "08.00 - 20.00 WIB",
    scores: { rasa: 5.0, bumbu: 4.9, porsi: 4.8, kebersihan: 4.9, value: 4.7 },
    reviewStory: "Raja batagor di kota Bandung! Dibuat dari daging tenggiri segar pilihan tanpa bau amis, kulit renyah garing, dan saus kacang legit beraroma limau.",
    comments: [
      { author: "Dewi Lestari", time: "Kemarin", text: "Daging tenggirinya sangat tebal dan kriuknya tahan lama!" },
      { author: "Hendra Wijaya", time: "3 hari lalu", text: "Oleh-oleh wajib setiap kali main ke Bandung." }
    ]
  },
  {
    id: 6,
    name: "Batagor Darto Simpang Dago",
    category: "batagor",
    city: "Bandung",
    lat: -6.8856,
    lng: 107.6141,
    price: 18000,
    priceRange: "Rp 18.000 / porsi",
    rating: 4.8,
    reviewsCount: 710,
    spicyLevel: 3,
    address: "Jl. Ir. H. Juanda No. 202, Simpang Dago, Bandung",
    image: "images/batagor_2.jpg",
    tags: ["Batagor Kuah", "Ceker Empuk", "Legendaris 1980"],
    hours: "09.00 - 21.00 WIB",
    scores: { rasa: 4.8, bumbu: 4.8, porsi: 4.8, kebersihan: 4.6, value: 4.9 },
    reviewStory: "Spesialis batagor kuah kaldu sapi hangat legendaris di Simpang Dago dengan pelengkap ceker lunak gurih nikmat.",
    comments: [
      { author: "Reza Fahlevi", time: "5 hari lalu", text: "Batagor kuahnya pas banget disantap malam hari saat udara Dago dingin." }
    ]
  },
  {
    id: 7,
    name: "Batagor Abun Kelapa Gading",
    category: "batagor",
    city: "Jakarta",
    lat: -6.1582,
    lng: 106.9048,
    price: 26000,
    priceRange: "Rp 26.000 / porsi",
    rating: 4.9,
    reviewsCount: 840,
    spicyLevel: 2,
    address: "Jl. Boulevard Raya Blok QA 1 No. 8, Kelapa Gading, Jakarta Utara",
    image: "images/batagor_1.jpg",
    tags: ["Tenggiri Tebal", "Pangsit Krispi", "Favorit Jakut"],
    hours: "10.30 - 21.30 WIB",
    scores: { rasa: 4.9, bumbu: 4.9, porsi: 4.8, kebersihan: 4.9, value: 4.7 },
    reviewStory: "Batagor premium favorit Jakarta Utara dengan adonan tenggiri padat gurih dan saus kacang harum jeruk purut.",
    comments: [
      { author: "Jessica Tan", time: "Kemarin", text: "Batagor paling enak di Kelapa Gading, garingnya mantap!" }
    ]
  },
  {
    id: 8,
    name: "Batagor Pak Is Colombo",
    category: "batagor",
    city: "Yogyakarta",
    lat: -7.7781,
    lng: 110.3835,
    price: 14000,
    priceRange: "Rp 14.000 / porsi",
    rating: 4.8,
    reviewsCount: 530,
    spicyLevel: 2,
    address: "Jl. Colombo No. 16 (Dekat UNY), Sleman, Yogyakarta",
    image: "images/batagor_1.jpg",
    tags: ["Kriuk Tahan Lama", "Harga Mahasiswa", "Favorit Kampus"],
    hours: "10.00 - 20.00 WIB",
    scores: { rasa: 4.8, bumbu: 4.8, porsi: 4.9, kebersihan: 4.7, value: 5.0 },
    reviewStory: "Batagor kaki lima paling renyah di kawasan kampus Colombo dengan bumbu kacang manis gurih sedap dan harga ramah kantong mahasiswa.",
    comments: [
      { author: "Novi Anggraeni", time: "Seminggu lalu", text: "Kriuknya tahan lama walau sudah disiram bumbu kacang panas." }
    ]
  },

  // --- SEBLAK (4 SPOT) ---
  {
    id: 9,
    name: "Seblak Sultan Prasmanan",
    category: "seblak",
    city: "Bandung",
    lat: -6.9038,
    lng: 107.6105,
    price: 18000,
    priceRange: "Rp 15.000 - Rp 25.000",
    rating: 4.9,
    reviewsCount: 980,
    spicyLevel: 5,
    address: "Jl. Sultan Agung No. 10, Citarum, Bandung Wetan",
    image: "images/seblak_2.jpg",
    tags: ["Prasmanan 30+ Topping", "Kencur Nampol", "Viral TikTok"],
    hours: "11.00 - 21.30 WIB",
    scores: { rasa: 5.0, bumbu: 5.0, porsi: 4.9, kebersihan: 4.8, value: 4.9 },
    reviewStory: "Pelopor seblak prasmanan modern dengan pilihan kerupuk mawar, dumpling keju, suki seafood, dan kuah kencur medok pedas beraroma.",
    comments: [
      { author: "Salma Putri", time: "Kemarin", text: "Kuahnya kental rempah banget, bumbu kencurnya berasa nikmat!" },
      { author: "Bayu Pratama", time: "4 hari lalu", text: "Level 3 aja udah banjir keringat, nagih pol." }
    ]
  },
  {
    id: 10,
    name: "Seblak Teh Betty Antapani",
    category: "seblak",
    city: "Bandung",
    lat: -6.9248,
    lng: 107.6358,
    price: 20000,
    priceRange: "Rp 18.000 / porsi",
    rating: 4.8,
    reviewsCount: 770,
    spicyLevel: 4,
    address: "Jl. Ters. Jakarta No. 78, Antapani Kulon, Bandung",
    image: "images/seblak_1.jpg",
    tags: ["Tulang Rangu Empuk", "Kuah Merah Medok", "Ceker Lembut"],
    hours: "12.00 - 22.00 WIB",
    scores: { rasa: 4.8, bumbu: 4.9, porsi: 4.9, kebersihan: 4.6, value: 4.8 },
    reviewStory: "Seblak kaya rempah dengan tulang rangu sapi gurih dan ceker empuk tanpa tulang dalam kuah merah merona yang gurih pedas.",
    comments: [
      { author: "Gita Savitri", time: "5 hari lalu", text: "Cekernya beneran empuk banget dan kuahnya kental gurih." }
    ]
  },
  {
    id: 11,
    name: "Seblak Jeletet Murni",
    category: "seblak",
    city: "Jakarta",
    lat: -6.1362,
    lng: 106.8427,
    price: 22000,
    priceRange: "Rp 20.000 - Rp 30.000",
    rating: 4.8,
    reviewsCount: 1100,
    spicyLevel: 5,
    address: "Jl. Pademangan IV Gang 4 No. 5, Jakarta Utara",
    image: "images/seblak_1.jpg",
    tags: ["Super Pedas Rawit", "Pelopor Jakarta", "Viral Sejak 2017"],
    hours: "13.00 - 22.00 WIB",
    scores: { rasa: 4.8, bumbu: 4.7, porsi: 4.8, kebersihan: 4.5, value: 4.7 },
    reviewStory: "Tantangan pedas legendaris Jakarta dengan rawit merah melimpah, isian kwetiau, kerupuk, ceker empuk, dan kikil kenyal gurih.",
    comments: [
      { author: "Eko Prasetyo", time: "2 hari lalu", text: "Pedasnya paling gila se-Jakarta, tapi bikin nagih terus!" }
    ]
  },
  {
    id: 12,
    name: "Seblak Asgar Kencur Nampol",
    category: "seblak",
    city: "Yogyakarta",
    lat: -7.7695,
    lng: 110.3781,
    price: 14000,
    priceRange: "Rp 14.000 / porsi",
    rating: 4.8,
    reviewsCount: 540,
    spicyLevel: 4,
    address: "Jl. Kaliurang KM 5.2, Sleman, Yogyakarta",
    image: "images/seblak_2.jpg",
    tags: ["Asli Garut", "Kencur Kuat", "Favorit Jakal"],
    hours: "11.30 - 21.00 WIB",
    scores: { rasa: 4.8, bumbu: 4.8, porsi: 4.8, kebersihan: 4.6, value: 5.0 },
    reviewStory: "Dikelola perantau asal Garut dengan cita rasa Sunda otentik tanpa dimaniskan. Aroma kencurnya harum segar dengan kuah cabai melimpah.",
    comments: [
      { author: "Mega Utami", time: "1 minggu lalu", text: "Obat kangen seblak Sunda buat anak rantau di Jogja!" }
    ]
  }
];

// ==========================================
// 2. STATE MANAGEMENT & STORAGE
// ==========================================
const STORAGE_KEY_ITEMS = "ratejajanan_items_vFINAL";
const STORAGE_KEY_BOOKMARKS = "ratejajanan_bookmarks_vFINAL";

let jajananItems = [];
let bookmarkedIds = [];
let currentFilterCategory = "semua";
let currentFilterCity = "semua";
let currentFilterSpicy = "semua";
let currentSort = "rating-desc";
let currentSearchQuery = "";
let showBookmarksOnly = false;

// Map & Markers Reference
let map = null;
let mapMarkers = [];

// Koordinat Kota
const CITY_COORDINATES = {
  Bandung: { lat: -6.9175, lng: 107.6191, zoom: 13 },
  Jakarta: { lat: -6.2088, lng: 106.8456, zoom: 12 },
  Yogyakarta: { lat: -7.7956, lng: 110.3695, zoom: 13 }
};

// ==========================================
// 3. INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  loadData();
  setupEventListeners();

  // 1. Render kartu jajanan langsung agar tampilan web segera muncul
  renderAllCardsAndUI();
  updateBookmarkBadge();
  updateTotalSpotsCounter();

  // 2. Inisialisasi peta secara aman
  setTimeout(() => {
    try {
      initMap();
      renderMapMarkers(getFilteredAndSortedItems());
    } catch (err) {
      console.warn("Leaflet Map init notice:", err);
    }
  }, 100);
});

function loadData() {
  // Bersihkan cache versi lama agar tidak ada data rusak yang tersimpan
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("ratejajanan_items_") && key !== STORAGE_KEY_ITEMS) {
        localStorage.removeItem(key);
      }
    }
  } catch (e) {}

  const storedItems = localStorage.getItem(STORAGE_KEY_ITEMS);
  if (storedItems) {
    try {
      jajananItems = JSON.parse(storedItems);
      if (!Array.isArray(jajananItems) || jajananItems.length === 0) {
        jajananItems = [...DEFAULT_JAJANAN_DATA];
        saveData();
      }
    } catch (e) {
      jajananItems = [...DEFAULT_JAJANAN_DATA];
      saveData();
    }
  } else {
    jajananItems = [...DEFAULT_JAJANAN_DATA];
    saveData();
  }

  const storedBookmarks = localStorage.getItem(STORAGE_KEY_BOOKMARKS);
  if (storedBookmarks) {
    try { bookmarkedIds = JSON.parse(storedBookmarks); } catch (e) { bookmarkedIds = []; }
  } else {
    bookmarkedIds = [];
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY_ITEMS, JSON.stringify(jajananItems));
  updateTotalSpotsCounter();
}

function saveBookmarks() {
  localStorage.setItem(STORAGE_KEY_BOOKMARKS, JSON.stringify(bookmarkedIds));
  updateBookmarkBadge();
}

function updateTotalSpotsCounter() {
  const statCounter = document.getElementById("total-spots-stat");
  if (statCounter) {
    statCounter.textContent = `${jajananItems.length}+`;
  }
}

// ==========================================
// 4. LEAFLET INTERACTIVE MAP (OPENSTREETMAP)
// ==========================================
function initMap() {
  const mapContainer = document.getElementById("map");
  if (!mapContainer || typeof L === "undefined") return;

  if (map) {
    map.remove();
    map = null;
  }

  // Set view ke Bandung - Jakarta - Jogja overview
  map = L.map("map", { zoomControl: false, scrollWheelZoom: true }).setView([-7.0, 108.5], 7);
  L.control.zoom({ position: "topright" }).addTo(map);

  // OPENSTREETMAP: 100% GRATIS & TANPA PERLU API KEY
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(map);

  const recenterBtn = document.getElementById("recenter-map-btn");
  if (recenterBtn) {
    recenterBtn.onclick = () => {
      if (currentFilterCity !== "semua" && CITY_COORDINATES[currentFilterCity]) {
        const coords = CITY_COORDINATES[currentFilterCity];
        map.flyTo([coords.lat, coords.lng], coords.zoom, { duration: 1 });
      } else {
        map.flyTo([-7.0, 108.5], 7, { duration: 1 });
      }
    };
  }
}

function getCategoryIcon(cat) {
  if (cat === "cilok") return "🍢";
  if (cat === "batagor") return "🥟";
  if (cat === "seblak") return "🍜";
  return "🍴";
}

function renderMapMarkers(items) {
  if (!map || typeof L === "undefined") return;

  mapMarkers.forEach(m => map.removeLayer(m));
  mapMarkers = [];
  const markerBounds = [];

  items.forEach(item => {
    const iconHtml = `
      <div class="custom-food-marker marker-${item.category}">
        <div class="marker-pin"><span>${getCategoryIcon(item.category)}</span></div>
        <div class="marker-shadow"></div>
      </div>
    `;

    const customIcon = L.divIcon({
      html: iconHtml,
      className: "custom-leaflet-marker",
      iconSize: [36, 44],
      iconAnchor: [18, 42],
      popupAnchor: [0, -38]
    });

    const safeImage = item.image || getCategoryFallbackImage(item.category, item.id);

    const popupHtml = `
      <div class="marker-popup-content">
        <img src="${safeImage}" alt="${item.name}" class="popup-img" onerror="this.src=getCategoryFallbackImage('${item.category}', ${item.id})">
        <div class="popup-body">
          <span class="badge-category cat-${item.category}">${getCategoryIcon(item.category)} ${item.category.toUpperCase()} • ${item.city}</span>
          <h4 class="popup-title">${item.name}</h4>
          <p class="popup-address"><i class="fa-solid fa-location-dot"></i> ${item.address}</p>
          <div class="popup-meta">
            <span class="popup-rating"><i class="fa-solid fa-star"></i> ${item.rating}</span>
            <span class="popup-price">${item.priceRange}</span>
          </div>
          <button class="btn btn-sm btn-primary popup-action-btn" onclick="openDetailModal(${item.id})">
            Buka Ulasan Lengkap
          </button>
        </div>
      </div>
    `;

    const marker = L.marker([item.lat, item.lng], { icon: customIcon })
      .bindPopup(popupHtml, { maxWidth: 260, className: "custom-popup" })
      .addTo(map);

    marker.itemId = item.id;
    mapMarkers.push(marker);
    markerBounds.push([item.lat, item.lng]);
  });

  if (markerBounds.length > 0 && currentFilterCity === "semua") {
    map.fitBounds(markerBounds, { padding: [30, 30], maxZoom: 12 });
  } else if (currentFilterCity !== "semua" && CITY_COORDINATES[currentFilterCity]) {
    const coords = CITY_COORDINATES[currentFilterCity];
    map.flyTo([coords.lat, coords.lng], coords.zoom, { duration: 0.8 });
  }

  const mapCounter = document.getElementById("map-spots-count");
  if (mapCounter) {
    mapCounter.textContent = `${items.length} Titik Ditemukan`;
  }
}

window.focusItemOnMap = function(id) {
  const item = jajananItems.find(j => j.id === id);
  if (!item) return;

  const mapSection = document.getElementById("peta-section");
  if (mapSection) mapSection.scrollIntoView({ behavior: "smooth", block: "start" });

  const mapColumn = document.getElementById("map-column");
  const feedColumn = document.getElementById("katalog-section");
  if (window.innerWidth < 992 && mapColumn && mapColumn.style.display === "none") {
    mapColumn.style.display = "block";
    feedColumn.style.display = "none";
    document.querySelectorAll(".view-btn").forEach(b => b.classList.remove("active"));
    document.getElementById("tab-map-view")?.classList.add("active");
    if (map) map.invalidateSize();
  }

  if (map) {
    map.flyTo([item.lat, item.lng], 16, { duration: 1 });
    setTimeout(() => {
      const targetMarker = mapMarkers.find(m => m.itemId === id);
      if (targetMarker) targetMarker.openPopup();
    }, 1000);
  }
};

// ==========================================
// 5. FILTERING, SORTING & RENDERING
// ==========================================
function getFilteredAndSortedItems() {
  return jajananItems.filter(item => {
    if (currentFilterCategory !== "semua" && item.category !== currentFilterCategory) return false;
    if (currentFilterCity !== "semua" && item.city !== currentFilterCity) return false;
    if (currentFilterSpicy !== "semua") {
      if (currentFilterSpicy === "0" && item.spicyLevel !== 0) return false;
      if (currentFilterSpicy === "1-2" && (item.spicyLevel < 1 || item.spicyLevel > 2)) return false;
      if (currentFilterSpicy === "3-5" && item.spicyLevel < 3) return false;
    }
    if (showBookmarksOnly && !bookmarkedIds.includes(item.id)) return false;

    if (currentSearchQuery.trim() !== "") {
      const q = currentSearchQuery.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchAddress = item.address.toLowerCase().includes(q);
      const matchCity = item.city.toLowerCase().includes(q);
      const matchTags = item.tags.some(t => t.toLowerCase().includes(q));
      const matchCat = item.category.toLowerCase().includes(q);
      if (!matchName && !matchAddress && !matchCity && !matchTags && !matchCat) return false;
    }
    return true;
  }).sort((a, b) => {
    if (currentSort === "rating-desc") return b.rating - a.rating;
    if (currentSort === "price-asc") return a.price - b.price;
    if (currentSort === "reviews-desc") return b.reviewsCount - a.reviewsCount;
    return 0;
  });
}

function renderAllCardsAndUI() {
  const filtered = getFilteredAndSortedItems();
  renderCards(filtered);
  updateActiveTags(filtered.length);
}

function renderAll() {
  renderAllCardsAndUI();
  const filtered = getFilteredAndSortedItems();
  renderMapMarkers(filtered);
}

function renderSpicyIndicator(level) {
  let chili = "";
  for (let i = 0; i < level; i++) chili += "🌶️";
  return chili || "🟢 Tidak Pedas";
}

function renderCards(items) {
  const grid = document.getElementById("jajanan-grid");
  const emptyState = document.getElementById("empty-state");
  const resultsCountText = document.getElementById("results-count-text");

  if (!grid) return;

  if (items.length === 0) {
    grid.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    if (resultsCountText) resultsCountText.textContent = "Tidak ada jajanan yang sesuai dengan filter";
    return;
  }

  if (emptyState) emptyState.style.display = "none";
  if (resultsCountText) {
    resultsCountText.textContent = `Menampilkan ${items.length} spot ulasan jajanan terbaik`;
  }

  grid.innerHTML = items.map(item => {
    const isBookmarked = bookmarkedIds.includes(item.id);
    const tagsHtml = item.tags.slice(0, 3).map(tag => `<span class="card-tag">#${tag}</span>`).join("");
    const safeImage = item.image || getCategoryFallbackImage(item.category, item.id);

    return `
      <article class="jajan-card" data-id="${item.id}">
        <div class="card-img-wrap">
          <img src="${safeImage}" alt="${item.name}" class="card-img" loading="lazy" onerror="this.src=getCategoryFallbackImage('${item.category}', ${item.id})">
          <span class="badge-category cat-${item.category}">${getCategoryIcon(item.category)} ${item.category}</span>
          <button class="bookmark-btn ${isBookmarked ? 'active' : ''}" onclick="toggleBookmark(${item.id}, event)" title="${isBookmarked ? 'Hapus Simpan' : 'Simpan Jajanan'}" aria-label="Simpan">
            <i class="${isBookmarked ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          </button>
          <span class="badge-city"><i class="fa-solid fa-location-dot"></i> ${item.city}</span>
        </div>

        <div class="card-body">
          <div class="card-header-flex">
            <h3 class="card-title">${item.name}</h3>
            <span class="card-rating-badge"><i class="fa-solid fa-star"></i> ${item.rating}</span>
          </div>

          <div class="card-tags">${tagsHtml}</div>

          <p class="card-desc">${item.reviewStory}</p>

          <div class="card-meta-row">
            <div class="meta-price"><i class="fa-solid fa-tag"></i> ${item.priceRange}</div>
            <div class="meta-spicy" title="Level Pedas ${item.spicyLevel}">${renderSpicyIndicator(item.spicyLevel)}</div>
          </div>

          <div class="card-actions">
            <button class="btn btn-map-focus" onclick="focusItemOnMap(${item.id})">
              <i class="fa-solid fa-location-crosshairs"></i> Lihat di Peta
            </button>
            <button class="btn btn-primary" onclick="openDetailModal(${item.id})">
              <i class="fa-solid fa-circle-info"></i> Detail Review
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function updateActiveTags(count) {
  const container = document.getElementById("active-tag-pills");
  if (!container) return;
  const tags = [];
  if (currentFilterCategory !== "semua") {
    tags.push(`<span class="filter-pill-active">${getCategoryIcon(currentFilterCategory)} ${currentFilterCategory.toUpperCase()} <button onclick="setCategoryFilter('semua')">&times;</button></span>`);
  }
  if (currentFilterCity !== "semua") tags.push(`<span class="filter-pill-active">📍 ${currentFilterCity}</span>`);
  if (currentFilterSpicy !== "semua") tags.push(`<span class="filter-pill-active">🌶️ Level ${currentFilterSpicy}</span>`);
  if (showBookmarksOnly) tags.push(`<span class="filter-pill-active">❤️ Incaran Disimpan</span>`);
  if (currentSearchQuery.trim() !== "") tags.push(`<span class="filter-pill-active">🔍 "${currentSearchQuery}"</span>`);
  container.innerHTML = tags.join("");
}

// ==========================================
// 6. BOOKMARKING / WISHLIST
// ==========================================
window.toggleBookmark = function(id, event) {
  if (event) event.stopPropagation();
  const index = bookmarkedIds.indexOf(id);
  const item = jajananItems.find(j => j.id === id);
  const name = item ? item.name : "Jajanan";

  if (index === -1) {
    bookmarkedIds.push(id);
    showToast(`❤️ "${name}" berhasil disimpan ke daftar incaran!`);
  } else {
    bookmarkedIds.splice(index, 1);
    showToast(`💔 "${name}" dihapus dari daftar incaran.`);
  }

  saveBookmarks();
  renderAll();
};

function updateBookmarkBadge() {
  const countBadge = document.getElementById("bookmark-count");
  if (countBadge) {
    countBadge.textContent = bookmarkedIds.length;
    countBadge.style.display = bookmarkedIds.length > 0 ? "flex" : "none";
  }
}

// ==========================================
// 7. DETAIL MODAL & COMMUNITY COMMENTS
// ==========================================
window.openDetailModal = function(id) {
  const item = jajananItems.find(j => j.id === id);
  if (!item) return;

  const modal = document.getElementById("detail-modal");
  const modalContent = document.getElementById("detail-modal-content");
  if (!modal || !modalContent) return;

  const safeImage = item.image || getCategoryFallbackImage(item.category, item.id);

  const commentsHtml = item.comments && item.comments.length > 0
    ? item.comments.map(c => `
        <div class="comment-bubble">
          <div class="comment-author">
            <span><i class="fa-solid fa-user-circle"></i> ${c.author}</span>
            <span class="comment-time">${c.time}</span>
          </div>
          <p class="comment-text">${c.text}</p>
        </div>
      `).join("")
    : `<p style="font-size: 0.85rem; color: #94A3B8;">Belum ada komentar untuk tempat ini. Jadilah yang pertama memberikan review!</p>`;

  modalContent.innerHTML = `
    <div class="detail-modal-hero">
      <img src="${safeImage}" alt="${item.name}" class="detail-hero-img" onerror="this.src=getCategoryFallbackImage('${item.category}', ${item.id})">
      <div class="detail-hero-overlay">
        <h2 class="detail-hero-title">${item.name}</h2>
        <div class="detail-hero-badges">
          <span class="badge-category cat-${item.category}">${getCategoryIcon(item.category)} ${item.category}</span>
          <span class="badge-city"><i class="fa-solid fa-location-dot"></i> ${item.city}</span>
        </div>
      </div>
    </div>

    <div class="detail-body-pad">
      <div class="detail-rating-grid">
        <div class="rating-score-box">
          <div class="score-num">${item.scores ? item.scores.rasa : item.rating} ★</div>
          <div class="score-title">Cita Rasa</div>
        </div>
        <div class="rating-score-box">
          <div class="score-num">${item.scores ? item.scores.bumbu : item.rating} ★</div>
          <div class="score-title">Kekayaan Bumbu</div>
        </div>
        <div class="rating-score-box">
          <div class="score-num">${item.scores ? item.scores.porsi : 4.8} ★</div>
          <div class="score-title">Kepuasan Porsi</div>
        </div>
        <div class="rating-score-box">
          <div class="score-num">${item.scores ? item.scores.value : 4.9} ★</div>
          <div class="score-title">Value For Money</div>
        </div>
      </div>

      <div class="detail-location-box">
        <i class="fa-solid fa-map-location-dot" style="font-size: 1.5rem; color: #D97706;"></i>
        <div>
          <strong>Lokasi & Jam Buka:</strong>
          <p>${item.address}</p>
          <p style="margin-top: 0.25rem; color: #64748B;"><i class="fa-regular fa-clock"></i> Buka: ${item.hours || '10.00 - 21.00 WIB'}</p>
        </div>
      </div>

      <h3 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: #0F172A;">
        Ulasan Lengkap Food Reviewer
      </h3>
      <p class="detail-story">${item.reviewStory}</p>

      <div style="display: flex; gap: 0.75rem; margin-bottom: 2rem;">
        <button class="btn btn-primary" onclick="closeDetailModal(); focusItemOnMap(${item.id});">
          <i class="fa-solid fa-crosshairs"></i> Lihat Posisi di Peta
        </button>
        <button class="btn btn-outline" onclick="toggleBookmark(${item.id}, event)">
          <i class="${bookmarkedIds.includes(item.id) ? 'fa-solid' : 'fa-regular'} fa-heart" style="color: #DC2626;"></i> 
          ${bookmarkedIds.includes(item.id) ? 'Tersimpan di Incaran' : 'Simpan ke Incaran'}
        </button>
      </div>

      <div class="detail-comments-section">
        <h4>Komentar & Pengalaman Pengunjung (${item.comments ? item.comments.length : 0})</h4>
        <div class="comment-list" id="modal-comment-list">${commentsHtml}</div>
        <form class="comment-form" onsubmit="handleCommentSubmit(${item.id}, event)">
          <input type="text" id="comment-input-text" class="comment-input" placeholder="Tulis review atau pengalaman kamu di sini..." required>
          <button type="submit" class="btn btn-primary" style="padding: 0.5rem 1rem;">
            <i class="fa-solid fa-paper-plane"></i> Kirim
          </button>
        </form>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

window.closeDetailModal = function() {
  const modal = document.getElementById("detail-modal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
};

window.handleCommentSubmit = function(id, event) {
  event.preventDefault();
  const input = document.getElementById("comment-input-text");
  if (!input || !input.value.trim()) return;

  const item = jajananItems.find(j => j.id === id);
  if (!item) return;

  if (!item.comments) item.comments = [];
  const newComment = {
    author: "Kamu (Pengunjung Web)",
    time: "Baru saja",
    text: input.value.trim()
  };

  item.comments.unshift(newComment);
  item.reviewsCount = (item.reviewsCount || 0) + 1;
  saveData();

  showToast("✅ Ulasan kamu berhasil ditambahkan!");
  openDetailModal(id);
};

// ==========================================
// 8. ADD NEW JAJANAN SUBMISSION (MODAL)
// ==========================================
function setupAddJajananForm() {
  const addModal = document.getElementById("add-modal");
  const openBtn = document.getElementById("open-add-modal-btn");
  const closeBtn = document.getElementById("close-add-modal");
  const cancelBtn = document.getElementById("cancel-add-modal");
  const form = document.getElementById("add-jajanan-form");

  if (openBtn) {
    openBtn.onclick = () => {
      addModal.classList.add("active");
      document.body.style.overflow = "hidden";
    };
  }

  const closeFormModal = () => {
    if (addModal) addModal.classList.remove("active");
    document.body.style.overflow = "";
  };

  if (closeBtn) closeBtn.onclick = closeFormModal;
  if (cancelBtn) cancelBtn.onclick = closeFormModal;

  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();

      const name = document.getElementById("input-name").value.trim();
      const category = document.getElementById("input-category").value;
      const city = document.getElementById("input-city").value.trim() || "Bandung";
      const price = parseInt(document.getElementById("input-price").value) || 15000;
      const rating = parseFloat(document.getElementById("input-rating").value) || 4.8;
      const spicyLevel = parseInt(document.getElementById("input-spicy").value) || 3;
      const tagText = document.getElementById("input-tag").value.trim();
      const address = document.getElementById("input-address").value.trim();
      let photoUrl = document.getElementById("input-photo").value.trim();
      const reviewText = document.getElementById("input-review").value.trim();

      if (!photoUrl) {
        photoUrl = getCategoryFallbackImage(category, Date.now());
      }

      const baseCoords = CITY_COORDINATES[city] || CITY_COORDINATES["Bandung"];
      const randLat = baseCoords.lat + (Math.random() - 0.5) * 0.04;
      const randLng = baseCoords.lng + (Math.random() - 0.5) * 0.04;
      const tags = tagText ? tagText.split(",").map(t => t.trim()) : ["Rekomendasi Baru", "Kuliner Juara"];

      const newItem = {
        id: Date.now(),
        name,
        category,
        city,
        lat: parseFloat(randLat.toFixed(5)),
        lng: parseFloat(randLng.toFixed(5)),
        price,
        priceRange: `Rp ${price.toLocaleString("id-ID")} / porsi`,
        rating,
        reviewsCount: 1,
        spicyLevel,
        address,
        image: photoUrl,
        tags,
        hours: "10.00 - 21.00 WIB",
        scores: { rasa: rating, bumbu: rating, porsi: 4.8, kebersihan: 4.6, value: 4.9 },
        reviewStory: reviewText,
        comments: [
          { author: "Kontributor Komunitas", time: "Baru saja", text: "Terima kasih sudah menambahkan spot jajanan mantap ini!" }
        ]
      };

      jajananItems.unshift(newItem);
      saveData();

      form.reset();
      closeFormModal();
      showToast(`🎉 Berhasil menambahkan "${name}" ke daftar jajanan!`);

      currentFilterCity = "semua";
      const citySelect = document.getElementById("city-filter");
      if (citySelect) citySelect.value = "semua";

      renderAll();
      focusItemOnMap(newItem.id);
    };
  }
}

// ==========================================
// 9. EVENT LISTENERS SETUP
// ==========================================
function setupEventListeners() {
  const catPills = document.querySelectorAll(".cat-pill");
  catPills.forEach(pill => {
    pill.onclick = () => {
      catPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentFilterCategory = pill.getAttribute("data-category");
      renderAll();
    };
  });

  const cityFilter = document.getElementById("city-filter");
  if (cityFilter) {
    cityFilter.onchange = (e) => {
      currentFilterCity = e.target.value;
      renderAll();
    };
  }

  const spicyFilter = document.getElementById("spicy-filter");
  if (spicyFilter) {
    spicyFilter.onchange = (e) => {
      currentFilterSpicy = e.target.value;
      renderAll();
    };
  }

  const sortFilter = document.getElementById("sort-filter");
  if (sortFilter) {
    sortFilter.onchange = (e) => {
      currentSort = e.target.value;
      renderAll();
    };
  }

  const searchInput = document.getElementById("quick-search");
  if (searchInput) {
    searchInput.oninput = (e) => {
      currentSearchQuery = e.target.value;
      renderAll();
    };
  }

  const resetBtn = document.getElementById("reset-filter-btn");
  const emptyResetBtn = document.getElementById("empty-reset-btn");
  const resetAll = () => {
    currentFilterCategory = "semua";
    currentFilterCity = "semua";
    currentFilterSpicy = "semua";
    currentSort = "rating-desc";
    currentSearchQuery = "";
    showBookmarksOnly = false;

    document.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
    document.querySelector('.cat-pill[data-category="semua"]')?.classList.add("active");
    if (cityFilter) cityFilter.value = "semua";
    if (spicyFilter) spicyFilter.value = "semua";
    if (sortFilter) sortFilter.value = "rating-desc";
    if (searchInput) searchInput.value = "";
    document.getElementById("bookmark-filter-btn")?.classList.remove("active");

    renderAll();
    showToast("🔄 Filter telah di-reset ke awal.");
  };

  if (resetBtn) resetBtn.onclick = resetAll;
  if (emptyResetBtn) emptyResetBtn.onclick = resetAll;

  const bookmarkHeaderBtn = document.getElementById("bookmark-filter-btn");
  if (bookmarkHeaderBtn) {
    bookmarkHeaderBtn.onclick = () => {
      showBookmarksOnly = !showBookmarksOnly;
      bookmarkHeaderBtn.classList.toggle("active", showBookmarksOnly);
      renderAll();

      if (showBookmarksOnly) {
        showToast(`❤️ Menampilkan ${bookmarkedIds.length} jajanan yang kamu simpan.`);
      }
    };
  }

  const detailModal = document.getElementById("detail-modal");
  const closeDetailBtn = document.getElementById("close-detail-modal");
  if (closeDetailBtn) closeDetailBtn.onclick = closeDetailModal;
  if (detailModal) {
    detailModal.onclick = (e) => {
      if (e.target === detailModal) closeDetailModal();
    };
  }

  const tabSplit = document.getElementById("tab-split-view");
  const tabMap = document.getElementById("tab-map-view");
  const tabList = document.getElementById("tab-list-view");
  const mapColumn = document.getElementById("map-column");
  const feedColumn = document.getElementById("katalog-section");

  const setViewMode = (mode) => {
    [tabSplit, tabMap, tabList].forEach(t => t?.classList.remove("active"));
    if (mode === "split") {
      tabSplit?.classList.add("active");
      if (mapColumn) mapColumn.style.display = "block";
      if (feedColumn) feedColumn.style.display = "block";
    } else if (mode === "map") {
      tabMap?.classList.add("active");
      if (mapColumn) mapColumn.style.display = "block";
      if (feedColumn) feedColumn.style.display = "none";
    } else if (mode === "list") {
      tabList?.classList.add("active");
      if (mapColumn) mapColumn.style.display = "none";
      if (feedColumn) feedColumn.style.display = "block";
    }
    if (map) map.invalidateSize();
  };

  if (tabSplit) tabSplit.onclick = () => setViewMode("split");
  if (tabMap) tabMap.onclick = () => setViewMode("map");
  if (tabList) tabList.onclick = () => setViewMode("list");

  const mobileToggle = document.getElementById("mobile-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (mobileToggle && navLinks) {
    mobileToggle.onclick = () => {
      if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
      } else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "100%";
        navLinks.style.left = "0";
        navLinks.style.right = "0";
        navLinks.style.background = "#FFFFFF";
        navLinks.style.padding = "1rem";
        navLinks.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
      }
    };
  }

  setupAddJajananForm();
}

window.setCategoryFilter = function(category) {
  currentFilterCategory = category;
  document.querySelectorAll(".cat-pill").forEach(p => {
    p.classList.toggle("active", p.getAttribute("data-category") === category);
  });
  renderAll();
  const filterSection = document.getElementById("filter-bar");
  if (filterSection) {
    filterSection.scrollIntoView({ behavior: "smooth" });
  }
};

// ==========================================
// 10. TOAST NOTIFICATION UTILITY
// ==========================================
function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

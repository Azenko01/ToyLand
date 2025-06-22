// Enhanced Global Variables
const TOYS_DATA = [
  {
    id: 1,
    name: "Cuddly Bear Buddy",
    price: 24.99,
    category: "plush",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cuddly%20Bear%20Buddy.jpg-ZtEJ7khhewHz8qLdkD9MjKBwEkXeQZ.jpeg",
    description:
      "Super soft and cuddly teddy bear perfect for bedtime snuggles. Made with premium materials and child-safe stuffing.",
    features: ["Machine washable", "Hypoallergenic materials", "Safety tested", "Perfect for ages 0+"],
    rating: 4.8,
    reviewCount: 127,
    inStock: true,
    isNew: true,
    isBestseller: false,
    ageRange: "0-12 years",
    material: "Premium Plush Fabric",
  },
  {
    id: 2,
    name: "Learning Puzzle Set",
    price: 19.99,
    category: "educational",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Learning%20Puzzle%20Set.jpg-w1KKBnS2TWETN8CidhpW7Eg3xlQUyY.jpeg",
    description: "Interactive puzzle set that helps develop problem-solving skills and hand-eye coordination.",
    features: ["50 colorful pieces", "Educational themes", "Durable construction", "Ages 3-8"],
    rating: 4.9,
    reviewCount: 89,
    inStock: true,
    isNew: false,
    isBestseller: true,
    ageRange: "3-8 years",
    material: "Eco-friendly Cardboard",
  },
  {
    id: 3,
    name: "Racing Car Collection",
    price: 34.99,
    category: "vehicles",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Racing%20Car%20Collection.jpg-Ylx7Cm7m2l1qoHbxnBoGgr0RLvVjyT.jpeg",
    description: "Set of 6 high-quality racing cars with realistic details and smooth rolling wheels.",
    features: ["Die-cast metal construction", "Realistic details", "Smooth rolling wheels", "Ages 3+"],
    rating: 4.7,
    reviewCount: 156,
    inStock: true,
    isNew: false,
    isBestseller: true,
    ageRange: "3+ years",
    material: "Die-cast Metal",
  },
  {
    id: 4,
    name: "Princess Doll House",
    price: 89.99,
    category: "dolls",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Princess%20Doll%20House.jpg-tv2Q4ysM6yBrXXAgTXXwcgZ9QImxNS.jpeg",
    description: "Beautiful princess doll with elegant dress and accessories for imaginative play.",
    features: ["Changeable outfits", "Brushable hair", "Multiple accessories", "Ages 3+"],
    rating: 4.6,
    reviewCount: 203,
    inStock: true,
    isNew: true,
    isBestseller: false,
    ageRange: "3-10 years",
    material: "High-quality Vinyl",
  },
  {
    id: 5,
    name: "Family Board Game",
    price: 29.99,
    category: "games",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Family%20Board%20Game.jpg-nxgAScqSJZJaD7cv9bXwM12LTMpna5.jpeg",
    description: "Fun family board game that brings everyone together for hours of entertainment.",
    features: ["2-6 players", "Easy to learn", "Quality game pieces", "Ages 6+"],
    rating: 4.8,
    reviewCount: 94,
    inStock: true,
    isNew: false,
    isBestseller: true,
    ageRange: "6+ years",
    material: "Premium Cardboard & Plastic",
  },
  {
    id: 6,
    name: "Soccer Ball Pro",
    price: 16.99,
    category: "outdoor",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Soccer%20Ball%20Pro.jpg-MgDUZDd8uuWYw3GDaf0Hc5wKHO5Hih.jpeg",
    description: "Professional-grade soccer ball perfect for outdoor play and skill development.",
    features: ["Official size", "Durable construction", "All-weather design", "Ages 5+"],
    rating: 4.5,
    reviewCount: 78,
    inStock: true,
    isNew: false,
    isBestseller: false,
    ageRange: "5+ years",
    material: "Synthetic Leather",
  },
  {
    id: 7,
    name: "Magic Building Blocks",
    price: 39.99,
    category: "educational",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Magic%20Building%20Blocks.jpg-rVJ61W7waFax6l9pTyaKmjIvKWWGcS.jpeg",
    description: "Magnetic building blocks that spark creativity and develop spatial reasoning skills.",
    features: ["100 pieces included", "Strong magnets", "Safe materials", "Ages 3+"],
    rating: 4.9,
    reviewCount: 167,
    inStock: true,
    isNew: true,
    isBestseller: true,
    ageRange: "3-12 years",
    material: "ABS Plastic with Magnets",
  },
  {
    id: 8,
    name: "Unicorn Plushie",
    price: 27.99,
    category: "plush",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Unicorn%20Plushie.jpg-iOpMNzEylPrfaMOQbupNubF92YycBI.jpeg",
    description: "Magical unicorn plushie with sparkly horn and rainbow mane for enchanted playtime.",
    features: ["Sparkly details", "Super soft fabric", "Rainbow mane", "Ages 0+"],
    rating: 4.8,
    reviewCount: 142,
    inStock: true,
    isNew: false,
    isBestseller: true,
    ageRange: "0+ years",
    material: "Premium Plush with Sequins",
  },
  {
    id: 9,
    name: "Robot Building Kit",
    price: 59.99,
    category: "educational",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Robot%20Building%20Kit.jpg-oYDeHQjNnWNYi3UisvVpVaDVcvsPJV.jpeg",
    description: "Advanced robot building kit that teaches programming and engineering concepts.",
    features: ["200+ pieces", "Programmable", "STEM learning", "Ages 8+"],
    rating: 4.7,
    reviewCount: 85,
    inStock: true,
    isNew: true,
    isBestseller: false,
    ageRange: "8+ years",
    material: "Electronic Components & Plastic",
  },
  {
    id: 10,
    name: "Art Supply Set",
    price: 22.99,
    category: "educational",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Art%20Supply%20Set.jpg-H2zWAroWVEevjy7RSjMXGaH1kGJdmg.jpeg",
    description: "Complete art supply set with crayons, markers, colored pencils, and paper.",
    features: ["64 pieces total", "Non-toxic materials", "Portable case", "Ages 4+"],
    rating: 4.6,
    reviewCount: 112,
    inStock: true,
    isNew: false,
    isBestseller: false,
    ageRange: "4-12 years",
    material: "Non-toxic Art Materials",
  },
]

// Enhanced Global State
let cart = JSON.parse(localStorage.getItem("toylandCart")) || []
let wishlist = JSON.parse(localStorage.getItem("toylandWishlist")) || []
let currentProduct = null
let rotationInterval = null
let currentRotation = 0
let filteredToys = [...TOYS_DATA]
let currentFilter = "all"
let currentSort = "featured"
let displayedProducts = 6
let isDragging = false
let startX = 0
let startRotation = 0

// DOM Elements
const cartCount = document.getElementById("cartCount")
const wishlistCount = document.getElementById("wishlistCount")
const cartSidebar = document.getElementById("cartSidebar")
const wishlistSidebar = document.getElementById("wishlistSidebar")
const cartItems = document.getElementById("cartItems")
const wishlistItems = document.getElementById("wishlistItems")
const cartTotal = document.getElementById("cartTotal")
const cartSubtotal = document.getElementById("cartSubtotal")
const cartShipping = document.getElementById("cartShipping")
const productsGrid = document.getElementById("productsGrid")
const productModal = document.getElementById("productModal")
const searchContainer = document.getElementById("searchContainer")
const searchInput = document.getElementById("searchInput")
const preloader = document.getElementById("preloader")
const backToTop = document.getElementById("backToTop")
const floatingAssistant = document.getElementById("floatingAssistant")
const assistantChat = document.getElementById("assistantChat")
const chatMessages = document.getElementById("chatMessages")
const chatInput = document.getElementById("chatInput")
const mascotSpeech = document.getElementById("mascotSpeech")
const burgerMenu = document.getElementById("burgerMenu")
const navMenu = document.getElementById("navMenu")

// Mascot Messages
const mascotMessages = [
  "Welcome to ToyLand! 🧸",
  "Find your perfect toy! ✨",
  "Quality toys for happy kids! 😊",
  "Let's play together! 🎮",
  "Discover magical moments! 🌟",
  "Safe toys, endless fun! 🛡️",
  "Learning through play! 📚",
  "Made with love! ❤️",
]

// Assistant Responses
const assistantResponses = {
  hello: "Hi there! I'm here to help you find the perfect toy! What age group are you shopping for?",
  age: "Great question! We have toys for all ages - from newborns to teens. What specific age are you looking for?",
  educational:
    "Our educational toys are fantastic! I recommend the Magic Building Blocks or Learning Puzzle Set. They're both bestsellers!",
  plush: "Our plush toys are super cuddly! The Cuddly Bear Buddy and Unicorn Plushie are customer favorites!",
  price: "We have toys for every budget! Our prices range from $16.99 to $89.99. What's your budget range?",
  safety:
    "All our toys are safety tested and made with child-safe materials. Look for our safety certification badges!",
  shipping: "We offer free shipping on all orders! Most items arrive within 3-5 business days.",
  return: "We have a 30-day return policy. If you're not completely satisfied, we'll make it right!",
  default: "I'm here to help! You can ask me about toy recommendations, ages, safety, shipping, or anything else!",
}

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  showPreloader()
  setTimeout(() => {
    hidePreloader()
    loadProducts()
    updateCartUI()
    updateWishlistUI()
    setupEventListeners()
    animateMascot()
    setupScrollEffects()
  }, 2000)
})

// Preloader Functions
function showPreloader() {
  preloader.classList.remove("hidden")
}

function hidePreloader() {
  preloader.classList.add("hidden")
}

// Enhanced Event Listeners
function setupEventListeners() {
  // Search functionality
  searchInput.addEventListener("input", debounce(searchToys, 300))

  // Close modal when clicking outside
  productModal.addEventListener("click", (e) => {
    if (e.target === productModal) {
      closeModal()
    }
  })

  // Smooth scrolling for navigation
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      scrollToSection(targetId)

      // Close mobile menu
      navMenu.classList.remove("active")
      burgerMenu.classList.remove("active")
    })
  })

  // Sort functionality
  document.getElementById("sortSelect").addEventListener("change", function () {
    currentSort = this.value
    sortProducts()
  })

  // Chat input
  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage()
    }
  })

  // Drag to rotate functionality
  setupDragRotation()

  // Keyboard shortcuts
  document.addEventListener("keydown", handleKeyboardShortcuts)

  // Newsletter form
  setupNewsletterForm()
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  navMenu.classList.toggle("active")
  burgerMenu.classList.toggle("active")
}

// Enhanced Product Loading and Display
function loadProducts(products = filteredToys.slice(0, displayedProducts)) {
  productsGrid.innerHTML = ""

  if (products.length === 0) {
    productsGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <div class="empty-state-icon">🔍</div>
                <h3>No toys found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        `
    return
  }

  products.forEach((toy) => {
    const productCard = createProductCard(toy)
    productsGrid.appendChild(productCard)
  })

  // Update load more button
  const loadMoreBtn = document.getElementById("loadMoreBtn")
  if (displayedProducts >= filteredToys.length) {
    loadMoreBtn.style.display = "none"
  } else {
    loadMoreBtn.style.display = "block"
  }

  // Add loading animation
  productsGrid.style.opacity = "0"
  setTimeout(() => {
    productsGrid.style.opacity = "1"
    productsGrid.style.transition = "opacity 0.5s ease"
  }, 100)
}

function createProductCard(toy) {
  const card = document.createElement("div")
  card.className = "product-card"
  card.innerHTML = `
        <div class="product-image-container">
            <img src="${toy.image}" alt="${toy.name}" class="product-image" loading="lazy">
            <div class="product-overlay">
                <button class="view-360" onclick="openProductModal(${toy.id})">
                    🔄 View 360°
                </button>
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-name">${toy.name}</h3>
            <div class="product-rating">
                <span class="stars">${generateStars(toy.rating)}</span>
                <span class="rating-text">(${toy.rating}/5)</span>
                <span class="review-count">${toy.reviewCount} reviews</span>
            </div>
            <p class="product-price">$${toy.price}</p>
            <button class="quick-add" onclick="quickAddToCart(${toy.id})">
                Quick Add to Cart
            </button>
        </div>
    `

  return card
}

function generateStars(rating) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  let stars = ""

  for (let i = 0; i < fullStars; i++) {
    stars += "⭐"
  }

  if (hasHalfStar) {
    stars += "⭐"
  }

  // Add empty stars
  const totalStars = hasHalfStar ? fullStars + 1 : fullStars
  for (let i = totalStars; i < 5; i++) {
    stars += "☆"
  }

  return stars
}

// Load More Products
function loadMoreProducts() {
  displayedProducts += 6
  loadProducts()
}

// Enhanced Product Modal Functions
function openProductModal(toyId) {
  const toy = TOYS_DATA.find((t) => t.id === toyId)
  if (!toy) return

  currentProduct = toy

  // Update modal content
  document.getElementById("modalProductImage").src = toy.image
  document.getElementById("modalProductName").textContent = toy.name
  document.getElementById("modalProductPrice").textContent = `$${toy.price}`
  document.getElementById("modalProductDescription").textContent = toy.description
  document.getElementById("modalProductStars").textContent = generateStars(toy.rating)
  document.getElementById("modalProductRating").textContent = `(${toy.rating}/5)`
  document.getElementById("modalReviewCount").textContent = `${toy.reviewCount} reviews`
  document.getElementById("modalAgeRange").textContent = toy.ageRange
  document.getElementById("modalMaterial").textContent = toy.material

  // Update badges
  const badges = document.querySelector(".product-badges")
  badges.innerHTML = ""
  if (toy.isNew) {
    badges.innerHTML += '<span class="badge new">New</span>'
  }
  if (toy.isBestseller) {
    badges.innerHTML += '<span class="badge bestseller">Bestseller</span>'
  }

  // Update features list
  const featuresList = document.getElementById("modalProductFeatures")
  featuresList.innerHTML = ""
  toy.features.forEach((feature) => {
    const li = document.createElement("li")
    li.textContent = feature
    featuresList.appendChild(li)
  })

  // Update wishlist button state
  const wishlistBtn = document.getElementById("wishlistToggle")
  const isInWishlist = wishlist.some((item) => item.id === toy.id)
  wishlistBtn.classList.toggle("active", isInWishlist)
  wishlistBtn.textContent = isInWishlist ? "💖" : "❤️"

  // Reset quantity
  document.getElementById("quantity").textContent = "1"

  // Show modal
  productModal.classList.add("active")
  document.body.style.overflow = "hidden"
}

function closeModal() {
  productModal.classList.remove("active")
  document.body.style.overflow = "auto"
  stopRotation()
  currentProduct = null
}

// Enhanced 3D Rotation Functions
function setupDragRotation() {
  const image = document.getElementById("modalProductImage")

  image.addEventListener("mousedown", startDrag)
  image.addEventListener("touchstart", startDrag)

  document.addEventListener("mousemove", drag)
  document.addEventListener("touchmove", drag)

  document.addEventListener("mouseup", endDrag)
  document.addEventListener("touchend", endDrag)
}

function startDrag(e) {
  isDragging = true
  startX = e.type === "mousedown" ? e.clientX : e.touches[0].clientX
  startRotation = currentRotation

  const image = document.getElementById("modalProductImage")
  image.style.cursor = "grabbing"
}

function drag(e) {
  if (!isDragging) return

  e.preventDefault()
  const currentX = e.type === "mousemove" ? e.clientX : e.touches[0].clientX
  const deltaX = currentX - startX
  const rotationSpeed = 0.5

  currentRotation = startRotation + deltaX * rotationSpeed

  const image = document.getElementById("modalProductImage")
  image.style.transform = `rotateY(${currentRotation}deg)`

  // Update rotation indicator
  const rotationDot = document.querySelector(".rotation-dot")
  if (rotationDot) {
    rotationDot.style.transform = `translateX(-50%) rotate(${currentRotation}deg)`
  }
}

function endDrag() {
  isDragging = false
  const image = document.getElementById("modalProductImage")
  image.style.cursor = "grab"
}

function startAutoRotation() {
  if (rotationInterval) return

  const image = document.getElementById("modalProductImage")
  const rotationDot = document.querySelector(".rotation-dot")

  rotationInterval = setInterval(() => {
    currentRotation += 2
    image.style.transform = `rotateY(${currentRotation}deg)`

    if (rotationDot) {
      rotationDot.style.transform = `translateX(-50%) rotate(${currentRotation}deg)`
    }

    if (currentRotation >= 360) {
      currentRotation = 0
    }
  }, 50)

  image.classList.add("rotating")
}

function stopRotation() {
  if (rotationInterval) {
    clearInterval(rotationInterval)
    rotationInterval = null
  }

  const image = document.getElementById("modalProductImage")
  image.classList.remove("rotating")
}

function resetRotation() {
  stopRotation()
  currentRotation = 0

  const image = document.getElementById("modalProductImage")
  const rotationDot = document.querySelector(".rotation-dot")

  image.style.transform = "rotateY(0deg)"
  if (rotationDot) {
    rotationDot.style.transform = "translateX(-50%) rotate(0deg)"
  }
}

// Quantity Controls
function increaseQuantity() {
  const quantityElement = document.getElementById("quantity")
  let quantity = Number.parseInt(quantityElement.textContent)
  quantity = Math.min(quantity + 1, 10)
  quantityElement.textContent = quantity
}

function decreaseQuantity() {
  const quantityElement = document.getElementById("quantity")
  let quantity = Number.parseInt(quantityElement.textContent)
  quantity = Math.max(quantity - 1, 1)
  quantityElement.textContent = quantity
}

// Enhanced Cart Functions
function addToCart() {
  if (!currentProduct) return

  const addBtn = document.querySelector(".add-to-cart-btn")
  addBtn.classList.add("loading")
  addBtn.disabled = true

  setTimeout(() => {
    const quantity = Number.parseInt(document.getElementById("quantity").textContent)
    const existingItem = cart.find((item) => item.id === currentProduct.id)

    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      cart.push({
        ...currentProduct,
        quantity: quantity,
      })
    }

    localStorage.setItem("toylandCart", JSON.stringify(cart))
    updateCartUI()
    showAddToCartAnimation()

    addBtn.classList.remove("loading")
    addBtn.disabled = false

    closeModal()
  }, 1000)
}

function quickAddToCart(toyId) {
  const toy = TOYS_DATA.find((t) => t.id === toyId)
  if (!toy) return

  const existingItem = cart.find((item) => item.id === toyId)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({
      ...toy,
      quantity: 1,
    })
  }

  localStorage.setItem("toylandCart", JSON.stringify(cart))
  updateCartUI()
  showAddToCartAnimation()
}

function removeFromCart(toyId) {
  cart = cart.filter((item) => item.id !== toyId)
  localStorage.setItem("toylandCart", JSON.stringify(cart))
  updateCartUI()
}

function updateCartQuantity(toyId, change) {
  const item = cart.find((item) => item.id === toyId)
  if (!item) return

  item.quantity += change

  if (item.quantity <= 0) {
    removeFromCart(toyId)
  } else {
    localStorage.setItem("toylandCart", JSON.stringify(cart))
    updateCartUI()
  }
}

function updateCartUI() {
  // Update cart count
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  cartCount.textContent = totalItems

  // Update cart items
  cartItems.innerHTML = ""

  if (cart.length === 0) {
    cartItems.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🛒</div>
                <h3>Your cart is empty</h3>
                <p>Add some magical toys!</p>
            </div>
        `
  } else {
    cart.forEach((item) => {
      const cartItem = createCartItem(item)
      cartItems.appendChild(cartItem)
    })
  }

  // Update totals
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 50 ? 0 : 5.99
  const total = subtotal + shipping

  cartSubtotal.textContent = subtotal.toFixed(2)
  cartShipping.textContent = shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`
  cartTotal.textContent = total.toFixed(2)
}

function createCartItem(item) {
  const cartItem = document.createElement("div")
  cartItem.className = "cart-item"
  cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">$${item.price}</div>
            <div class="cart-item-controls">
                <button onclick="updateCartQuantity(${item.id}, -1)" aria-label="Decrease quantity">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateCartQuantity(${item.id}, 1)" aria-label="Increase quantity">+</button>
                <button class="remove-item" onclick="removeFromCart(${item.id})" aria-label="Remove item">Remove</button>
            </div>
        </div>
    `

  return cartItem
}

function toggleCart() {
  cartSidebar.classList.toggle("active")

  // Close wishlist if open
  if (wishlistSidebar.classList.contains("active")) {
    wishlistSidebar.classList.remove("active")
  }
}

function applyPromoCode() {
  const promoInput = document.getElementById("promoInput")
  const code = promoInput.value.trim().toLowerCase()

  const promoCodes = {
    welcome10: 0.1,
    kids20: 0.2,
    family15: 0.15,
  }

  if (promoCodes[code]) {
    const discount = promoCodes[code]
    alert(`Promo code applied! ${discount * 100}% discount`)
    promoInput.value = ""
    // Apply discount logic here
  } else {
    alert("Invalid promo code")
  }
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!")
    return
  }

  const total = Number.parseFloat(cartTotal.textContent)
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  // Simulate checkout process
  const checkoutBtn = document.querySelector(".checkout-btn")
  checkoutBtn.innerHTML = '<div class="loading"></div> Processing...'
  checkoutBtn.disabled = true

  setTimeout(() => {
    alert(
      `🎉 Order confirmed!\n\nItems: ${itemCount}\nTotal: $${total.toFixed(2)}\n\nYour magical toys will be delivered with love! 🎁\n\nOrder ID: TOY${Date.now()}`,
    )

    // Clear cart
    cart = []
    localStorage.setItem("toylandCart", JSON.stringify(cart))
    updateCartUI()
    toggleCart()

    checkoutBtn.innerHTML = '<span>Proceed to Checkout</span><span class="checkout-icon">🛒</span>'
    checkoutBtn.disabled = false
  }, 2000)
}

// Enhanced Wishlist Functions
function toggleWishlistItem() {
  if (!currentProduct) return

  const wishlistBtn = document.getElementById("wishlistToggle")
  const isInWishlist = wishlist.some((item) => item.id === currentProduct.id)

  if (isInWishlist) {
    wishlist = wishlist.filter((item) => item.id !== currentProduct.id)
    wishlistBtn.classList.remove("active")
    wishlistBtn.textContent = "❤️"
  } else {
    wishlist.push(currentProduct)
    wishlistBtn.classList.add("active")
    wishlistBtn.textContent = "💖"
  }

  localStorage.setItem("toylandWishlist", JSON.stringify(wishlist))
  updateWishlistUI()
}

function updateWishlistUI() {
  wishlistCount.textContent = wishlist.length

  wishlistItems.innerHTML = ""

  if (wishlist.length === 0) {
    wishlistItems.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">💖</div>
                <h3>Your wishlist is empty</h3>
                <p>Save your favorite toys here!</p>
            </div>
        `
  } else {
    wishlist.forEach((item) => {
      const wishlistItem = createWishlistItem(item)
      wishlistItems.appendChild(wishlistItem)
    })
  }
}

function createWishlistItem(item) {
  const wishlistItem = document.createElement("div")
  wishlistItem.className = "wishlist-item"
  wishlistItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <div class="wishlist-item-info">
            <div class="wishlist-item-name">${item.name}</div>
            <div class="wishlist-item-price">$${item.price}</div>
            <button class="quick-add" onclick="quickAddToCart(${item.id}); removeFromWishlist(${item.id})">
                Add to Cart
            </button>
        </div>
        <button class="remove-item" onclick="removeFromWishlist(${item.id})" aria-label="Remove from wishlist">×</button>
    `

  return wishlistItem
}

function removeFromWishlist(toyId) {
  wishlist = wishlist.filter((item) => item.id !== toyId)
  localStorage.setItem("toylandWishlist", JSON.stringify(wishlist))
  updateWishlistUI()
}

function toggleWishlist() {
  wishlistSidebar.classList.toggle("active")

  // Close cart if open
  if (cartSidebar.classList.contains("active")) {
    cartSidebar.classList.remove("active")
  }
}

function clearWishlist() {
  if (wishlist.length === 0) return

  if (confirm("Are you sure you want to clear your wishlist?")) {
    wishlist = []
    localStorage.setItem("toylandWishlist", JSON.stringify(wishlist))
    updateWishlistUI()
  }
}

// Enhanced Search and Filter Functions
function toggleSearch() {
  searchContainer.classList.toggle("active")
  if (searchContainer.classList.contains("active")) {
    searchInput.focus()
  }
}

function searchToys() {
  const query = searchInput.value.toLowerCase().trim()

  if (query === "") {
    filteredToys = [...TOYS_DATA]
  } else {
    filteredToys = TOYS_DATA.filter(
      (toy) =>
        toy.name.toLowerCase().includes(query) ||
        toy.description.toLowerCase().includes(query) ||
        toy.category.toLowerCase().includes(query) ||
        toy.features.some((feature) => feature.toLowerCase().includes(query)),
    )
  }

  displayedProducts = 6
  loadProducts()
  scrollToSection("featured")
}

function clearSearch() {
  searchInput.value = ""
  filteredToys = [...TOYS_DATA]
  displayedProducts = 6
  loadProducts()
}

function filterByCategory(category) {
  currentFilter = category

  // Update filter buttons
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active")
  })
  event.target.classList.add("active")

  if (category === "all") {
    filteredToys = [...TOYS_DATA]
  } else {
    filteredToys = TOYS_DATA.filter((toy) => toy.category === category)
  }

  displayedProducts = 6
  loadProducts()
  scrollToSection("featured")
}

function sortProducts() {
  switch (currentSort) {
    case "price-low":
      filteredToys.sort((a, b) => a.price - b.price)
      break
    case "price-high":
      filteredToys.sort((a, b) => b.price - a.price)
      break
    case "rating":
      filteredToys.sort((a, b) => b.rating - a.rating)
      break
    case "newest":
      filteredToys.sort((a, b) => b.isNew - a.isNew)
      break
    default:
      // Featured - bestsellers first, then by rating
      filteredToys.sort((a, b) => {
        if (a.isBestseller && !b.isBestseller) return -1
        if (!a.isBestseller && b.isBestseller) return 1
        return b.rating - a.rating
      })
  }

  displayedProducts = 6
  loadProducts()
}

// Enhanced Mascot Functions
function animateMascot() {
  let messageIndex = 0

  setInterval(() => {
    mascotSpeech.textContent = mascotMessages[messageIndex]
    messageIndex = (messageIndex + 1) % mascotMessages.length

    // Add bounce animation
    const mascot = document.querySelector(".mascot")
    mascot.style.animation = "none"
    setTimeout(() => {
      mascot.style.animation = "bounce 2s infinite"
    }, 10)
  }, 5000)
}

function interactWithMascot() {
  const mascot = document.querySelector(".mascot")
  const speech = document.querySelector(".mascot-speech")

  // Random interaction messages
  const interactions = [
    "Thanks for clicking! 🎉",
    "You're awesome! ⭐",
    "Let's find you a great toy! 🔍",
    "I love helping kids! 💕",
    "Toy shopping is fun! 🛍️",
  ]

  const randomMessage = interactions[Math.floor(Math.random() * interactions.length)]
  speech.textContent = randomMessage

  // Add special animation
  mascot.style.transform = "scale(1.2)"
  setTimeout(() => {
    mascot.style.transform = "scale(1)"
  }, 300)
}

// Floating Assistant Functions
function toggleAssistant() {
  assistantChat.classList.toggle("active")
}

function sendMessage() {
  const message = chatInput.value.trim()
  if (!message) return

  // Add user message
  addMessage(message, "user")

  // Generate bot response
  setTimeout(() => {
    const response = generateAssistantResponse(message)
    addMessage(response, "bot")
  }, 1000)

  chatInput.value = ""
}

function addMessage(text, sender) {
  const messageDiv = document.createElement("div")
  messageDiv.className = `message ${sender}`
  messageDiv.innerHTML = `<span>${text}</span>`

  chatMessages.appendChild(messageDiv)
  chatMessages.scrollTop = chatMessages.scrollHeight
}

function generateAssistantResponse(message) {
  const lowerMessage = message.toLowerCase()

  for (const [keyword, response] of Object.entries(assistantResponses)) {
    if (lowerMessage.includes(keyword)) {
      return response
    }
  }

  return assistantResponses.default
}

// Scroll Effects
function setupScrollEffects() {
  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset

    // Back to top button
    if (scrollTop > 300) {
      backToTop.classList.add("visible")
    } else {
      backToTop.classList.remove("visible")
    }

    // Parallax effect for hero section
    const hero = document.querySelector(".hero")
    if (hero) {
      const heroHeight = hero.offsetHeight
      if (scrollTop < heroHeight) {
        const parallaxSpeed = 0.5
        hero.style.transform = `translateY(${scrollTop * parallaxSpeed}px)`
      }
    }
  })
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

// Newsletter Form
function setupNewsletterForm() {
  const newsletterForm = document.querySelector(".newsletter-form")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()
      const email = this.querySelector("input").value

      if (email) {
        alert(`Thank you for subscribing! 📧\nWe'll send toy updates to ${email}`)
        this.querySelector("input").value = ""
      }
    })
  }
}

// Keyboard Shortcuts
function handleKeyboardShortcuts(e) {
  // ESC key
  if (e.key === "Escape") {
    if (productModal.classList.contains("active")) {
      closeModal()
    }
    if (cartSidebar.classList.contains("active")) {
      toggleCart()
    }
    if (wishlistSidebar.classList.contains("active")) {
      toggleWishlist()
    }
    if (searchContainer.classList.contains("active")) {
      toggleSearch()
    }
    if (assistantChat.classList.contains("active")) {
      toggleAssistant()
    }
  }

  // Ctrl/Cmd + K for search
  if ((e.ctrlKey || e.metaKey) && e.key === "k") {
    e.preventDefault()
    toggleSearch()
  }
}

// Utility Functions
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    const headerHeight = document.querySelector(".header").offsetHeight
    const targetPosition = section.offsetTop - headerHeight - 20

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    })
  }
}

function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

function showAddToCartAnimation() {
  const cartBtn = document.querySelector(".cart-btn")
  cartBtn.classList.add("success-animation")

  // Update cart count with animation
  const count = cartBtn.querySelector(".cart-count")
  count.style.animation = "pulse 0.3s ease"

  setTimeout(() => {
    cartBtn.classList.remove("success-animation")
    count.style.animation = ""
  }, 600)
}

// Performance Optimizations
function lazyLoadImages() {
  const images = document.querySelectorAll('img[loading="lazy"]')

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.src // Trigger loading
          img.classList.remove("lazy")
          imageObserver.unobserve(img)
        }
      })
    })

    images.forEach((img) => imageObserver.observe(img))
  }
}

// Initialize lazy loading
document.addEventListener("DOMContentLoaded", lazyLoadImages)

// Service Worker Registration
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration)
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError)
      })
  })
}

// Error Handling
window.addEventListener("error", (e) => {
  console.error("JavaScript error:", e.error)
  // Could send error reports to analytics service
})

// Analytics (placeholder)
function trackEvent(eventName, eventData) {
  console.log("Analytics Event:", eventName, eventData)
  // Integrate with analytics service like Google Analytics
}

// Track important user interactions
document.addEventListener("click", (e) => {
  if (e.target.matches(".quick-add")) {
    trackEvent("quick_add_to_cart", { product_id: e.target.onclick.toString().match(/\d+/)[0] })
  }

  if (e.target.matches(".view-360")) {
    trackEvent("view_360", { product_id: e.target.onclick.toString().match(/\d+/)[0] })
  }
})

// Accessibility Improvements
function announceToScreenReader(message) {
  const announcement = document.createElement("div")
  announcement.setAttribute("aria-live", "polite")
  announcement.setAttribute("aria-atomic", "true")
  announcement.className = "sr-only"
  announcement.textContent = message

  document.body.appendChild(announcement)

  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
}

// Announce cart updates to screen readers
const originalUpdateCartUI = updateCartUI
updateCartUI = () => {
  const oldCount = Number.parseInt(cartCount.textContent) || 0
  originalUpdateCartUI()
  const newCount = Number.parseInt(cartCount.textContent) || 0

  if (newCount > oldCount) {
    announceToScreenReader(`Item added to cart. Cart now has ${newCount} items.`)
  } else if (newCount < oldCount) {
    announceToScreenReader(`Item removed from cart. Cart now has ${newCount} items.`)
  }
}

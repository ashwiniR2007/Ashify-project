import { useEffect, useMemo, useState } from "react";
import "./App.css";

const productsData = [
  {
    id: 1,
    name: "Soleil Wrap Dress",
    meta: "Midi · Floral",
    price: 12367,
    oldPrice: 14999,
    image: "/images/dress1.png",
    tag: "new",
    cat: "women",
    rating: 4.6,
    desc: "Soft floral midi dress with a flattering wrap fit."
  },
  {
    id: 2,
    name: "Rivira Sip Gown",
    meta: "Party · Elegant",
    price: 15890,
    oldPrice: 18999,
    image: "/images/dress2.png",
    tag: "hot",
    cat: "women",
    rating: 4.8,
    desc: "Elegant evening gown made for festive and party wear."
  },
  {
    id: 3,
    name: "Garden Tiered Dress",
    meta: "Party · Elegant",
    price: 15890,
    oldPrice: 18999,
    image: "/images/dress3.png",
    tag: "hot",
    cat: "women",
    rating: 4.8,
    desc: "A flowy tiered dress with a charming style inspired by fresh garden elegance."
  },
  {
    id: 4,
    name: "Noir Evening Gown",
    meta: "Party · Elegant",
    price: 15890,
    oldPrice: 18999,
    image: "/images/dress4.png",
    tag: "hot",
    cat: "women",
    rating: 4.8,
    desc: "A stunning black evening gown with a sophisticated and glamorous look."
  },
  {
    id: 5,
    name: "Citrus Linen Mini",
    meta: "Party · Elegant",
    price: 15890,
    oldPrice: 18999,
    image: "/images/dress5.png",
    tag: "hot",
    cat: "women",
    rating: 4.8,
    desc: "A lightweight linen mini dress with a bright and refreshing summer vibe."
  },
  {
    id: 6,
    name: "Dusty Rose Midi",
    meta: "Party · Elegant",
    price: 15890,
    oldPrice: 18999,
    image: "/images/dress6.png",
    tag: "hot",
    cat: "women",
    rating: 4.8,
    desc: "A graceful midi dress with a soft dusty rose shade and elegant appeal."
  },
  {
    id: 7,
    name: "Azure Bodycon",
    meta: "Party · Elegant",
    price: 15890,
    oldPrice: 18999,
    image: "/images/dress7.png",
    tag: "hot",
    cat: "women",
    rating: 4.8,
    desc: "A sleek bodycon dress designed with a flattering fit and modern elegance."
  },
  {
    id: 8,
    name: "Ivory Lace Gown",
    meta: "Party · Elegant",
    price: 15890,
    oldPrice: 18999,
    image: "/images/dress8.png",
    tag: "hot",
    cat: "women",
    rating: 4.8,
    desc: "A graceful lace gown with a timeless style perfect for special occasions."
  },
  {
    id: 9,
    name: "Terracotta Shirred",
    meta: "Party · Elegant",
    price: 15890,
    oldPrice: 18999,
    image: "/images/dress9.png",
    tag: "hot",
    cat: "women",
    rating: 4.8,
    desc: "A chic shirred dress with a comfortable fit and stylish texture."
  },
  {
    id: 10,
    name: "Emerald Satin Slip",
    meta: "Party · Elegant",
    price: 15890,
    oldPrice: 18999,
    image: "/images/dress10.png",
    tag: "hot",
    cat: "women",
    rating: 4.8,
    desc: "A luxurious satin slip dress with a smooth finish and classy look."
  },
  {
    id: 11,
    name: "Cherry Blossom Mini",
    meta: "Party · Elegant",
    price: 15890,
    oldPrice: 18999,
    image: "/images/dress11.png",
    tag: "hot",
    cat: "women",
    rating: 4.8,
    desc: "A cute mini dress with a fresh feminine style and trendy charm."
  },
  {
    id: 12,
    name: "Champagne Formal Gown",
    meta: "Party · Elegant",
    price: 15890,
    oldPrice: 18999,
    image: "/images/dress12.png",
    tag: "hot",
    cat: "women",
    rating: 4.8,
    desc: "An elegant formal gown with a sophisticated silhouette for evening events."
  },
  {
    id: 13,
    name: "Formal Pink Shirt",
    meta: "Formal Pink Shirt for Men",
    price: 8999,
    oldPrice: 10999,
    image: "/images/men1.png",
    tag: "sale",
    cat: "men",
    rating: 4.4,
    desc: "Sharp shirt with a clean and stylish formal look."
  },
  {
    id: 14,
    name: "Ethnic Kurta",
    meta: "Men’s Ethnic Kurta Collection",
    price: 2999,
    oldPrice: 3999,
    image: "/images/men2.png",
    tag: "new",
    cat: "men",
    rating: 4.2,
    desc: "Elegant ethnic kurta with comfortable fabric and traditional style for festive occasions."
  },
  {
    id: 15,
    name: "Summer Kurta",
    meta: "Summer · Light",
    price: 2999,
    oldPrice: 3999,
    image: "/images/men3.png",
    tag: "new",
    cat: "men",
    rating: 4.2,
    desc: "Lightweight kurta with simple styling for daily and summer wear."
  },
  {
    id: 16,
    name: "Party Wear Shirt",
    meta: "Men’s Party Wear Shirt",
    price: 2999,
    oldPrice: 3999,
    image: "/images/men4.png",
    tag: "new",
    cat: "men",
    rating: 4.2,
    desc: "Trendy party wear shirt with modern design and perfect fit for events."
  },
  {
    id: 17,
    name: "Linen Shirt",
    meta: "Summer · Light",
    price: 2999,
    oldPrice: 3999,
    image: "/images/men5.png",
    tag: "new",
    cat: "men",
    rating: 4.2,
    desc: "Breathable linen shirt with classy look for casual and summer styling."
  },
  {
    id: 18,
    name: "Checked Shirt",
    meta: "Summer · Light",
    price: 2999,
    oldPrice: 3999,
    image: "/images/men6.png",
    tag: "new",
    cat: "men",
    rating: 4.2,
    desc: "Classic checked shirt with stylish patterns and comfortable fit."
  },
  {
    id: 19,
    name: "Kurta",
    meta: "Summer · Light",
    price: 2999,
    oldPrice: 3999,
    image: "/images/men7.png",
    tag: "new",
    cat: "men",
    rating: 4.2,
    desc: "Comfortable and fashionable kurta for traditional and festive looks."
  },
  {
    id: 20,
    name: "Printed Wolf Shirt",
    meta: "Summer · Light",
    price: 2999,
    oldPrice: 3999,
    image: "/images/men8.png",
    tag: "new",
    cat: "men",
    rating: 4.2,
    desc: "Unique wolf print shirt with trendy design for bold casual style."
  },
  {
    id: 21,
    name: "Casual Street Wear T Shirt",
    meta: "Summer · Light",
    price: 2999,
    oldPrice: 3999,
    image: "/images/men9.png",
    tag: "new",
    cat: "men",
    rating: 4.2,
    desc: "Comfortable street style t shirt with modern design for everyday fashion."
  },
  {
    id: 22,
    name: "Cotton Socks",
    meta: "Summer · Light",
    price: 2999,
    oldPrice: 3999,
    image: "/images/men10.png",
    tag: "new",
    cat: "men",
    rating: 4.2,
    desc: "Soft cotton socks with breathable fabric for all-day comfort."
  },
  {
    id: 23,
    name: "White Ankle Socks",
    meta: "Summer · Light",
    price: 2999,
    oldPrice: 3999,
    image: "/images/men10.png",
    tag: "new",
    cat: "men",
    rating: 4.2,
    desc: "Classic white ankle socks with comfortable fit for daily wear."
  },
  {
    id: 24,
    name: "Premium Striped Socks",
    meta: "Summer · Light",
    price: 2999,
    oldPrice: 3999,
    image: "/images/men10.png",
    tag: "new",
    cat: "men",
    rating: 4.2,
    desc: "Stylish striped socks made with quality fabric for smart comfort."
  },
  {
    id: 25,
    name: "Kids Party Frock",
    meta: "Kids · Cute",
    price: 2499,
    oldPrice: 3299,
    image: "/images/kid1.png",
    tag: "new",
    cat: "kids",
    rating: 4.7,
    desc: "Pretty party frock for kids with premium finish."
  },
  {
    id: 26,
    name: "Kids Casual Set",
    meta: "Kids · Daily",
    price: 1999,
    oldPrice: 2599,
    image: "/images/kid2.png",
    tag: "sale",
    cat: "kids",
    rating: 4.3,
    desc: "Comfortable casual set for active everyday use."
  },
  {
    id: 27,
    name: "Kids Pants",
    meta: "Kids · Daily",
    price: 1999,
    oldPrice: 2599,
    image: "/images/kid3.png",
    tag: "sale",
    cat: "kids",
    rating: 4.3,
    desc: "Comfortable pants for active everyday use."
  },
  {
    id: 28,
    name: "Kids Frocks",
    meta: "Kids · Daily",
    price: 1999,
    oldPrice: 2599,
    image: "/images/kid4.png",
    tag: "sale",
    cat: "kids",
    rating: 4.3,
    desc: "Comfortable frocks for active everyday use."
  },
  {
    id: 29,
    name: "Kids Hoodie",
    meta: "Kids · Daily",
    price: 1999,
    oldPrice: 2599,
    image: "/images/kid5.png",
    tag: "sale",
    cat: "kids",
    rating: 4.3,
    desc: "Comfortable hoodie for everyday use."
  },
  {
    id: 30,
    name: "Kids Uniforms",
    meta: "Kids · Daily",
    price: 1999,
    oldPrice: 2599,
    image: "/images/kid6.png",
    tag: "sale",
    cat: "kids",
    rating: 4.3,
    desc: "Comfortable set for active everyday use."
  },
  {
    id: 31,
    name: "Kids Jacket",
    meta: "Kids · Daily",
    price: 1999,
    oldPrice: 2599,
    image: "/images/kid7.png",
    tag: "sale",
    cat: "kids",
    rating: 4.3,
    desc: "Comfortable jacket for active everyday use."
  },
  {
    id: 32,
    name: "Kids Shorts",
    meta: "Kids · Daily",
    price: 1999,
    oldPrice: 2599,
    image: "/images/kid8.png",
    tag: "sale",
    cat: "kids",
    rating: 4.3,
    desc: "Comfortable shorts for active everyday use."
  },
  {
    id: 33,
    name: "Kids Pamper",
    meta: "Kids · Daily",
    price: 1999,
    oldPrice: 2599,
    image: "/images/kid9.png",
    tag: "sale",
    cat: "kids",
    rating: 4.3,
    desc: "Comfortable daily-use product for kids."
  },
  {
    id: 34,
    name: "Kids Kurta",
    meta: "Kids · Daily",
    price: 1999,
    oldPrice: 2599,
    image: "/images/kid10.png",
    tag: "sale",
    cat: "kids",
    rating: 4.3,
    desc: "Comfortable casual kurta for active everyday use."
  }
];

const formatPrice = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);

const getStoredArray = (key) => {
  try {
    const savedValue = window.localStorage.getItem(key);
    return savedValue ? JSON.parse(savedValue) : [];
  } catch {
    return [];
  }
};

const fallbackImage =
  "https://via.placeholder.com/400x500/f3e7df/7a5c4d?text=Ashify";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [cart, setCart] = useState(() => getStoredArray("ashify_cart"));
  const [wishlist, setWishlist] = useState(() => getStoredArray("ashify_wishlist"));
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    try {
      window.localStorage.setItem("ashify_cart", JSON.stringify(cart));
    } catch {
      //
    }
  }, [cart]);

  useEffect(() => {
    try {
      window.localStorage.setItem("ashify_wishlist", JSON.stringify(wishlist));
    } catch {
      //
    }
  }, [wishlist]);

  useEffect(() => {
    if (!selectedProduct) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProduct(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProduct]);

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesCategory =
        activeCategory === "all" || product.cat === activeCategory;

      const query = searchTerm.toLowerCase().trim();
      const matchesSearch =
        product.name.toLowerCase().includes(query) ||
        product.meta.toLowerCase().includes(query) ||
        product.desc.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    const section = document.getElementById("products");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);

      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }

      return [...prev, product];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const moveToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  const isWishlisted = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const handleContactSubmit = (event) => {
    event.preventDefault();
    alert("Message sent successfully!");
    event.currentTarget.reset();
  };

  return (
    <div className="app">
      <header className="navbar">
        <div className="brand">Ashify Store</div>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#categories">Categories</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="search-box">
          <label htmlFor="search" className="sr-only">
            Search products
          </label>
          <input
            id="search"
            type="text"
            placeholder="Search for dresses, shirts, kids wear..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="nav-icons">
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("wishlist-panel")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Wishlist ({wishlist.length})
          </button>
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("cart-panel")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Cart ({cartCount})
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="hero-badge">New Season Collection</p>
          <h1>Style that feels premium, modern, and effortless.</h1>
          <p>
            Discover elegant fashion for women, men, and kids with trending
            styles, best deals, and everyday essentials.
          </p>
          <a href="#products" className="hero-btn">
            Shop Now
          </a>
        </div>
      </section>

      <section className="categories" id="categories">
        <div className="section-head">
          <h2>Featured Categories</h2>
          <p>Browse collections for every style and age.</p>
        </div>

        <div className="category-grid">
          <button
            type="button"
            className="category-card"
            onClick={() => handleCategoryClick("men")}
          >
            <img
              src="/images/men.png"
              alt="Men"
              onError={(e) => {
                e.currentTarget.src = fallbackImage;
              }}
            />
            <h3>Men</h3>
          </button>

          <button
            type="button"
            className="category-card"
            onClick={() => handleCategoryClick("women")}
          >
            <img
              src="/images/women.png"
              alt="Women"
              onError={(e) => {
                e.currentTarget.src = fallbackImage;
              }}
            />
            <h3>Women</h3>
          </button>

          <button
            type="button"
            className="category-card"
            onClick={() => handleCategoryClick("kids")}
          >
            <img
              src="/images/kid.png"
              alt="Kids"
              onError={(e) => {
                e.currentTarget.src = fallbackImage;
              }}
            />
            <h3>Kids</h3>
          </button>
        </div>
      </section>

      <section className="filters" aria-label="Product filters">
        <button
          type="button"
          className={activeCategory === "all" ? "active" : ""}
          onClick={() => setActiveCategory("all")}
        >
          All
        </button>
        <button
          type="button"
          className={activeCategory === "women" ? "active" : ""}
          onClick={() => setActiveCategory("women")}
        >
          Women
        </button>
        <button
          type="button"
          className={activeCategory === "men" ? "active" : ""}
          onClick={() => setActiveCategory("men")}
        >
          Men
        </button>
        <button
          type="button"
          className={activeCategory === "kids" ? "active" : ""}
          onClick={() => setActiveCategory("kids")}
        >
          Kids
        </button>
      </section>

      <section className="products-section" id="products">
        <div className="section-head">
          <h2>
            {activeCategory === "all"
              ? "Trending Products"
              : `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Products`}
          </h2>
          <p>Search and filter your favourites instantly.</p>
          <p>{filteredProducts.length} products found</p>
        </div>

        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <article
                className="product-card"
                key={product.id}
                onClick={() => setSelectedProduct(product)}
              >
                <div className="product-image-wrap">
                  <img
                    src={product.image}
                    alt={product.name}
                    onError={(e) => {
                      e.currentTarget.src = fallbackImage;
                    }}
                  />
                  <span className="tag">{product.tag}</span>
                </div>

                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="meta">{product.meta}</p>
                  <p className="desc">{product.desc}</p>
                  <p className="rating">⭐ {product.rating}</p>

                  <div className="price-row">
                    <span className="price">{formatPrice(product.price)}</span>
                    <span className="old-price">
                      {formatPrice(product.oldPrice)}
                    </span>
                  </div>

                  <div className="card-actions">
                    <button
                      type="button"
                      className="primary-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                    >
                      Add to Cart
                    </button>

                    <button
                      type="button"
                      className="secondary-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product);
                      }}
                    >
                      {isWishlisted(product.id)
                        ? "Remove Wishlist"
                        : "Wishlist"}
                    </button>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <p className="empty-text">No products found for this search.</p>
          )}
        </div>
      </section>

      <section className="cart-wishlist-wrap">
        <div className="panel" id="cart-panel">
          <h2>Cart</h2>

          {cart.length === 0 ? (
            <p className="empty-text">Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div className="mini-card" key={item.id}>
                  <div>
                    <h4>{item.name}</h4>
                    <p>
                      {formatPrice(item.price)} × {item.qty}
                    </p>
                  </div>

                  <div className="qty-actions">
                    <button type="button" onClick={() => decreaseQty(item.id)}>
                      -
                    </button>
                    <button type="button" onClick={() => increaseQty(item.id)}>
                      +
                    </button>
                    <button type="button" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              <h3 className="total">Total: {formatPrice(cartTotal)}</h3>
              <button type="button" className="hero-btn checkout-btn">
                Checkout
              </button>
            </>
          )}
        </div>

        <div className="panel" id="wishlist-panel">
          <h2>Wishlist</h2>

          {wishlist.length === 0 ? (
            <p className="empty-text">Your wishlist is empty.</p>
          ) : (
            <>
              {wishlist.map((item) => (
                <div className="mini-card" key={item.id}>
                  <div>
                    <h4>{item.name}</h4>
                    <p>{formatPrice(item.price)}</p>
                  </div>

                  <div className="qty-actions">
                    <button type="button" onClick={() => moveToCart(item)}>
                      Move to Cart
                    </button>
                    <button
                      type="button"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="section-head">
          <h2>Contact Us</h2>
          <p>Send your message and we will get back to you soon.</p>
        </div>

        <form className="contact-form" onSubmit={handleContactSubmit}>
          <div className="form-row">
            <label className="sr-only" htmlFor="name">
              Your name
            </label>
            <input id="name" type="text" placeholder="Your name" required />

            <label className="sr-only" htmlFor="email">
              Your email
            </label>
            <input id="email" type="email" placeholder="Your email" required />
          </div>

          <label className="sr-only" htmlFor="message">
            Your message
          </label>
          <textarea
            id="message"
            placeholder="Your message"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer className="footer">
  <div className="footer-container">
    <div className="footer-section">
      <h3 className="footer-brand">Ashify Store</h3>
      <p className="footer-text">
        Fashion for every mood, season, and celebration.
      </p>
    </div>

    <div className="footer-section">
      <h4>Quick Links</h4>
      <a href="#home">Home</a>
      <a href="#products">Products</a>
      <a href="#contact">Contact</a>
      <a href="#about">About Us</a>
    </div>

    <div className="footer-section">
      <h4>Customer Care</h4>
      <a href="#faq">FAQ</a>
      <a href="#shipping">Shipping</a>
      <a href="#returns">Returns</a>
      <a href="#privacy">Privacy Policy</a>
    </div>

    <div className="footer-section">
      <h4>Contact</h4>
      <p>Email: support@ashify.com</p>
      <p>Phone: +91 98765 43210</p>
      <p>Mumbai, India</p>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© 2026 Ashify. All rights reserved.</p>
  </div>
</footer>

      {selectedProduct && (
        <div
          className="product-modal-overlay"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="product-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="close-btn"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close product details"
            >
              ×
            </button>

            <div className="modal-content">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                onError={(e) => {
                  e.currentTarget.src = fallbackImage;
                }}
              />

              <div className="modal-info">
                <h2 id="product-modal-title">{selectedProduct.name}</h2>
                <p className="meta">{selectedProduct.meta}</p>
                <p className="desc">{selectedProduct.desc}</p>
                <p className="rating">⭐ {selectedProduct.rating}</p>

                <div className="price-row">
                  <span className="price">
                    {formatPrice(selectedProduct.price)}
                  </span>
                  <span className="old-price">
                    {formatPrice(selectedProduct.oldPrice)}
                  </span>
                </div>

                <div className="modal-actions">
                  <button
                    type="button"
                    className="primary-btn"
                    onClick={() => addToCart(selectedProduct)}
                  >
                    Add to Cart
                  </button>
                  <button
                    type="button"
                    className="secondary-btn"
                    onClick={() => toggleWishlist(selectedProduct)}
                  >
                    {isWishlisted(selectedProduct.id)
                      ? "Remove Wishlist"
                      : "Wishlist"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
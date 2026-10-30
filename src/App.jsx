import "./App.css";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

function App() {
  return (
    <main className="product-page">
      <nav className="brand-bar" aria-label="Navigation principale">
        <a className="brand" href="#" aria-label="Accueil Soundly">
          <span className="brand-mark"><i className="bi bi-soundwave"></i></span>
          SOUNDLY
        </a>
        <button className="icon-button" type="button" aria-label="Voir le panier">
          <i className="bi bi-bag"></i>
          <span className="cart-dot"></span>
        </button>
      </nav>

      <article className="product-card">
        <div className="product-visual">
          <span className="edition-badge">ÉDITION 2026</span>
          <Image />
          <span className="color-chip color-chip-one"></span>
          <span className="color-chip color-chip-two"></span>
        </div>

        <div className="product-details">
          <div className="rating-row">
            <span className="stars" aria-label="5 étoiles">★★★★★</span>
            <span>4.9 · 128 avis</span>
          </div>
          <Name />
          <Description />

          <div className="feature-row">
            <span><i className="bi bi-bluetooth"></i> Bluetooth 5.3</span>
            <span><i className="bi bi-battery-full"></i> 40 heures</span>
          </div>

          <div className="purchase-row">
            <Price />
            <button className="purchase-button" type="button">
              Ajouter au panier
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </article>
    </main>
  );
}

export default App;

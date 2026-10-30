import product from "../product";

function Price() {
  return (
    <div className="product-price" aria-label={`Prix: ${product.price} euros`}>
      <span className="price-currency">€</span>
      <span>{product.price}</span>
    </div>
  );
}

export default Price;

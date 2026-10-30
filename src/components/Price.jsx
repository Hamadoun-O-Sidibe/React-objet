import product from "../product";

function Price() {
  return (
    <div className="min-w-[110px] text-[clamp(2rem,3vw,3rem)] font-extrabold tracking-[-0.05em] text-[#17233c]" aria-label={`Prix: ${product.price} euros`}>
      <span className="mr-1 align-top text-base text-[#718096]">€</span>
      <span>{product.price}</span>
    </div>
  );
}

export default Price;

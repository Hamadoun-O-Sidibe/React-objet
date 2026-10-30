import product from "../product";

function Name() {
  return <h1 className="mb-[18px] max-w-[460px] text-[2.35rem] leading-[0.98] font-extrabold tracking-[-0.055em] text-[#17233c] sm:text-[clamp(2.25rem,4vw,4.15rem)]">{product.name}</h1>;
}

export default Name;

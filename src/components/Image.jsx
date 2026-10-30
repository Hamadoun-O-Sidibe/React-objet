import product from "../product";

function Image() {
  return (
    <img
      className="h-full w-full scale-[1.02] object-cover object-center mix-blend-multiply saturate-[0.82] contrast-[1.03] transition-transform duration-[700ms] group-hover:scale-[1.06]"
      src={product.image}
      alt={product.name}
      loading="eager"
    />
  );
}

export default Image;

import type { Props } from "../components/product/ProductCard.tsx";
import Component from "../components/product/ProductCard.tsx";
export type { Layout } from "../components/product/ProductCard.tsx";

function Island(props: Props) {
  return <Component {...props} />;
}

export default Island;

import { useComputed } from "@preact/signals";
import Button from "./common.tsx";
import { useWishlist } from "apps/vtex/hooks/useWishlist.ts";
import { useUser } from "apps/vtex/hooks/useUser.ts";
import type { Product } from "apps/commerce/types.ts";

export interface Props {
  product: Product;
  variant?: "icon" | "full";
}

function WishlistButton({
  variant = "icon",
  product,
}: Props) {
  const { productID, isVariantOf } = product;
  const productGroupID = isVariantOf?.productGroupID;

  const { user } = useUser();
  const { loading, addItem, removeItem, getItem } = useWishlist();
  const listItem = useComputed(() =>
    getItem({ sku: productID, productId: productGroupID })
  );
  product.isVariantOf?.productGroupID;
  const isUserLoggedIn = Boolean(user.value?.email);
  const inWishlist = Boolean(listItem.value);

  return (
    <Button
      loading={loading.value}
      inWishlist={inWishlist}
      isUserLoggedIn={isUserLoggedIn}
      variant={variant}
      productGroupID={productGroupID}
      productID={productID}
      removeItem={() => removeItem({ id: listItem.value!.id }!)}
      addItem={() =>
        addItem({ sku: productID, productId: productGroupID || productID })}
    />
  );
}

export default WishlistButton;

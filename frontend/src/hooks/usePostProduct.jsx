import { useState } from "react";

export const usePostProduct = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const addProduct = async (product) => {
    setIsLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      if (response.ok) {
        const data = await response.json();
        setProduct(data);
        setIsLoading(false);
      } else {
        throw new Error("Can't add the product");
      }
    } catch (error) {
      setError("Can't add the product, some weird error");
    } finally {
      setIsLoading(false);
    }
  };
  return {product, isLoading, error, addProduct}
};

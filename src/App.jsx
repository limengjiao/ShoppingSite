import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";

function App() {
  const [productData, setProductData] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProductData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product"
        );
        console.log(response);
        if (!response.ok) {
          throw new Error("Fetch Product Data Failed");
        }
        const data = await response.json();
        setProductData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch product data:", error);
        setIsLoading(false);
      }
    };

    fetchProductData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!productData) {
    return <div>Product data is not available.</div>;
  }

  //If exist same product and size then count++, else add new one
  const addToCart = (productData, size) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.product.id === productData.id && item.size === size
    );

    if (existingCartItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex].count += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { product: productData, size: size, count: 1 },
      ]);
    }
  };

  return (
    <div className="App">
      <Header cartItems={cartItems}></Header>
      <div className="Content">
        <ProductDetails
          productData={productData}
          addToCart={addToCart}
        ></ProductDetails>
      </div>
    </div>
  );
}
export default App;

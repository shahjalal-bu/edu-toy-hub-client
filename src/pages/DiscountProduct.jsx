import React, { useEffect } from "react";

const DiscountProduct = () => {
  //set dynamic title
  useEffect(() => {
    document.title = "EduToysHub | Discount Product";
    return () => {
      document.title = "EduToysHub";
    };
  }, []);
  return <div>Discount product</div>;
};

export default DiscountProduct;

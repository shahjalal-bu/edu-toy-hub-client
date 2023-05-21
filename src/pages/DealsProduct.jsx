import React, { useEffect } from "react";

const DealsProduct = () => {
  //set dynamic title
  useEffect(() => {
    document.title = "EduToysHub | DealsProducts";
    return () => {
      document.title = "EduToysHub";
    };
  }, []);
  return <div>Deals products</div>;
};

export default DealsProduct;

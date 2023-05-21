import React, { useEffect } from "react";

const Order = () => {
  //set dynamic title
  useEffect(() => {
    document.title = "EduToysHub | Order";
    return () => {
      document.title = "EduToysHub";
    };
  }, []);

  return <div>order page i work after</div>;
};

export default Order;

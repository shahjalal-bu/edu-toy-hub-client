import React, { useEffect } from "react";

const OverView = () => {
  //set dynamic title
  useEffect(() => {
    document.title = "EduToysHub | Over view";
    return () => {
      document.title = "EduToysHub";
    };
  }, []);

  return <div>Over view i work after</div>;
};

export default OverView;

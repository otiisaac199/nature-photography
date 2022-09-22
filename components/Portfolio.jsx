import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <div>
      <h1>Travel Photos</h1>
      <div>
        <div>
          <Image
            src="../public/images/federico-respini-sYffw0LNr7s-unsplash.jpg"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

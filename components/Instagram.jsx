import React from "react";
import IgImg1 from "../public/images/ig-image-1.jpg";
import IgImg5 from "../public/images/ig-image-5.jpg";
import IgImg6 from "../public/images/ig-image-6.jpg";
import IgImg7 from "../public/images/ig-image-7.jpg";
import InstagramImg from "./InstagramImg";

const Instagram = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-24">
      <p className="text-2xl font-bold ">Folllow me on Instagram</p>
      <p className="pb-4">@Webbby_345</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-4">
        <InstagramImg socialImg={IgImg1} />
        <InstagramImg socialImg={IgImg5} />
        <InstagramImg socialImg={IgImg6} />
        <InstagramImg socialImg={IgImg7} />
      </div>
    </div>
  );
};

export default Instagram;

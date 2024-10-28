import React from "react";

import Image from "next/image";

export const MainHero = () => {
  return (
    <div className="w-full m-auto">
      <div className="container m-auto">
        <div className="flex items-center justify-center relative">
          <Image
            src="/assets/images/logo-1.png"
            alt=""
            className="mt-20 z-10"
            width={520}
            height={275}
          />
          <Image
            src={"/assets/images/decor1.png"}
            width={800}
            height={829}
            alt=""
            className="hero decor1 m-auto z-0"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

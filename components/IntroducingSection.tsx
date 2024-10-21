// *********************
// Role of the component: IntroducingSection with the text "Introducing Singitronic"
// Name of the component: IntroducingSection.tsx
// Developer: Kirill Dorkin
// Version: 1.0
// Component call: <IntroducingSection />
// Input parameters: no input parameters
// Output: Section with the text "Introducing Singitronic" and button
// *********************

import Link from "next/link";
import React from "react";

const IntroducingSection = () => {
  return (
    <div className="py-20 pt-24 bg-gradient-to-l from-white">
      <div className="text-center flex flex-col gap-y-5 items-center">
        <h2 className="text-zinc-900 text-8xl font-extrabold text-center mb-2 max-md:text-6xl max-[480px]:text-4xl">
          ONLINE <span className="text-blue-600">BE.KG</span> SHOP
        </h2>
        <div>
          <p className="text-zinc-900 text-center text-2xl font-semibold max-md:text-xl max-[480px]:text-base">
            Лучшее по лучшим ценам
          </p>
          <p className="text-white text-center text-2xl font-semibold max-md:text-xl max-[480px]:text-base">
            Паскалка от разработчика
          </p>
          <Link href="/shop" className="block text-white bg-zinc-900 font-bold px-12 py-3 text-xl hover:bg-zinc-800 w-96 mt-2  max-md:text-lg max-md:w-72 max-[480px]:w-60 mx-auto">
            В магазин
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroducingSection;

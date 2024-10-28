"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const CaseContainer = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const logos = useMemo(
    () => [
      // { src: "logo-sd.png", alt: "SD Blog", w: 74, h: 74 },
      { src: "logo-descola.png", alt: "Descola Cursos", w: 124, h: 87 },
      // { src: "logo-modern-tips.png", alt: "MT Blog", w: 74, h: 74 },
      // { src: "logo-ht.png", alt: "HT Blog", w: 74, h: 74 },
      // { src: "logo-br.png", alt: "BR Blog", w: 74, h: 74 },
      { src: "logo-upwork.png", alt: "UpWork Clients", w: 120, h: 32 },
      { src: "logo-github.png", alt: "GitHub Templates", w: 74, h: 74 },
      {
        src: "logo-edu4dev.png",
        alt: "Edu4Dev - Escola de Programação",
        w: 124,
        h: 32,
      },
      { src: "logo-queimou.png", alt: "Queimou.Ai", w: 124, h: 40 },
      { src: "logo-adj.png", alt: "Associação Diabetes Brasil", w: 124, h: 49 },
      {
        src: "logo-2.png",
        alt: "Kit Programação Web - Edu4Dev",
        w: 124,
        h: 22,
      },
    ],
    []
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 1000);
  }, [api, current]);

  return (
    <div className="w-full py-16 lg:py-16">
      <div className="container mx-auto">
        <div className="flex flex-col  gap-10 relative">
          <h2 className="text-5xl md:text-7xl text-center font-regular workSans flex justify-center mb-14">
            Quem Está Usando?
          </h2>
          <Image
            src={"/assets/images/decor7.png"}
            width={75}
            height={78}
            alt=""
            className="hero decor7 m-auto z-0"
            loading="lazy"
          />
          <Image
            src={"/assets/images/decor2.png"}
            width={75}
            height={78}
            alt=""
            className="decor2 z-0"
            loading="lazy"
          />
          <Image
            src={"/assets/images/decor4.png"}
            width={55}
            height={58}
            alt=""
            className="decor3 z-0"
            loading="lazy"
          />
          <Image
            src={"/assets/images/decor5.png"}
            width={95}
            height={83}
            alt=""
            className="decor5 z-0"
            loading="lazy"
          />
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {logos.concat(logos).map((logo, index) => (
                <CarouselItem
                  className="basis-1/4 lg:basis-1/6 logos-carousel"
                  key={index}
                >
                  <Image
                    src={`/assets/images/${logo.src}`}
                    width={logo.w}
                    alt={logo.alt}
                    height={logo.h}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

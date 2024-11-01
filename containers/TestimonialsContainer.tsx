"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
// import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const arr = [
  {
    label: "Sonho Realizado",
    content: `Tudo o que eu mais queria na vida é aprender a programar e com o Kit tudo se tornou mais fácil.`,
    author: "Matheus Miranda, Campinas - SP.",
  },
  {
    label: "Rockstar do Código",
    content: `A Edu4Dev é rockstar do código. Eu recomendo! :) Também é uma empresa muito descontraída e comunicativa. CINCO ESTRELAS!`,
    author: "CEO, Figmenta, Milão - Itália.",
  },
  {
    label: "GOAT",
    content: `O mercado está inundado de desenvolvedores de baixa experiência, mas a Edu4Dev está claramente em um nível diferente, GOAT!`,
    author: "CEO, CB, Lisboa - Portugal",
  },
  {
    label: "Edu4Dev é muito talentosa",
    content: `A Edu4Dev é muito talentosa. Contratei-a por vários anos e conheço bem. A qualidade da sua tecnologia é muito alta. Eu recomendo.`,
    author: "CEO Green Hat Web Solutions, Denver - EUA",
  },
];

export const TestimonialsContainer = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

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
    }, 4000);
  }, [api, current]);

  return (
    <div className="w-full  mb-24">
      <div className="container mx-auto  z-10 relative">
        <div className="flex flex-col gap-10 testimonial">
          <h2 className="text-5xl md:text-7xl max-w-2xl text-center font-regular workSans m-auto mb-10">
            O que estão dizendo
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {arr.map((ar, index) => (
                <CarouselItem
                  className="lg:basis-1/2 mr-4 carousel-item"
                  key={index}
                >
                  <div className="bg-muted testimonial-bg rounded-md h-full lg:col-span-2 p-6 flex justify-between flex-col">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <h3 className="text-xl tracking-tight">{ar.label}</h3>
                        <p className="text-muted-foreground max-w-xs text-base">
                          {ar.content}
                        </p>
                      </div>
                      <p className="flex flex-row gap-2 text-sm items-center">
                        <span className="text-muted-foreground">By</span>{" "}
                        <Avatar className="h-6 w-6">
                          <AvatarImage
                            src={`/assets/images/logo-github.png`}
                            alt={"User"}
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span>{ar.author}</span>
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

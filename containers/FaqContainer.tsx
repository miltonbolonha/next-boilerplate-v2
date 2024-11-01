import { PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import faq from "../content/faq.json";

export const FaqContainer = () => (
  <div className="w-full py-10 lg:py-20 testimonial-wrapper overflow-hidden">
    <div className="container mx-auto relative overflow-hidden">
      <Image
        src={"/assets/images/decor3.png"}
        width={650}
        height={689}
        alt=""
        className="hero decor8 decor10 m-auto z-0"
        loading="lazy"
      />
      <div className="grid lg:grid-cols-2 gap-10 z-10 relative">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge>FAQ</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                Perguntas Frequentes
              </h4>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                A sua dúvida, pode ser a dúvida do próximo. Ainda mais em uma
                área cheia de novos nomes, é sempre bom saber quais são as
                perguntas básicas de cada área.
              </p>
            </div>
            <div className="">
              <Button className="gap-4" variant="outline">
                Junte-se a Nós no Discord <PhoneCall className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full bg-muted p-2 faq"
        >
          {faq.map((ar, index) => (
            <AccordionItem key={index} value={"index-" + index}>
              <AccordionTrigger>{ar.label}</AccordionTrigger>
              <AccordionContent>{ar.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </div>
);

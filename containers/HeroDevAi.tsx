import Link from "next/link";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
export const HeroDevAi = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2 z-10 relative">
        <div className="flex gap-4 flex-col">
          <div>
            <Badge variant="outline">Kit Dev AI</Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
              Tenha a <strong>I.A.</strong> nas mãos
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              A profissão mais desejada do momento, <wbr />
              com o nosso vasto material <wbr />
              saia do &apos;nunca pare de aprender&apos; <wbr />e entre no{" "}
              <wbr />
              <strong>&apos;Aprenda De Uma Vez Por Todas&apos;</strong>!
            </p>
          </div>
          <div className="flex flex-row gap-4 cta-btn">
            <Button size="lg" className="gap-4 green-hover" variant="outline">
              Compre no Pix <PhoneCall className="w-4 h-4" />
            </Button>
            <Button
              variant="secondary"
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 gap-4"
            >
              <Link href="#pricing" className="gap-4 ">
                Adquira Já Seu Kit{" "}
                <MoveRight className="w-4 h-4 inline-block" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="rounded-md aspect-square flex items-center ml-auto">
          <Image
            src={"/assets/images/kit-ai-times.png"}
            width={470}
            alt={"kit programação dev ai"}
            height={415}
          />
        </div>
      </div>
    </div>
  </div>
);

import Link from "next/link";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
export const HeroKits = () => (
  <div className="w-full  py-10 lg:py-20">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2 relative z-10">
        <div className="flex gap-4 flex-col z-10">
          <div>
            <Badge variant="outline">Kit Educacional</Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
              Material Virtual e <strong>Impresso</strong>!
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              Você terá acesso a mesma programação usada por grandes marcas como
              Meta/Facebook, Notion, Twitch, Tik Tok, Walmart, Apple, Nike,
              Netflix, Uber, Starbucks e muitas outras.
            </p>

            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              São inúmeros os estudos que comprovam a importância do material
              impresso no ensino. No nosso kit você encontrará livros impressos,
              e-books, hacker-book, tecnologias exclusivas e muito mais...
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
            src={"/assets/images/kit-programacao.png"}
            width={400}
            alt={"kit programação"}
            height={351}
          />
        </div>
      </div>
    </div>
  </div>
);

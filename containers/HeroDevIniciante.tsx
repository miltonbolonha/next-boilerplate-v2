import Link from "next/link";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
export const HeroDevIniciante = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2 z-10 relative">
        <div className="flex gap-4 flex-col">
          <div>
            <Badge variant="outline">Kit Dev Iniciante</Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
              Inicie a sua jornada <strong>DEV</strong>
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              Material com aulas, livro, sistemas Next.js, trilhas exclusivas, o
              inovador hacker-book e muito mais. FAQ e canal no Discord.
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
                Conheça Nosso Kit <MoveRight className="w-4 h-4 inline-block" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <Image
            src={`/assets/images/kit-iniciante.png`}
            alt={"kit programação dev iniciante"}
            width={470}
            height={400}
          />
        </div>
      </div>
    </div>
  </div>
);

import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const CtaContainer = () => (
  <div className="w-full py-10 lg:py-15 mt-10 mb-5">
    <div className="container mx-auto relative">
      <Image
        src={"/assets/images/decor8.png"}
        width={960}
        height={1021}
        alt=""
        className="decor8 m-auto z-0"
        loading="lazy"
      />
      <div className="flex flex-col text-center bg-muted max-w-screen-md m-auto rounded-md p-4 lg:p-14 gap-8 items-center z-10 relative">
        <div>
          <Badge>Trilhas do Saber</Badge>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
            A Trilha Certa Para Você!
          </h3>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
            A <strong>Trilha Ignição</strong> vai moldar o nosso método para que
            fique alinhado a você. Escolha o seu destino: <wbr />
            <strong>Trilha Programação Web</strong>,
            <wbr />
            <strong>Trilha Carreira Internacional</strong> e/ou <wbr />
            <strong>Trilha StartUp</strong>.
          </p>
        </div>
        <div className="flex flex-row gap-4 cta-btn">
          <Button className="gap-4 green-hover" variant="outline">
            Compre no Pix <PhoneCall className="w-4 h-4" />
          </Button>
          <Button className="gap-4 primary-hover">
            Adquira Já Seu Kit! <MoveRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);

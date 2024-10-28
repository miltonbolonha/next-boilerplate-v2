import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
export const HeroRoles = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2 z-10 relative">
        <div className="flex gap-4 flex-col">
          <div>
            <Badge variant="outline">Kits Educacionais</Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
              Seja <strong>DEV</strong> você também!
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              Os kits da <strong>Edu4Dev</strong> foram desenvolvidos para você
              experimentar grande variedade de habilidades. Você vai ser
              apresentado à diversas áreas do mundo do desenvolvimento web
              moderno.
              <wbr />
            </p>
          </div>
          <div className="flex flex-row gap-4 cta-btn">
            <Button size="lg" className="gap-4 green-hover" variant="outline">
              Compre no Pix <PhoneCall className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4">
              Adquira Já Seu Kit! <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <Image
            src={`/assets/images/window-1.png`}
            alt=""
            width={215}
            height={184}
          />
          <Image
            src={`/assets/images/window-2.png`}
            alt=""
            width={215}
            height={184}
          />
          <Image
            src={`/assets/images/list-2.png`}
            alt=""
            width={215}
            height={178}
          />
          <Image
            src={`/assets/images/list-1.png`}
            alt=""
            width={215}
            height={168}
          />
        </div>
      </div>
    </div>
  </div>
);

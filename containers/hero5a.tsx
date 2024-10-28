import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero5a = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      { src: "logo-chatgpt.png", alt: "ChatGPT", w: 175, h: 51 },
      { src: "logo-stripe.png", alt: "Stripe", w: 160, h: 66 },
      { src: "logo-sendgrid.png", alt: "SendGrid", w: 190, h: 53 },
      // { src: "Next.png", alt: "Next.js", w: 400, h: 500 },
      // { src: "Decap.png", alt: "Decap CMS", w: 400, h: 500 },
      { src: "logo-tailwind.png", alt: "Tailwind CSS", w: 250, h: 38 },
      {
        src: "logo-action.png",
        alt: "GitHub Actions for Automation",
        w: 156,
        h: 59,
      },
      { src: "logo-ts.png", alt: "TypeScript", w: 65, h: 65 },
      { src: "logo-js.png", alt: "JavaScript", w: 65, h: 65 },
      { src: null, alt: "App Router", w: 400, h: 500 },
      { src: null, alt: "Page Router", w: 400, h: 500 },
      { src: null, alt: "Hospedagem Grátis*", w: 400, h: 500 },
    ],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);
  // workSans
  // rammettoOne
  // bangers
  return (
    <div className="w-full z-10 relative">
      <div className="container mx-auto">
        <div className="flex gap-8 py-16 lg:py-16 items-center justify-center flex-col">
          <Button
            variant="secondary"
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 gap-4"
          >
            <Link href="#pricing" className="gap-4 ">
              Conheça Nosso Kit <MoveRight className="w-4 h-4 inline-block" />
            </Link>
          </Button>
          <div className="flex gap-4 flex-col">
            <h2 className="text-5xl md:text-7xl max-w-2xl text-center font-regular workSans">
              <span className="text-spektr-cyan-50 flex justify-center mb-14">
                Início rápido com
              </span>
              <span className="relative flex justify-center items-center overflow-hidden text-center unkempt h100 bg-muted w-logos rounded m-auto mb-10">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    <div>
                      {title.src === null ? (
                        <p className="text-black">{title.alt}</p>
                      ) : (
                        <Image
                          src={`/assets/images/${title.src}`}
                          alt={title.alt}
                          width={title.w}
                          height={title.h}
                        />
                      )}
                    </div>
                  </motion.span>
                ))}
              </span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl text-center workSans">
              Tenha em mãos as seguintes tecnologias usadas em projetos
              profissionais e por grandes empresas: Inteligência Artificial,
              Método de Pagamento, Núvem de Arquivos, Hospedagem Grátis Netlify,
              Envio de E-mails, Gestão de Conteúdo e muitos outros serviços ao
              custo zero!
            </p>
          </div>
          <div className="flex flex-row gap-3 cta-btn">
            <Button size="lg" className="gap-4 green-hover" variant="outline">
              Compre no Pix <PhoneCall className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4">
              Adquira Já Seu Kit! <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

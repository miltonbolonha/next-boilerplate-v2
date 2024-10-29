"use client";
import { useState } from "react";
import { loadStripe, Stripe } from "@stripe/stripe-js";

import { Check, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import gif from '../../public/assets/images/edu4dev.gif'
import Image from "next/image";
export const PricingContainer = () => {
  const [isCreatingCheckout, setIsCreatingCheckout] = useState<boolean>(false);
  const z = process.env.NEXT_PUBLIC_WEBSITE_URL;
  const y = z === "http://localhost:3000";
  const t = y
    ? z + `/api/netlify/checkout`
    : z + `/.netlify/functions/checkout`;

  async function handleClick(priceId: string): Promise<void> {
    try {
      setIsCreatingCheckout(true);

      const checkoutResponse = await fetch(t, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId }),
      });

      if (!checkoutResponse.ok) {
        throw new Error("Failed to create checkout session.");
      }

      const stripeClient: Stripe | null = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUB_KEY as string
      );

      if (!stripeClient) {
        throw new Error("Stripe failed to initialize.");
      }

      const { sessionId }: { sessionId: string } =
        await checkoutResponse.json();
      await stripeClient.redirectToCheckout({ sessionId });
    } catch (error) {
      console.error("Error during checkout:", error);
    } finally {
      setIsCreatingCheckout(false);
    }
  }
  return (
    <div
      className="w-full py-16 lg:py-20 anchor-hack overflow-hidden"
      id="pricing"
    >
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col z-10 relative">
          <Badge>Tabela de Preços</Badge>
          <div className="flex gap-2 flex-col relative max-w-screen-md w-full">
            <h2 className="text-3xl z-10 md:text-5xl tracking-tighter max-w-xl text-center font-regular m-auto">
              Adquira Já o Seu Curso!
            </h2>
            <p className="text-lg z-10 leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center m-auto">
              Os planos dão acesso a todo material do curso.
            </p>
            <Image
              src={"/assets/images/edu4dev.gif"}
              width={352}
              height={198}
              alt=""
              className="m-auto mt-10 rounded overflow-hidden edu4devgif"
              loading="lazy"
            />

            <Image
              src={"/assets/images/decor1.png"}
              width={800}
              height={829}
              alt=""
              className="decor1"
              loading="lazy"
            />
          </div>
          <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8 z-10">
            <Card className="w-full rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Kit Dev Iniciante
                  </span>
                </CardTitle>
                <CardDescription>
                  Enviaremos para o seu e-mail todo o nosso material. Esse kit
                  te ajudará no seu caminho de se tornar <strong>DEV</strong>.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row  items-center gap-2 text-xl">
                    <span className="text-4xl">R$470</span>
                    <span className="text-sm text-muted-foreground line-through">
                      {" "}
                      / R$720
                    </span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Curso Iniciante</p>
                        <p className="text-muted-foreground text-sm">
                          • 01 - Livro Para Iniciantes (PDF)
                        </p>
                        <p className="text-muted-foreground text-sm">
                          • 05 - Módulos em PDF
                        </p>
                        <p className="text-muted-foreground text-sm">
                          • 02 - Vídeo-aulas
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Tecnologia e Manuais</p>
                        <p className="text-muted-foreground text-sm">
                          • Sistema Para Iniciantes
                        </p>

                        <p className="text-muted-foreground text-sm">
                          • Next.js PRO Starter Kit
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Trilhas do Saber</p>
                        <p className="text-muted-foreground text-sm">
                          • Trilha Ignição
                        </p>

                        <p className="text-muted-foreground text-sm">
                          • Trilha Programador Web
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Outros Materiais</p>
                        <p className="text-muted-foreground text-sm">
                          • Livro de Ficção (PDF)
                        </p>
                        <p className="text-muted-foreground text-sm">
                          • Hacker-book
                        </p>
                        <p className="text-muted-foreground text-sm">
                          • Extensão para VSCode
                        </p>
                        <p className="text-muted-foreground text-sm">
                          • Músicas Para Trabalhar
                        </p>
                        <p className="text-muted-foreground text-sm">
                          • Stickers
                        </p>
                        <p className="text-muted-foreground text-sm">
                          • Jogo da Memória
                        </p>
                        <p className="text-muted-foreground text-sm">
                          • Caça Palavras
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Suporte</p>
                        <p className="text-muted-foreground text-sm">
                          • FAQ
                        </p>{" "}
                        <p className="text-muted-foreground text-sm">
                          • Suporte Geral
                        </p>
                        <p className="text-muted-foreground text-sm">
                          • Canal aberto no Discord
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button
                    className="gap-4 gold-btn"
                    disabled={isCreatingCheckout}
                  >
                    <a
                      href={`https://buy.stripe.com/fZeaHZ0MC48rc5qeUU`}
                      target="_blank"
                      rel="nofollow, noindex, noreferrer"
                    >
                      {" "}
                      Inserir no Carrinho
                    </a>
                  </Button>
                  <p className="text-muted-foreground text-xs text-center italic">
                    Inicie o seu caminho DEV agora mesmo!
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full shadow-2xl rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Kit Dev I.A.
                  </span>
                </CardTitle>
                <CardDescription>
                  Neste Kit você terá acesso a um fantástico produto feito para
                  você manipular a I.A. e muito mais.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row  items-center gap-2 text-4xl">
                    <span className="">R$840</span>
                    <span className="text-sm text-muted-foreground line-through">
                      {" "}
                      / R$1200
                    </span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Kit Dev Iniciante</p>
                        <p className="text-muted-foreground text-sm">
                          • Todo material do Kit Dev Iniciante
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Tecnologia e Manuais</p>

                        <p className="text-muted-foreground text-sm">
                          • A.I. Times
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Trilhas do Saber</p>

                        <p className="text-muted-foreground text-sm">
                          • Trilha Carreira Internacional
                        </p>
                        <p className="text-muted-foreground text-sm">
                          • Trilha StartUP
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Outros Materiais</p>
                        <p className="text-muted-foreground text-sm">
                          • E-book Carreira Internacional
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="gap-4 green-hover"
                    disabled={isCreatingCheckout}
                  >
                    <a
                      href={`https://buy.stripe.com/14keYfbrgbAT6L6145`}
                      target="_blank"
                      rel="nofollow, noindex, noreferrer"
                    >
                      {" "}
                      Pré-Venda, desconto 30%*
                    </a>
                  </Button>
                  {/* <Button className="gap-4 gold-btn">
                  Inserir no Carrinho <MoveRight className="w-4 h-4" />
                </Button> */}
                  <p className="text-muted-foreground text-xs text-center italic">
                    Seja o primeiro a garantir o seu kit I.A.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* <Card className="w-full shadow-2xl rounded-md">
            <CardHeader>
              <CardTitle>
                <span className="flex flex-row gap-4 items-center font-normal">
                  Impresso + Virtual
                </span>
              </CardTitle>
              <CardDescription>
                Esse é o kit completo, contendo livros, caderno, vídeos, e mais.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-8 justify-start">
                <p className="flex flex-row  items-center gap-2 text-4xl">
                  <span className="">R$1200</span>
                  <span className="text-sm text-muted-foreground line-through">
                    {" "}
                    / R$1440
                  </span>
                </p>
                <div className="flex flex-col gap-4 justify-start">
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Virtual</p>
                      <p className="text-muted-foreground text-sm">
                        • Todo material virtual
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Livro Impresso</p>
                      <p className="text-muted-foreground text-sm">
                        • Introdução à Programação
                      </p>
                      <p className="text-muted-foreground text-sm">
                        • Eugenia 3.0
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Desafio Game Developer</p>
                      <p className="text-muted-foreground text-sm">
                        • 01 - Manual de Regras Básicas
                      </p>
                      <p className="text-muted-foreground text-sm">
                        • 01 - Tabuleiro
                      </p>
                      <p className="text-muted-foreground text-sm">
                        • 04 - Cards de Família
                      </p>
                      <p className="text-muted-foreground text-sm">
                        • 100 - Cards Customizáveis
                      </p>
                      <p className="text-muted-foreground text-sm">
                        • Instruções do Desafio
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Papelaria Personalizada</p>
                      <p className="text-muted-foreground text-sm">
                        • Caderno Personalizado
                      </p>
                      <p className="text-muted-foreground text-sm">
                        • Adesivos
                      </p>
                      <p className="text-muted-foreground text-sm">
                        • + Surpresas
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Suporte</p>
                      <p className="text-muted-foreground text-sm">
                        • Canais Premium no Discord
                      </p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="gap-4 green-hover">
                  Pré-Venda* <MoveRight className="w-4 h-4" />
                </Button>
               <Button className="gap-4 gold-btn">
                  Inserir no Carrinho <MoveRight className="w-4 h-4" />
                </Button> 
                <p className="text-muted-foreground text-xs text-center italic">
                  Seja o primeiro a garantir o seu kit impresso.
                </p>
              </div>
            </CardContent>
          </Card> */}
            <Card className="w-full rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Próximo Lançamento
                  </span>
                </CardTitle>
                <CardDescription>
                  Estamos preparando materiais impressos com todo carinho.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <br />

                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Trilhas do Saber</p>
                      <p className="text-muted-foreground text-sm">
                        • Trilha Hackaton
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Desafio Game Developer</p>
                      <p className="text-muted-foreground text-sm">
                        • 01 - Manual de Regras Básicas
                      </p>
                      <p className="text-muted-foreground text-sm">
                        • 01 - Tabuleiro
                      </p>
                      <p className="text-muted-foreground text-sm">
                        • 04 - Cards de Família
                      </p>
                      <p className="text-muted-foreground text-sm">
                        • 100 - Cards Customizáveis
                      </p>
                      <p className="text-muted-foreground text-sm">
                        • Instruções do Desafio
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Papelaria Personalizada</p>
                      <p className="text-muted-foreground text-sm">
                        • Caderno Personalizado
                      </p>
                      <p className="text-muted-foreground text-sm">
                        • Adesivos
                      </p>
                      <p className="text-muted-foreground text-sm">
                        • + Surpresas
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Suporte</p>
                      <p className="text-muted-foreground text-sm">
                        • Canais Premium no Discord
                      </p>
                    </div>
                  </div>
                  {/* <div className="flex flex-col gap-4 justify-start">
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Material do Seu Método</p>
                      <p className="text-muted-foreground text-sm">
                        • A partir da visão do cliente
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Treinamentos</p>
                      <p className="text-muted-foreground text-sm">
                        • Consultoria para agências web e startups
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Tecnologia</p>
                      <p className="text-muted-foreground text-sm">
                        • Garantimos a melhor tecnologia
                      </p>
                    </div>
                  </div>
                </div> */}
                  <Button
                    variant="outline"
                    className="gap-4 green-hover disabled"
                    disabled
                  >
                    Indisponível <MoveRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

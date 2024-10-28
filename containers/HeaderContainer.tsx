"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export const HeaderContainer = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="w-full z-40 sticky top-0 left-0 bg-background">
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center hack-header">
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row"></div>
        <div className="flex lg:justify-center">
          <Image
            src="/assets/images/logo-2.png"
            alt="Edu4Dev"
            width={222}
            height={40}
          />
        </div>
        <div className="flex justify-end w-full gap-4">
          <Button variant="outline">Discord</Button>
          <Button
            variant="secondary"
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 gap-4"
          >
            <Link href="/#pricing" className="gap-4 ">
              Adquira Já Seu Kit
            </Link>
          </Button>
        </div>

        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8"></div>
          )}
        </div>
      </div>
    </header>
  );
};

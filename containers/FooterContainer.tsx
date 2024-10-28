import Link from "next/link";
import Image from "next/image";

export const FooterContainer = () => {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "",
    },
    {
      title: "Nosso Kit",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "Tecnologias",
          href: "/#techs",
        },
        {
          title: "O Kit",
          href: "/#kit",
        },
        {
          title: "Preço",
          href: "/#pricing",
        },
        {
          title: "Depoimentos",
          href: "/#depoimentos",
        },
        {
          title: "FAQ",
          href: "/#faq",
        },
      ],
    },
    {
      title: "Edu4Dev",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "Sobre",
          href: "/sobre",
        },
        {
          title: "Termos de Serviço",
          href: "/termos-de-servico",
        },
        {
          title: "Política de Privacidade",
          href: "/politica-de-privacidade",
        },
        {
          title: "Contato",
          href: "/contato",
        },
      ],
    },
  ];

  return (
    <div className="w-full py-20 lg:py-40 bg-foreground text-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex gap-8 flex-col items-start">
            <div className="flex flex-col">
              <Image
                src="/assets/images/logo-2.png"
                alt=""
                className=""
                width={175}
                height={31}
              />
            </div>
            <div className="flex gap-20 flex-row">
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                <p>Rua Onze de Agosto</p>
                <p>Ribeirão Preto</p>
                <p>SP 14085-030</p>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="flex text-base gap-1 flex-col items-start"
              >
                <div className="flex flex-col gap-2">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex justify-between items-center"
                    >
                      <span className="text-xl">{item.title}</span>
                    </Link>
                  ) : (
                    <p className="text-xl">{item.title}</p>
                  )}
                  {item.items &&
                    item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="flex justify-between items-center"
                      >
                        <span className="text-background/75">
                          {subItem.title}
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/helpers.css";
import "@fontsource-variable/work-sans";
import "@fontsource/sedgwick-ave";
import "@fontsource/rammetto-one";
import "@fontsource/unkempt";
import "@fontsource/bangers";
import { ThemeProvider } from "@/services/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { ModeToggle } from "@/components/ui/mode-toggle";
import SeoContainer from "@/containers/SeoContainer.js";
import faq from "@/content/faq.json";

const x = {
  slug: "",
  title: `Escola de Programação - Edu4Dev`,
  description: `Criamos experiências para enriquecer a sua experiência ao se tornar DEV.`,
  author: `Edu4Dev`,
  brandPerson: `Milton Bolonha`,
  featuredImage: `https://edu4.dev/assets/images/cover.png`,
  questions: faq,
  topology: `page`,
  articleUrl: `https://edu4.dev`,
};
// import { auth } from "@/lib/auth";
// import { SessionProvider } from "next-auth/react";
// These styles apply to every route in the application
// import { AuthProvider } from "@/components/auth/AuthProvider";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const session = await auth();

  return (
    <html lang="pt" suppressHydrationWarning>
      <SeoContainer killSeo={false} data={x} />
      <body>
        {/* <SessionProvider session={session}>
          {children}
          <Toaster />
        </SessionProvider> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <ModeToggle /> */}
          {children}
          {/* <Toaster /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}

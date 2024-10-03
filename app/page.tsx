"use client";
import Image from "next/image";
import { loadStripe, Stripe } from "@stripe/stripe-js";

import {
  checkPermissionStateAndAct,
  notificationUnsupported,
  registerAndSubscribe,
  sendWebPush,
} from "./Push";
import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";

export default function Home() {
  const [unsupported, setUnsupported] = useState<boolean>(false);
  const [subscription, setSubscription] = useState<PushSubscription | null>(
    null
  );
  const [message, setMessage] = useState<string | null>(null);
  const [isCreatingCheckout, setIsCreatingCheckout] = useState<boolean>(false);

  async function handleClick(
    testeId: string,
    assinatura: boolean
  ): Promise<void> {
    try {
      setIsCreatingCheckout(true);

      const checkoutResponse = await fetch("/api/create-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ assinatura, testeId }),
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

  useEffect(() => {
    const isUnsupported = notificationUnsupported();
    setUnsupported(isUnsupported);
    if (isUnsupported) {
      return;
    }
    checkPermissionStateAndAct(setSubscription);
  }, []);

  return (
    <div className={"next-initial-css"}>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className={"center"}>
        <button
          disabled={unsupported}
          onClick={() => registerAndSubscribe(setSubscription)}
          className={subscription ? "activeButton" : ""}
        >
          {unsupported
            ? "Notification Unsupported"
            : subscription
            ? "Notification allowed"
            : "Allow notification"}
        </button>
        {subscription ? (
          <>
            <input
              placeholder={"Type push message ..."}
              style={{ marginTop: "5rem" }}
              value={message ?? ""}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={() => sendWebPush(message)}>Test Web Push</button>
          </>
        ) : null}
        <div className={"subscriptionLabel"}>
          <span>Push subscription:</span>
        </div>
        <code className={"codeBox"}>
          {subscription
            ? JSON.stringify(subscription?.toJSON(), undefined, 2)
            : "There is no subscription"}
        </code>
      </div>
      <main className={"main"}>
        <Image
          className={"logo"}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={"ctas"}>
          <a
            className={"primary"}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={"logo"}
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={"secondary"}
          >
            Read our docs
          </a>
        </div>
        <div className="flex flex-col gap-5">
          <button
            disabled={isCreatingCheckout}
            className="border rounded-md px-4 py-2 disabled:opacity-50"
            onClick={() => handleClick("123", false)}
          >
            comprar
          </button>
          <button
            disabled={isCreatingCheckout}
            className="border rounded-md px-4 py-2 disabled:opacity-50"
            onClick={() => handleClick("123", true)}
          >
            assinar
          </button>
        </div>
      </main>
      <div className="center">
        <h1>login</h1>
        <div>
          <button onClick={() => signIn("github")}>Continue with GitHub</button>
        </div>
      </div>
      <footer className={"footer"}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

import stripe from "@/lib/stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { priceId } = await req.json();
  if (!priceId) throw new Error("No Price ID");

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      payment_method_types: ["card"],
      success_url: `${req.headers.get("origin")}/sucesso`,
      metadata: {
        priceId,
      },
    });

    return NextResponse.json({
      sessionId: session.id,
      publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUB_KEY,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.error();
  }
}

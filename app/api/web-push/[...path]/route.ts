import webpush from "web-push";

require("dotenv").config({
  path: "../../../../.env.development",
});

webpush.setVapidDetails(
  "mailto:miltonbolonha@gmail.com",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
  process.env.NEXT_PUBLIC_VAPID_PRIVATE_KEY
);

let subscription: PushSubscription;

export async function POST(request: Request) {
  // Captura os segmentos de caminho a partir da URL
  const url = new URL(request.url);
  const path = url.pathname.split("/").slice(3); // Ignora "/api/web-push/"

  // Verifica qual endpoint foi chamado com base no último segmento da URL
  switch (path[0]) {
    case "subscription":
      return setSubscription(request);
    case "send":
      return sendPush(request);
    default:
      return notFoundApi();
  }
}

// Função para lidar com a inscrição de notificação
async function setSubscription(request: Request) {
  const body: { subscription: PushSubscription } = await request.json();
  subscription = body.subscription;
  return new Response(JSON.stringify({ message: "Subscription set." }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

// Função para enviar notificações push
async function sendPush(request: Request) {
  if (!subscription) {
    return new Response(JSON.stringify({ error: "No subscription found." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const body = await request.json();
    const pushPayload = JSON.stringify(body);

    await webpush.sendNotification(subscription, pushPayload);

    return new Response(JSON.stringify({ message: "Push sent." }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending push notification:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send push notification." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

// Função para lidar com endpoints inválidos
async function notFoundApi() {
  return new Response(JSON.stringify({ error: "Invalid endpoint" }), {
    status: 404,
    headers: { "Content-Type": "application/json" },
  });
}

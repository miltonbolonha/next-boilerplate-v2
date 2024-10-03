import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { subscription } = req.body;

    if (!subscription) {
      return res.status(400).json({ error: "Subscription object is missing." });
    }

    try {
      // Aqui você pode processar a inscrição (por exemplo, salvar no banco de dados ou enviar notificações)
      console.log("Received subscription:", subscription);

      return res
        .status(200)
        .json({ message: "Subscription received successfully." });
    } catch (error) {
      console.error("Error processing subscription:", error);
      return res.status(500).json({ error: "Failed to process subscription." });
    }
  } else {
    // Se o método não for POST, retorna um erro
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}

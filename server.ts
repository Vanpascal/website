import { createServer } from "http";
import next from "next";
import { wss, registerClient } from "./lib/server";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => handle(req, res));

  // WebSocket upgrade for payment
  server.on("upgrade", (req, socket, head) => {
    if (!req.url?.startsWith("/api/ws")) {
      socket.destroy();
      return;
    }

    wss.handleUpgrade(req, socket, head, (ws) => {
      const url = new URL(req.url!, `http://${req.headers.host}`);
      const txnId = url.searchParams.get("txnId");
      if (!txnId) return ws.close(1008, "Missing txnId");

      registerClient(txnId, ws);
      wss.emit("connection", ws, req);
    });
  });

  const port = Number(process.env.PORT || 3000);
  server.listen(port, () => console.log(`Server running on port ${port}`));
});

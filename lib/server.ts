import { WebSocketServer, WebSocket } from "ws";

const clients: Record<string, Set<WebSocket>> = {};

export const wss = new WebSocketServer({ noServer: true });

export const broadcastPaymentStatus = (txnId: string, status: string) => {
  if (!clients[txnId]) return;
  for (const ws of clients[txnId]) {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ status }));
    }
  }
};

export const registerClient = (txnId: string, ws: WebSocket) => {
  if (!clients[txnId]) clients[txnId] = new Set();
  clients[txnId].add(ws);

  ws.on("close", () => {
    clients[txnId].delete(ws);
    if (clients[txnId].size === 0) delete clients[txnId];
  });

  ws.on("error", (err) => {
    console.error(`WS error for txn ${txnId}:`, err);
    ws.close();
  });
};

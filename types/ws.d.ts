// types/ws.d.ts
import WebSocket from "ws";

declare global {
  var wsServer: WebSocket.Server | undefined;
}

export {};

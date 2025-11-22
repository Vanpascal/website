"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerClient = exports.broadcastPaymentStatus = exports.wss = void 0;
const ws_1 = require("ws");
const clients = {};
exports.wss = new ws_1.WebSocketServer({ noServer: true });
const broadcastPaymentStatus = (txnId, status) => {
    if (!clients[txnId])
        return;
    for (const ws of clients[txnId]) {
        if (ws.readyState === ws_1.WebSocket.OPEN) {
            ws.send(JSON.stringify({ status }));
        }
    }
};
exports.broadcastPaymentStatus = broadcastPaymentStatus;
const registerClient = (txnId, ws) => {
    if (!clients[txnId])
        clients[txnId] = new Set();
    clients[txnId].add(ws);
    ws.on("close", () => {
        clients[txnId].delete(ws);
        if (clients[txnId].size === 0)
            delete clients[txnId];
    });
    ws.on("error", (err) => {
        console.error(`WS error for txn ${txnId}:`, err);
        ws.close();
    });
};
exports.registerClient = registerClient;

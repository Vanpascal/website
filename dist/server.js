"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const next_1 = __importDefault(require("next"));
const server_1 = require("./lib/server");
const dev = process.env.NODE_ENV !== "production";
const app = (0, next_1.default)({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
    const server = (0, http_1.createServer)((req, res) => handle(req, res));
    // WebSocket upgrade for payment
    server.on("upgrade", (req, socket, head) => {
        var _a;
        if (!((_a = req.url) === null || _a === void 0 ? void 0 : _a.startsWith("/api/ws"))) {
            socket.destroy();
            return;
        }
        server_1.wss.handleUpgrade(req, socket, head, (ws) => {
            const url = new URL(req.url, `http://${req.headers.host}`);
            const txnId = url.searchParams.get("txnId");
            if (!txnId)
                return ws.close(1008, "Missing txnId");
            (0, server_1.registerClient)(txnId, ws);
            server_1.wss.emit("connection", ws, req);
        });
    });
    const port = Number(process.env.PORT || 3000);
    server.listen(port, () => console.log(`Server running on port ${port}`));
});

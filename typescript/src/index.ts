import Forge from "@forgeapp/sdk";
import path from "path";

const forge = new Forge({
  endpoint: "wss://APP_URL/websocket",
  apiKey: "API_KEY",
  routesDirectory: path.resolve(__dirname, "routes"),
});

forge.listen();

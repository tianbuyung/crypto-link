import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  avalanche,
  avalancheFuji,
  mainnet,
  sepolia,
  polygon,
  polygonAmoy,
} from "wagmi/chains";

import { http } from "wagmi";

type Transports = {
  [key: number]: ReturnType<typeof http>;
};

const chains = [
  avalanche,
  mainnet,
  polygon,
  ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
    ? [avalancheFuji, sepolia, polygonAmoy]
    : []),
] as const;

const transports: Transports = {
  [avalanche.id]: http(process.env.NEXT_PUBLIC_AVALANCHE_URL_TRANSPORT),
  [mainnet.id]: http(process.env.NEXT_PUBLIC_MAINNET_URL_TRANSPORT),
  [polygon.id]: http(process.env.NEXT_PUBLIC_POLYGON_URL_TRANSPORT),
};

// Add testnet transport only if the condition is met
if (process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true") {
  transports[avalancheFuji.id] = http(
    process.env.NEXT_PUBLIC_AVALANCHE_FUJI_URL_TRANSPORT,
  );
  transports[sepolia.id] = http(process.env.NEXT_PUBLIC_SEPOLIA_URL_TRANSPORT);
  transports[polygonAmoy.id] = http(
    process.env.NEXT_PUBLIC_POLYGON_AMOY_URL_TRANSPORT,
  );
}

export const config = getDefaultConfig({
  appName: "Vault-App",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID || "",
  chains,
  transports,
  ssr: true,
});

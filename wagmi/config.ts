import { http, createConfig, type Config } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

export const config: Config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

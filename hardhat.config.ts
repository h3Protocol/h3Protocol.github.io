//root/hardhat.config.ts

import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 146,
      forking: {
        url: "https://sonic.drpc.org",
      },
    },
  },
};

export default config;

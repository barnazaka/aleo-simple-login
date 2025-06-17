import {
  ConnectResponse,
  Network,
  PuzzleAccount,
  useAccount,
  useConnect,
} from "@puzzlehq/sdk";
import { createContext, useContext } from "react";

export type DappContextType = {
  account: PuzzleAccount | undefined;
  connect: (() => Promise<ConnectResponse>) | undefined;
  isConnected: boolean | undefined;
  isConnecting: boolean | undefined;
};

const DAppContext = createContext<DappContextType | null>(null);

export const DAppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { account } = useAccount();

  const {
    connect,
    isConnected,
    loading: isConnecting,
  } = useConnect({
    dAppInfo: {
      description: "Simple Login dApp",
      name: "Puzzle",
    },
    permissions: {
      programIds: {
        [Network.AleoTestnet]: ["credits.aleo"],
      },
    },
  });

  return (
    <DAppContext.Provider
      value={{
        account,
        connect,
        isConnected,
        isConnecting,
      }}
    >
      {children}
    </DAppContext.Provider>
  );
};

export const useDappState = (): DappContextType => {
  const ctx = useContext(DAppContext);

  return {
    account: ctx?.account,
    connect: ctx?.connect,
    isConnected: ctx?.isConnected,
    isConnecting: ctx?.isConnecting,
  };
};
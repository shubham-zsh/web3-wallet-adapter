import { useMemo } from 'react'
import {
  ConnectionProvider,
  WalletProvider
} from '@solana/wallet-adapter-react'
import {
  WalletModalProvider,
  WalletMultiButton,
  WalletDisconnectButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { Airdrop } from './Airdrop';
import './App.css'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';

function App() {

  const network = WalletAdapterNetwork.Devnet;

  const endpoint = "https://solana-devnet.g.alchemy.com/v2/RWU7SfEV3OADb2pXtI5x0";

  return (
    <>
      <ConnectionProvider endpoint={endpoint}>
        < WalletProvider wallets={[]} autoConnect>
          < WalletModalProvider>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <WalletMultiButton />
              <WalletDisconnectButton />
            </div>
            <Airdrop></Airdrop>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  )
}

export default App;

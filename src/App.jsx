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
            <div className='min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center p-6'>
              <header className='w-full max-w-2xl flex justify-between items-center mb-8'>
                <WalletMultiButton className="bg-green-500 hover:bg-green-600 text-gray-100 font-semibold px-4 py-2 rounded-lg shadow-md transition" />
                <WalletDisconnectButton className="bg-red-500 hover:bg-red-600 text-gray-100 font-semibold px-4 py-2 rounded-lg shadow-md transition" />
              </header>
              <main className="w-full max-w-md bg-gray-800 rounded-xl p-6 shadow-lg">
                <h1 className="text-2xl font-bold text-green-400 mb-4 text-center">Solana Devnet Airdrop</h1>
                <Airdrop />
              </main>
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  )
}

export default App;

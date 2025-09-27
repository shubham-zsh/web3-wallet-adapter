import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Airdrop } from './Airdrop';
import './App.css';
import '@solana/wallet-adapter-react-ui/styles.css'; // ✅ needed for wallet buttons

function App() {
  const endpoint = "https://solana-devnet.g.alchemy.com/v2/RWU7SfEV3OADb2pXtI5x0";

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col justify-center items-center">
            {/* Wallet connect button */}
            <div className="mb-6">
              <WalletMultiButton className="!bg-green-500 !hover:bg-green-600 !text-white !px-3 !py-2 !rounded-md !text-sm" />
            </div>

            {/* Main Airdrop box */}
            <main className="w-full max-w-md bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col gap-6">
              <h1 className="text-2xl font-bold text-green-400 text-center">
                Solana Devnet Airdrop
              </h1>
              <Airdrop />
            </main>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
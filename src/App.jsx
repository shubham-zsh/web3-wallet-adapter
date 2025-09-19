import { useState } from 'react'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui;';
import { Airdrop } from './Airdrop';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        < WalletProvider wallets={[]} autoConnect>
          < WalletModalProvider>
            <div>
              hi there <b> hello </b>
            </div>
            <Airdrop></Airdrop>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  )
}

export default App

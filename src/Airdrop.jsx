import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

export function Airdrop() {

    const wallet = useWallet();
    const { connection } = useConnection();

    async function sendAirdropToUser() {
        let amount = document.getElementById("amount").value;
        await connection.requestAirdrop(
            wallet.publicKey,
            amount * LAMPORTS_PER_SOL)
        alert("Airdropped " + amount + "Sol to " + wallet.publicKey.toBase58());
    };


    return <div>
        <br />
        <br />
        <input id="amount" type="text" placeholder="Amount" className="p-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"></ input>
        <button className="bg-green-500 hover:bg-green-600 text-gray-100 font-semibold px-4 py-3 rounded-lg shadow-md transition"
            onClick={sendAirdropToUser}>Send Airdrop</button>

        {!wallet.connected && (
            <p className="text-gray-400 text-sm text-center">Connect your wallet to send SOL</p>
        )}
    </div >
}

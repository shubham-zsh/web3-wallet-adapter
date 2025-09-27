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
        <input id="amount" type="text" placeholder="Amount"></ input>
        <button className="" onClick={sendAirdropToUser}>Send Airdrop</button>
    </div >
}

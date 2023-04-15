import React, { useContext, useState } from 'react';
import Web3 from 'web3';
import {ReactComponent as Addfill} from "../../assets/icon/add-fill.svg"
import {UserContext} from '../../App';
import "./connectWallet.css"
import {login} from "../../api/user";
import { setToken } from "../../utils/auth";
import {Link} from "react-router-dom";

function ConnectWallet() {
    const { user, setUser } = useContext(UserContext);
    const [account, setAccount] = useState('');

    const connectWallet = async () => {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        login({address: accounts[0]}).then(response => {
            const data = response.data
            setToken(data.uid);
            // console.log(data.username);
            setUser(data.username);
        })

    };

    const disconnectWallet = () => {
        setAccount('');
        setUser('');
        setToken('');
    };

    return (
        <div >
            {!account ? (
                <button className="connect-wallet-btn connect-wallet-bg" onClick={connectWallet}>
                    <div className="connect-wallet-connect">
                        Connect Wallet
                    </div>
                </button>
            ) : (
                <div>
                    <div className="disconnect-button">
                        Wallet connected: {user}
                        <div  onClick={disconnectWallet}>Disconnect</div>
                    </div>
                    <div className="create-prompt-bg">
                        {/*<Link to={"create"}>*/}
                        <Addfill fill="white" />
                        <button className="create-button"> create</button>
                        {/*</Link>*/}
                    </div>

                </div>
            )}
        </div>
    );
}

export default ConnectWallet;
import { React, useState } from 'react';
import './style.css';
import './style2.css';
import Web3 from 'web3'
import abi from '../abi/deeznutz.json'
import Connect1 from '../Images/Connect1.svg';
import Nut from '../Images/Nut.svg';
import Connect2 from '../Images/Connect2.svg';


const Buttons = () => {
    const [account, setaccount] = useState("connect wallet")
    const [networkId, setnetworkId] = useState()
    const [contractInstance, setcontractInstance] = useState()
    const [successfulMint, setsuccessfulMint] = useState(false)

    async function loadContract() {
        window.web3 = new Web3(window.ethereum)
        const web3 = window.web3

        //load  contract from ABI  
        var contractAddr = "0xF4a3E00bC35726981e2243B669FdD0418890725E"
        const contractinstance = new web3.eth.Contract(abi, contractAddr)
        setcontractInstance(contractinstance)
        console.log("@@@@", contractinstance)
    }

    async function loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
            const web3 = window.web3
            let accounts
            try {
                accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            } catch (error) {
                console.error(error);
            }
            console.log(accounts[0].length);
            setaccount(accounts[0])

            const networkID = await web3.eth.net.getId()
            setnetworkId(networkID)
            console.log(networkID)

        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
            const web3 = window.web3

            const accounts = await web3.eth.getAccounts()
            setaccount(accounts[0])

            const networkID = await web3.eth.net.getId()
            console.log("@@@@@", networkID)
            setnetworkId(networkID)
        } else {
            window.alert('please download metamask')
        }
    }

    const handleConnectWallet = () => {

        loadWeb3()
        loadContract()
        window.ethereum.on('accountsChanged', function () {
            loadWeb3()
        })
        window.ethereum.on('chainChanged', (_chainId) => window.location.reload());
    }

    const handleMint = () => {
        if (networkId === 4){
            setsuccessfulMint(false)
            contractInstance.methods.safeMint(account).send({ from: window.ethereum.selectedAddress, gas: 1000000, gasPrice: '5000000000' }).on('transactionHash', (hash) => {
            }).once('confirmation', function (confirmationNumber, receipt) {
                setsuccessfulMint(true)
            }).on('error', function (error, receipt) {
                window.alert('Transaction failed, try again');
                console.log(error);
                console.log(receipt);
            });
        }
        else {
            window.alert('change to rinkeby network')
        }
    }
    return (
        <>

            <div className="btndiv buttons item3" >

                { //eth addresses are 42 char long so once its loaded, no need to show connect btn again
                    account.length !== 42 && !successfulMint &&
                    <div className="space">
                        <div className="inbtn" onClick={(event) => {
                            event.preventDefault()
                            handleConnectWallet()
                        }}>
                            <a href="#" >
                                <img src={Connect1} alt="Connect Wallet" className="btnimg" />
                            </a>
                        </div>
                    </div>
                }
                {account.length === 42 &&
                    <div className="space" onClick={(event) => {
                        event.preventDefault()
                        handleMint()
                    }}>

                        <p style={{ textAlign: 'center', fontWeight: 'bolder', fontSize: '20px' }}> You are connected @{account.slice(0, 6)}....{account.slice(-3, 42)}</p>
                        {
                          successfulMint &&

                            <p style={{ textAlign: 'center', fontWeight: 'bolder', fontSize: '20px' }}>
                                Succesful mint head over to opensea <br></br>  to view in wallet or mint again
                            </p>

                        }
                        <div className="inbtn">
                            <a href="#">
                                <img src={Nut} alt="Nut Now" className="btnimg" />
                            </a>
                        </div>
                        
                    </div>
                }

                {

                }

            </div>
        </>
    );
};
export default Buttons
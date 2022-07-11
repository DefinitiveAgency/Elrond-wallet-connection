import { FiArrowRight } from 'react-icons/fi';
import { AiFillWallet } from 'react-icons/ai';
import { useEffect } from 'react';

import { useGetLoginInfo } from '@elrondnetwork/dapp-core/hooks';
import {
    ExtensionLoginButton,
    WebWalletLoginButton,
    LedgerLoginButton,
    WalletConnectLoginButton
  } from '@elrondnetwork/dapp-core/UI';


function Unlock() {
    const { isLoggedIn } = useGetLoginInfo();

    useEffect(() => {
        if (isLoggedIn) {
        window.location.href = "/dashboard"
        }
    }, [isLoggedIn]);
    return (
        <div className='home'>
            <div className='content'>
                <h1>Connect to a wallet</h1>
                <br />
               
                <ExtensionLoginButton
                    callbackRoute={"/dashboard"}
                    loginButtonText={'Extension'}
                >
                    <div className='btn btn-secundary'>
                        <AiFillWallet className='btn-icon icon-big' />
                        <p className='wallet-option-text'>Maiar DFfi Wallet</p>
                        <FiArrowRight className='btn-icon icon-big'/>
                    </div>
                </ExtensionLoginButton>
                
                <WebWalletLoginButton
                    callbackRoute={"/dashboard"}
                    loginButtonText={'Web wallet'} 
                    shouldRenderDefaultCss={false}
                    className={'btn btn-secundary a'}
                    
                >
                    <AiFillWallet className="btn-icon icon-big" />
                    <p className="wallet-option-text">Elrond Web Wallet</p>
                    <FiArrowRight className="btn-icon icon-big " />

                </WebWalletLoginButton>

                <LedgerLoginButton
                    loginButtonText={'Ledger'}
                    callbackRoute={"/dashboard"}
                    shouldRenderDefaultCss={false}
                    className={'btn btn-secundary a'}
                >
                    <AiFillWallet className="btn-icon icon-big" />
                    <p className="wallet-option-text">Ledger</p>
                    <FiArrowRight className="btn-icon icon-big " />

                </LedgerLoginButton>
                <WalletConnectLoginButton
                    callbackRoute={"/dashboard"}
                    loginButtonText={'Maiar'}
                    shouldRenderDefaultCss={false}
                    className={'btn btn-secundary a'}
                >
                    <AiFillWallet className='btn-icon icon-big'/>
                    <p className="wallet-option-text">Maiar  App</p>
                    <FiArrowRight className="btn-icon icon-big " />
                </WalletConnectLoginButton>
            </div>
        </div>
    )
}
export default Unlock;
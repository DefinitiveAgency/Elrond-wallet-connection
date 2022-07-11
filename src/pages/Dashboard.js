import { useGetLoginInfo, useGetAccountInfo } from '@elrondnetwork/dapp-core/hooks';
import { useEffect } from 'react';

function Dashboard(){
    const { isLoggedIn } = useGetLoginInfo();
    const { address, account} = useGetAccountInfo();
    useEffect(() => {
        if (!isLoggedIn) {
        window.location.href = "/unlock"
        }
    }, [isLoggedIn]);

    return(
        <div className="home">
            <div className="content">
                <h1>My dapp connection</h1>
                <h5>My Address:</h5>
                <p>{address}</p>
                <h5>My Balance:</h5>
                <p>{(account.balance / 10**18 ).toFixed(4)} xEGLD</p>

            </div>
        </div>
    )
}
export default Dashboard;
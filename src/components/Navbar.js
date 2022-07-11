import { IoIosFlash } from 'react-icons/io';
import { IoIosRocket } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

import { useGetLoginInfo } from '@elrondnetwork/dapp-core/hooks';
import { logout } from '@elrondnetwork/dapp-core/utils';

function Navbar() {
    const { isLoggedIn } = useGetLoginInfo();

    const handleLogout = () => {
        logout(`${window.location.origin}/unlock`);
      };

    return(
        <div className='nav'>
            <div className='container container-flex'>
                <NavLink to='/'>
                    <img className='logo' src='/img/logo.svg' alt='El rond logo' />
                </NavLink>
                <h3 className='app-name'>My app</h3>
                
                {isLoggedIn ? (
                    <>
                        <NavLink to='/dashboard'>
                            <button className='btn'><IoIosRocket className='btn-icon' />Dashboard</button>
                        </NavLink>
                        <NavLink to='/unlock'>
                            <button onClick={handleLogout} className='btn btn-primary'><IoIosFlash className='btn-icon' />Disconnect</button>
                        </NavLink>
                        
                    </>
                ) : (
                    <NavLink to='/unlock'>
                        <button className='btn btn-primary'><IoIosFlash className='btn-icon' />Connect</button>
                    </NavLink>
                )}
                
            </div>
        </div>
    );
}
export default Navbar;
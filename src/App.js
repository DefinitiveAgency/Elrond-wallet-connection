import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Unlock from './pages/Unlock';
import {
  TransactionsToastList,
  SignTransactionsModals,
  NotificationModal
} from '@elrondnetwork/dapp-core/UI';
import { DappProvider } from '@elrondnetwork/dapp-core/wrappers';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Navbar />
      <DappProvider
        environment={"devnet"}
        customNetworkConfig={{ name: 'customConfig', apiTimeout: 6000 }}
      >
        <TransactionsToastList />
        <NotificationModal />
        <SignTransactionsModals className='custom-class-for-modals' />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/unlock' element={<Unlock />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </DappProvider>
    </>
  );
}
export default App;

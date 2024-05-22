import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/carteira" element={ <Wallet /> } />
      <Route path="*" element={ <h1>Not Found</h1> } />
    </Routes>
  );
}

export default App;

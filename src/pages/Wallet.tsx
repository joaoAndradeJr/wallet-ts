import Header from '../components/Header';
import TableBody from '../components/TableBody';
import TableHeader from '../components/TableHeader';
import WalletForm from '../components/WalletForm';

function Wallet() {
  return (
    <>
      <Header />
      <WalletForm />
      <table>
        <TableHeader />
        <TableBody />
      </table>
    </>
  );
}

export default Wallet;

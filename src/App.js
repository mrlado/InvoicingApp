
import './App.css';
import Layout from './Comp/Layout';
import {TotalProvider} from './Comp/Context/TotalContext'

// (parseInt(Summa) - parseInt(additionalData.Discount)-(parseInt(Summa) * parseInt(additionalData.TaxRate) / 100))+ parseInt(additionalData.Shipping)


function App() {
  return (
    <div className='Container'>
      <TotalProvider>
      <Layout/>
      </TotalProvider>
    </div>
  );
}

export default App;

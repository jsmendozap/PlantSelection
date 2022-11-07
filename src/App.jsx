import 'bootstrap/dist/css/bootstrap.css';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import AgregarEspecie from 'Pages/AgregarEspecie';
import { useState } from 'react';
import { TotalContext } from 'Context/TotalContext';

function App() {

  const [total, setTotal] = useState(0)

  return (
    <div className="App">
      <Header />
      <TotalContext.Provider value={{ total, setTotal }}>
        <AgregarEspecie />
      </TotalContext.Provider>
      <Footer />
    </div>
  );
}

export default App;

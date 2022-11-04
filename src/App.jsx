import 'bootstrap/dist/css/bootstrap.css';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import AgregarEspecie from 'Pages/AgregarEspecie';

function App() {
  return (
    <div className="App">
      <Header />
      <AgregarEspecie />
      <Footer />
    </div>
  );
}

export default App;

import 'Styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import RowForm from 'Components/RowForm';
import Header from 'Components/Header';
import Footer from 'Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <RowForm />
      <Footer />
    </div>
  );
}

export default App;

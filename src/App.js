
import './App.css';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Main from './layout/Main';

function App() {
  return (
    <div className="App">
      <h1 className="w-1/2 m-auto my-10 border-2">
        <Header />
        <Main />
        <Footer />
      </h1>
    </div>
  );
}

export default App;

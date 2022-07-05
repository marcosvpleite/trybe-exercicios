import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Content />
        <Footer />
      </header>
    </div>
  );
}

export default App;

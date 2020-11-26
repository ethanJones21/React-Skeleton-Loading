import './App.css';
import Header from './components/Header';
import Posts from './components/Posts';
import User from './components/User';

function App() {
  return (
    <div className="app">
      <Header/>

      <div className="appContainer">
        <Posts/>
        <User/>
      </div>
    </div>
  );
}

export default App;

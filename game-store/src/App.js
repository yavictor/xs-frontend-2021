import './App.css';
import Head from './components/head/Head';
// import HomeScreen from './pages/home/Home';
import AuthScreen from './pages/auth/Auth';

function App() {
  return (
    <div className="App">
      <Head/>
      <AuthScreen/>
    </div>
  );
}

export default App;

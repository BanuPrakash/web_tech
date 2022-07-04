import './App.css';
import CustomerList from './components/CustomerList';
import CustomHookComponent from './components/CustomHookComponent';

function App() {
  return (
    <div className="App">
      <h1> Customer Application </h1>
      <CustomerList />
      <CustomHookComponent />
    </div>
  );
}

export default App;

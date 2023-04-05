
import './App.css';
import Productlist from './Productlist';

function App() {

  return (
    <div className="App">
      <Productlist products={[{no:"1",name:"Munch", price:"5"},{no:"2",name:"Kitkat", price:"20"},{no:"3",name:"Coffee bites", price:"1"}]}/>
    </div>
  );
}

export default App;

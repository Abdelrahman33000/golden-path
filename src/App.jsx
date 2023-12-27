import "./App.css";
import { Header } from "./components";
import Home from "./Pages/Home";
function App() {
  return (
    <div className="App" id="up">
      <Header />
      <Home />
     <a href="#up" style={{opacity:true?"0" : "1"}}>
       <button className="scroll2Top p-1  "> up </button>
     </a>
    </div>
  );
}

export default App;

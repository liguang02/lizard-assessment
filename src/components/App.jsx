// main component of the project, where all the other components are rendered
import Navbar from "./Navbar";
import Home from "./Home";
function App() {
 
  return (
    <div className="content">
      <h1>Lizard Assessment</h1>
        <Navbar />
        <Home />
    </div>)
    
}

export default App;

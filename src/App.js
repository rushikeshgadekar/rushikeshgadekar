import "./App.css";
import Sidebar from "./components/Sidebar";
import Section from "./components/Section";
function App() {
  return (
    <div className="App">
      <div className="header">
        <h1 className="name">Rushikesh Gadekar</h1>
        <h3 className="bio">Computer Science Engineer</h3>
      </div>
      <div className="content">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <Section />
        </div>
      </div>
    </div>
  );
}

export default App;

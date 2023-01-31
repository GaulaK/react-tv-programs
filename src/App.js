import "./App.css";
import programs from "./assets/data/programs.json";
import Header from "./components/Header";
import Show from "./components/Show";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="container">
          {programs.map((show, index) => {
            return <Show key={index} data={show} />;
          })}
        </div>
      </main>
    </div>
  );
}

export default App;

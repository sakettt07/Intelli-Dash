import MainComponent from "./components/MainComponent";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="flex flex-row">
        <Navbar />
        <MainComponent />
      </div>
    </>
  );
}

export default App;

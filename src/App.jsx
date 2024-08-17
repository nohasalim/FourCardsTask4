import "./App.css";
import CardComponent from "./components/CardComponent/CardComponent";
function App() {
  return (
    <main>
      <div id="div1">
        <h1>
          Reliable,efficient delivery<br></br>
          <strong>Powered by Technology</strong>
        </h1>
        <p>
          Our Artificial intelligance Powered Tools use millions of project data
          points to ensure that your project is successful
        </p>
        <div id="div2">
        <CardComponent></CardComponent>
      </div>
      </div>
      
    </main>
  );
}

export default App;

import "./App.css";

import { Counter } from "./features/counter/Counter";

function App() {
  return (
    <>
      <h1>Frontend Assignment</h1>
      <div className="card">
        <p>count is {"0"}</p>
        <Counter />
      </div>
    </>
  );
}

export default App;

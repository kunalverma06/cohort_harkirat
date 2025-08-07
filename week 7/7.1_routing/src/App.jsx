import { Suspense, useState } from "react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componentss/Navbar.jsx";
import Contextcount from "./componentss/Context_implment.jsx";

// Lazy load Dashboard and Home components
const Dashboard = React.lazy(() => import("./componentss/Dashboard"));
const Home = React.lazy(() => import("./componentss/Home"));

function App() {
  const [count, setCount] = useState(0); // State to manage count

  return (
    <div>
      {/* Pass state (count) and its setter (setCount) as props and we will use Count to drill props down further with button which is not good way*/}
      <Count count={count} setCount={setCount} />

      {/* Context API example - Provides `count` and `setCount` to the entire component tree */}
      <Contextcount />

      {/* Note: BrowserRouter is required for routing. useNavigate works only within its scope */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Lazy loading with React.Suspense for dynamic imports */}
          <Route
            path="/Home"
            element={
              <Suspense fallback={"loading..."}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/Dashboard"
            element={
              <Suspense fallback={"loading..."}>
                <Dashboard />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// Component to manage count-related functionality
export function Count({ count, setCount }) {
  return (
    <div>
      {/* Pass count and setCount further down to the Button component  */}
      {/* <Button count={count} setCount={setCount} /> */}
    </div>
  );
}

// Button component handles the actual count increment and decrement
function Button({ count, setCount }) {
  return (
    <div>
      {/* Button to increase the count */}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <br />
      {/* Button to decrease the count */}
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
      {/* Display the current count */}
      <div>{count}</div>
    </div>
  );
}

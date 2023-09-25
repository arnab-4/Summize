import Hero from "./components/Hero";
import Demo from "./components/Demo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Hero />
        <Demo />
        {/* Add this */}
      </div>
    </main>
  );
};

export default App;

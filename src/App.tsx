import { Sidebar } from "./components/sidebar";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer";

import { Navbar } from "./components/Navbar";

import "./styles/components/app.sass";

function App() {
  return (
    <div className="App-main">
      <Navbar />
      <div className="App">
        <Sidebar />
        <MainContent />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

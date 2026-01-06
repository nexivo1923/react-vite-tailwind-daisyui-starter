import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      {/* Header */}
      <Header />
      
      {/* Ana İçerik - Sidebar ve Content */}
      <div className="flex">
        {/* Sidebar - Mobilde gizlenebilir */}
        {sidebarOpen && (
          <div className="hidden lg:block">
            <Sidebar />
          </div>
        )}
        
        {/* Sidebar Toggle Butonu (Mobil) */}
        <button 
          className="lg:hidden fixed bottom-4 left-4 z-50 btn btn-circle btn-primary shadow-lg"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "✕" : "☰"}
        </button>
        
        {/* Mobil Sidebar Overlay */}
        {sidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-40">
            <div 
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={() => setSidebarOpen(false)}
            ></div>
            <div className="absolute left-0 top-0 h-full w-64">
              <Sidebar />
            </div>
          </div>
        )}
        
        {/* Ana İçerik */}
        <Content />
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
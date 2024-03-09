import './App.css';
import Dashboard from './pages/dashboard';
import Sidebar from './components/nav/sidebar';

function App() {
  return (
    <div className="flex bg-bodyBg h-screen">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;

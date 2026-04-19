import Dashboard from "./pages/Dashboard";
import OpsProvider from "./context/OpsProvider";

function App() {
  return (
    <OpsProvider>
      <Dashboard />
    </OpsProvider>
  );
}

export default App;
import {GLobalStyle} from "./assets/styles/global";
import {Header} from "./components/Header";
import {Dashboard} from "./components/Dashboard";

export function App() {
  return (
    <>
        <Header />
        <Dashboard />
        <GLobalStyle />
    </>
  );
}

export default App;

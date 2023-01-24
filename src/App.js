import {} from "antd";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppFooter from "./layout/footer";
import AppHeader from "./layout/header";
import PageContent from "./layout/content";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppHeader />
        <PageContent />
        <AppFooter />
      </BrowserRouter>
    </div>
  );
}
export default App;

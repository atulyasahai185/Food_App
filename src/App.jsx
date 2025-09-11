import "./index.css";
import Header from "./Components/Header";
// import Body from "./Components/Body";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Components/Pages/Store";

const App = () => {
  return (
    <Provider store={Store}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

export default App;

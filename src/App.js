import { Provider } from "react-redux";
import "./App.css";
import { Home } from "./pages";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="h-full w-full">
        <Home />
      </div>
    </Provider>
  );
}

export default App;

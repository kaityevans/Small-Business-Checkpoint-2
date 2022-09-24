import "./App.css";
import Header from "./Components/Header";
import Router from "./routes";
// import Home from "./index"
import { BrowserRouter } from "react-router-dom";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isToggled, setIsToggled] = useState(false);

  // useEffect(() => {
  //   console.log(isToggled);
  // }, [isToggled]);

  return (
    <BrowserRouter>
      <Header />
      <Router />
      {/* <Map /> */}
    </BrowserRouter>
    // <div className="App">
    // </div>
  );
}

export default App;

import LoadingOverlay from "./components/LoadingOverlay";
import NavLinks from "./components/NavLinks";
import RoutesComponent from "./routes/RoutesComponent";
import GlobalLoading from "./customHook/GlobalLoading";
import { useSelector } from "react-redux";

function App() {
  const isLoading = GlobalLoading();
  const { isDarkMode } = useSelector((state) => state.theme);

  return (
    <div className={isDarkMode ? "darkTheme" : "lightTheme"}>
      <div className="app">
        {isLoading && <LoadingOverlay />}
        <NavLinks />
        <RoutesComponent />
      </div>
    </div>
  );
}

export default App;

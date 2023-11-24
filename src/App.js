import LoadingOverlay from "./components/LoadingOverlay";
import NavLinks from "./components/NavLinks";
import RoutesComponent from "./routes/RoutesComponent";
import GlobalLoading from "./customHook/GlobalLoading";

function App() {
  const isLoading = GlobalLoading();

  return (
      <div className="app">
        {isLoading && <LoadingOverlay />}
        <NavLinks />
        <RoutesComponent />
      </div>
  );
}

export default App;

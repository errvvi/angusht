import { Navbar } from "../widgets";
import AppRouter from "./provider/AppRouter/ui/AppRouter";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="app app_normal">
          <div className="container">
            <AppRouter />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

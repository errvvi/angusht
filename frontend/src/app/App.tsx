import { Icon } from "@/shared/ui";
import { Navbar, Sponsors } from "../widgets";
import AppRouter from "./Provider/AppRouter/ui/AppRouter";

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
      <Sponsors />
    </>
  );
};

export default App;

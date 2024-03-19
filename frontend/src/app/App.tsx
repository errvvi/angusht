import { Icon } from "@/shared/ui";
import { Navbar } from "../widgets";
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
      <Icon className="w-screen " type="LeonBets" />
    </>
  );
};

export default App;

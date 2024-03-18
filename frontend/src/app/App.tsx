import { Text } from "@/shared/ui/Text/Text";
import { Navbar } from "../widgets";
import AppRouter from "./Provider/AppRouter/ui/AppRouter";
import { NavBottom } from "@/widgets/Navbar/ui/NavBottom/NavBottom";

const App = () => {
  return (
    <div className="container">
      <div className="app app_normal">
        <div className="container">
          <Navbar />
          <AppRouter />
        </div>
      </div>
    </div>
  );
};

export default App;

import { Navbar, Sponsors } from "../widgets";
import AppRouter from "./Provider/AppRouter/ui/AppRouter";
import { Footer } from "@/widgets/Footer/ui/Footer";

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
      <Footer />
    </>
  );
};

export default App;

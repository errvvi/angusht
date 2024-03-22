import { Navbar, Sponsors } from "../widgets";
import AppRouter from "./Provider/AppRouter/ui/AppRouter";
import { Footer } from "@/widgets/Footer/ui/Footer";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container">
          <div className="app app_normal">
            <div className="container">
              <AppRouter />
            </div>
          </div>
        </div>
        <Sponsors />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;

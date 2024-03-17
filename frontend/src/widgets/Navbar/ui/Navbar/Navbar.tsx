import { Logo } from "../../../../shared/ui/Logo/Logo";
import cls from "./Navbar.module.scss";
export const Navbar = () => {
  return (
    <div className="container">
      <div className={cls.navbar}>
        <div className={cls.wrap}>
          <Logo /> Text Links{" "}
        </div>
      </div>
    </div>
  );
};

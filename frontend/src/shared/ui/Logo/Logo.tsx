import cls from "./Logo.module.scss";
import LogoPng from "../../assets/Logo.png";
export const Logo = () => {
  return (
    <div className={cls.logoDiv}>
      <img className={cls.logo} src={LogoPng} alt="Logo"></img>
    </div>
  );
};

import { Icon } from "@/shared/ui/Icon/Icon";

export const Sponsors = () => {
  return (
    <div className="flex flex-col justify-center gap-16 mt-20">
      <span className="text-center font-black text-white text-3xl">
        ПАРТНЕРЫ LEON-ВТОРАЯ ЛИГА Б
      </span>
      <div className="w-4/5 mx-auto flex flex-col gap-3 ">
        <div className="max-w-full flex items-center justify-evenly">
          <div className="max-w-16">
            <a href="https://2b.2fnl.com/" target="_blank">
              <Icon
                className="min-w-6 mx-auto max-w-full h-auto"
                type="TwoLiga"
              />
            </a>
          </div>
          <div className="max-w-56">
            <a
              href="https://www.sportmaster.ru/catalog/vidy_sporta_/futbol/?icid=menu%7Crightbanner%7Cteamsport"
              target="_blank"
            >
              <Icon
                className="min-w-20 ml-20 mx-auto max-w-full h-auto"
                type="SportMaster"
              />
            </a>
          </div>
          <div className="max-w-24">
            <a href="https://2b.2fnl.com/" target="_blank">
              <Icon className="min-w-10 mx-auto max-w-full h-auto" type="Fnl" />
            </a>
          </div>
        </div>
        <div className="max-w-full flex  items-center justify-evenly">
          <div className="max-w-56">
            <a href="https://sisrus.ru/" target="_blank">
              <Icon
                className="min-w-20 mx-auto max-w-full h-auto"
                type="Sisrus"
              />
            </a>
          </div>
          <div className="max-w-60">
            <a href="https://www.sports.ru/" target="_blank">
              <Icon
                className="min-w-9 mx-auto max-w-full h-auto"
                type="Sports"
              />
            </a>
          </div>
          <div className="max-w-40">
            <a href="https://leon.ru/" target="_blank">
              <Icon
                className="min-w-12 mx-auto max-w-full h-auto"
                type="Leon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

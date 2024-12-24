import { Icon } from "@/shared/ui/Icon/Icon";

export const Sponsors = () => {
  return (
    <div className="flex flex-col justify-center gap-16 mt-20">
      <span className="text-center font-black text-white text-3xl">
        ПАРТНЕРЫ LEON-ВТОРАЯ ЛИГА Б
      </span>
      <div className="w-11/12 mx-auto justify-center flex flex-row gap-10 ">
        <div className="max-w-40">
          <a href="https://leon.ru/" target="_blank">
            <Icon className="min-w-12 mx-auto max-w-full h-auto" type="Leon" />
          </a>
        </div>
        <div className="max-w-48 mt-4 ">
          <a href="https://bookmaker-ratings.ru/" target="_blank">
            <Icon className="min-w-32 mx-auto max-w-full h-auto" type="Rat" />
          </a>
        </div>

        <div className="max-w-48 mt-4 ">
          <a href="https://metaratings.ru/" target="_blank">
            <Icon
              className="min-w-48 mx-auto max-w-full h-auto"
              type="Metarate"
            />
          </a>
        </div>

        <div className="max-w-56">
          <a href="https://betonmobile.ru/" rel="dofollow" target="_blank">
            <Icon
              className="min-w-36 mx-auto max-w-16 w-full h-auto"
              type="Beton"
            />
          </a>
        </div>

        <div className="max-w-56">
          <a href="https://www.football-mania.ru/tag/kelme/" target="_blank">
            <Icon
              className="min-w-20 mx-auto max-w-12 w-full h-auto"
              type="Kelme"
            />
          </a>
        </div>

        <div className="max-w-56">
          <a href="https://www.football-mania.ru/" target="_blank">
            <Icon
              className="min-w-20 mx-auto max-w-16 w-full h-auto"
              type="FootballMania"
            />
          </a>
        </div>

        <div className="max-w-56">
          <a href="https://www.sports.ru/" target="_blank">
            <Icon
              className="min-w-36 mx-auto max-w-16 mt-3 w-full h-auto"
              type="Sports"
            />
          </a>
        </div>

        <div className="max-w-56">
          <a href="https://2b.2fnl.com/" target="_blank">
            <Icon
              className="min-w-36 mt-5 mx-auto max-w-32 w-full h-auto"
              type="Fnl2"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

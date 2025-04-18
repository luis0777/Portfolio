import { Hourglass, MoveRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Meteors from "./meteors";

export function Formacao() {
  const t = useTranslations("Formacao");
  return (
    <section id="formacao" className="px-8 mt-24 lg:h-[80vh] scroll-mt-32">
      <Meteors />
      <div className="flex justify-center mb-5">
        <h1 className="text-4xl font-bold text-cyan-400 drop-shadow-[0_0_0.3rem_#00B4D8]">
          {t("formacao")}
        </h1>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="relative border-l-4 border-cyan-400  border-solid pl-6 py-4">
          <div className="group mb-8 ml-6 border-2 border-cyan-400 rounded-4xl p-4  shadow-[0_0_35px_rgba(34,211,238,0.5)] hover:scale-110 duration-300">
            <div className="absolute -left-0 w-6 h-6  group-hover:hidden  ">
              <MoveRight className="text-cyan-400 drop-shadow-[0_0_0.5rem_#00B4D8] " />
            </div>
            <h3 className="text-xl font-semibold text-cyan-400">2024</h3>
            <p className="text-gray-600">UNIP</p>
            <span className="text-sm text-gray-400">
              {t("ads")}
            </span>
          </div>

          <div className="mb-7 ml-6">
            <div className="absolute -left-0 w-6 h-6    ">
              <Hourglass className="text-cyan-400 drop-shadow-[0_0_0.5rem_#00B4D8]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

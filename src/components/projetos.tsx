"use client";

import { ProjetoJava } from "./projetoJava";
import { ProjetoCsharp } from "./projetoCsharp";
import { ProjetoC } from "./projetoC";
import { ProjetoReact } from "./projetoReact";
import { ProjetoHtmlCss } from "./projetoHtmlCss";
import { useTranslations } from "next-intl";

export function Projetos() {
  const t = useTranslations("Projetos");
  return (
    <section id="projetos" className="px-8 mt-24 scroll-mt-32 pb-32 ">
      <div className="flex flex-col items-center mb-5 ">
        <h1 className="text-4xl font-bold text-cyan-400 drop-shadow-[0_0_0.3rem_#00B4D8]">
          {t("projetos")}
        </h1>
        <p className="text-white">
          {t("description")}
        </p>
      </div>

      <div className="max-w-[1500px]  mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        <ProjetoJava />

        <ProjetoCsharp />

        <ProjetoC />

        <ProjetoReact />

        <ProjetoHtmlCss />
      </div>
    </section>
  );
}

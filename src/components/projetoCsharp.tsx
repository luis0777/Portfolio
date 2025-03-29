import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useTranslations } from "next-intl";
import Meteors from "./meteors";

export function ProjetoCsharp() {
  const t = useTranslations("ProjetosCsharp");
  return (
    <Dialog>
      <DialogTrigger className="p-8  cursor-pointer w-full max-w-[300px] border-2 rounded-3xl border-gray-500 hover:border-cyan-400 hover:shadow-[0_0_60px_rgba(34,211,238,0.8)] duration-200 hover:scale-90">
        <div className="flex justify-center">
          <Image src="/csharp.png" alt="java" width={130} height={300} />
        </div>
        <span className="flex justify-center text-white text-2xl font-bold">
          {t("title")}
        </span>
      </DialogTrigger>
      <DialogContent className="bg-[#080808] w-[340px] md:w-[600px] border-gray-500">
        <Meteors />
        <DialogHeader>
          <DialogTitle className="text-white flex justify-center">
            {t("title")}
          </DialogTitle>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className=" hover:text-cyan-400">
                {t("fazendaUrbanaPoc.title")}
              </AccordionTrigger>
              <AccordionContent className="">
                <span className="font-bold text-lg text-cyan-400 ">
                  {t("objetivo")}
                </span>
                <p className="text-justify">
                  {t("fazendaUrbanaPoc.description")}
                </p>
                <a
                  href="https://github.com/luis0777/FAZENDA-URBANA"
                  target="_blank"
                  className="w-full flex justify-center"
                >
                  <Button className="mt-5 hover:scale-105 cursor-pointer border-cyan-400 border-2  shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.8)]">
                    <Github /> {t("button")}
                  </Button>
                </a>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className=" hover:text-cyan-400">
                {t("apiLivros.title")}
              </AccordionTrigger>
              <AccordionContent>
                <span className="font-bold text-lg text-cyan-400 ">
                  {t("objetivo")}
                </span>
                <p className="text-justify">{t("apiLivros.description")}</p>
                <a
                  href="https://github.com/luis0777/Projeto-API"
                  target="_blank"
                  className="w-full flex justify-center"
                >
                  <Button className="mt-5 hover:scale-105 cursor-pointer border-cyan-400 border-2  shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.8)]">
                    <Github /> {t("button")}
                  </Button>
                </a>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className=" hover:text-cyan-400">
                {t("apiFazendaUrbana.title")}
              </AccordionTrigger>
              <AccordionContent>
                <span className="font-bold text-lg text-cyan-400 ">
                  {t("objetivo")}
                </span>
                <p className="text-justify">
                  {t("apiFazendaUrbana.description")}
                </p>
                <a
                  href="https://github.com/luis0777/APIFazendaUrbana"
                  target="_blank"
                  className="w-full flex justify-center"
                >
                  <Button className="mt-5 hover:scale-105 cursor-pointer border-cyan-400 border-2  shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.8)]">
                    <Github /> {t("button")}
                  </Button>
                </a>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className=" hover:text-cyan-400 uppercase">
                {t("fazendaUrbanaWindows.title")}
              </AccordionTrigger>
              <AccordionContent>
                <span className="font-bold text-lg text-cyan-400 ">
                  {t("objetivo")}
                </span>
                <p className="text-justify">
                  {t("fazendaUrbanaWindows.description")}
                </p>
                <a
                  href="https://github.com/luis0777/FazendaUrbanaWindowsForms"
                  target="_blank"
                  className="w-full flex justify-center"
                >
                  <Button className="mt-5 hover:scale-105 cursor-pointer border-cyan-400 border-2  shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.8)]">
                    <Github /> {t("button")}
                  </Button>
                </a>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

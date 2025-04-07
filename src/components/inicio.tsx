"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Github, Instagram, Linkedin, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import FlagIcons from "@/assets/country-flag-icons";
import Meteors from "./meteors";

export function Inicio() {
  const [selectedValue, setSelectedValue] = React.useState("pt");
  const router = useRouter();
  const t = useTranslations("Inicio");

  const handleLanguageChange = (newLocale: string) => {
    setSelectedValue(newLocale);
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;
    router.refresh();
  };

  return (
    <div className="flex flex-col ">
      <Meteors />
      <header className="text-white flex justify-between p-4  lg:p-8 fixed top-0 left-0 right-0  bg-[#080808] z-10">
        <Meteors />
        <div className="flex items-center">
          <a
            href="#"
            className="text-2xl font-bold tracking-wide hover:scale-120 duration-100"
          >
            Luís
            <span className="text-cyan-400 drop-shadow-[0_0_0.3rem_#00B4D8] hover:drop-shadow-[0_0_0.5rem_#00B4D8]">
              Felipe
            </span>
          </a>

          <Select value={selectedValue} onValueChange={handleLanguageChange}>
            <SelectTrigger
              className="w-[130px] lg:w-[140px] border-transparent "
              style={{ color: "white" }}
            >
              <SelectValue placeholder="Selecione um idioma" />
            </SelectTrigger>
            <SelectContent className="bg-[#080808] border-cyan-400 m-0 p-0">
              <SelectGroup>
                <SelectItem value="pt" className="flex items-center">
                  <FlagIcons.Brasil
                    className=" inline-block flex-shrink-0"
                    width={20}
                    height={20}
                  />
                  PT-BR
                </SelectItem>

                <SelectItem value="en" className="flex items-center">
                  <FlagIcons.EUA
                    className=" inline-block flex-shrink-0"
                    width={20}
                    height={20}
                  />
                  EN-EUA
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <nav className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu className="text-cyan-400" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border-transparent bg-[#121212]">
              <DropdownMenuSeparator />
              <DropdownMenuItem className="hover:border-b-2 text-white hover:text-cyan-400">
                {t("sobre")}
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:border-b-2 text-white hover:text-cyan-400">
                <a href="#formacao" className="text-white hover:text-cyan-400">
                  {t("formacao")}
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:border-b-2 text-white hover:text-cyan-400">
                <a href="#projetos" className="text-white hover:text-cyan-400">
                  {t("projetos")}
                </a>
              </DropdownMenuItem>
              {/* <DropdownMenuItem className="hover:border-b-2 text-white hover:text-cyan-400">
                Subscription
              </DropdownMenuItem> */}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <nav className="md:flex gap-8 hidden font-bold">
          <a
            href="#"
            className="hover:scale-120  hover:text-cyan-400 hover:border-b-4 duration-100   hover:drop-shadow-[0_0_0.3rem_#00B4D8]"
          >
            {t("sobre")}
          </a>
          <a
            href="#formacao"
            className="hover:scale-120  hover:text-cyan-400 hover:border-b-4 duration-100  hover:drop-shadow-[0_0_0.3rem_#00B4D8]"
          >
            {t("formacao")}
          </a>
          <a
            href="#projetos"
            className="hover:scale-120  hover:text-cyan-400 hover:border-b-4  duration-100 hover:drop-shadow-[0_0_0.3rem_#00B4D8]"
          >
            {t("projetos")}
          </a>
          {/* <a
            href="#"
            className="hover:text-cyan-400 hover:border-b-4 duration-100  hover:drop-shadow-[0_0_0.3rem_#00B4D8]"
          >
            Contato
          </a> */}
        </nav>
      </header>

      <section className="mt-16 px-8  flex flex-col-reverse lg:flex-row w-full  lg:h-[90vh]">
        <div className="flex lg:w-[50%] items-center justify-center  ">
          <div className="text-white gap-4 flex flex-col text-justify">
            <h1 className="text-2xl lg:text-5xl font-bold">
              {t("greeting")}
              <span className="text-cyan-400 drop-shadow-[0_0_0.5rem_#00B4D8] ml-2">
                {t("name")}
              </span>
            </h1>
            <h2 className="md:text-2xl font-bold">
              {t("iAm")}
              <span className="text-cyan-400 drop-shadow-[0_0_0.5rem_#00B4D8] ml-2">
                {t("role")}
              </span>
            </h2>

            <p>{t("description1")}</p>
            <p>{t("description2")}</p>

            <p>{t("description3")}</p>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/luis-felipe-da-silva-amorim/"
                target="_blank"
              >
                <Button className="hover:scale-150 cursor-pointer border-cyan-400 border-2  shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.8)]">
                  <Linkedin />
                </Button>
              </a>
              <a href="https://github.com/luis0777" target="_blank">
                <Button className="hover:scale-150 cursor-pointer border-cyan-400 border-2  shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.8)]">
                  <Github />
                </Button>
              </a>
              <a
                href="https://www.instagram.com/luisfelipe__7/"
                target="_blank"
              >
                <Button className="hover:scale-150 cursor-pointer border-cyan-400 border-2  shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.8)]">
                  <Instagram />
                </Button>
              </a>
            </div>

            <a
              href="https://drive.google.com/uc?export=download&id=1pMjzySmAFhUoGqiWJuLiJlqKacrqVupI"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="hover:scale-120 bg-cyan-400 text-black shadow-cyan-400 border-cyan-400 border-2 cursor-pointer hover:bg-transparent font-bold hover:text-cyan-400  shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.8)]">
                {t("downloadCV")}
              </Button>
            </a>
          </div>
        </div>
        <div className=" lg:w-[50%]  items-center justify-center  flex mb-8 mt-8 lg:mb-0 lg:mt-0">
          <Image
            src="/fotoGhibi.png"
            alt="Profile"
            width={400}
            height={400}
            className="w-[250px] lg:w-[400px] rounded-full hover:scale-120 duration-150 border-2 border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.8)] hover:shadow-[0_0_90px_rgba(34,211,238,0.8)]"
          />
        </div>
      </section>
    </div>
  );
}

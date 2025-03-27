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

export function Inicio() {
  return (
    <div className="flex flex-col ">
      <header className="text-white flex justify-between p-4 md:p-8 fixed top-0 left-0 right-0  bg-[#080808] z-10">
        <a href="#" className="text-2xl font-bold tracking-wide">
          Luís
          <span className="text-cyan-400 drop-shadow-[0_0_0.3rem_#00B4D8]">
            Felipe
          </span>
        </a>

        <nav className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu className="text-cyan-400" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border-transparent bg-[#121212]">
              <DropdownMenuSeparator />
              <DropdownMenuItem className="hover:border-b-2 text-white hover:text-cyan-400">
                Sobre
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:border-b-2 text-white hover:text-cyan-400">
                <a href="#formacao" className="text-white hover:text-cyan-400">
                  Formação
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:border-b-2 text-white hover:text-cyan-400">
                <a href="#projetos" className="text-white hover:text-cyan-400">
                  Projetos
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:border-b-2 text-white hover:text-cyan-400">
                Subscription
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <nav className="md:flex gap-8 hidden font-bold">
          <a
            href="#"
            className="hover:text-cyan-400 hover:border-b-4 duration-100   hover:drop-shadow-[0_0_0.3rem_#00B4D8]"
          >
            Sobre
          </a>
          <a
            href="#formacao"
            className="hover:text-cyan-400 hover:border-b-4 duration-100  hover:drop-shadow-[0_0_0.3rem_#00B4D8]"
          >
            Formação
          </a>
          <a
            href="#projetos"
            className="hover:text-cyan-400 hover:border-b-4  duration-100 hover:drop-shadow-[0_0_0.3rem_#00B4D8]"
          >
            Projetos
          </a>
          <a
            href="#"
            className="hover:text-cyan-400 hover:border-b-4 duration-100  hover:drop-shadow-[0_0_0.3rem_#00B4D8]"
          >
            Contato
          </a>
        </nav>
      </header>

      <section className="mt-16 px-8  flex flex-col-reverse md:flex-row w-full  md:h-[90vh]">
        <div className="flex md:w-[50%] items-center justify-center  ">
          <div className="text-white gap-4 flex flex-col text-justify">
            <h1 className="text-4xl font-bold">
              HI, It's
              <span className="text-cyan-400 drop-shadow-[0_0_0.5rem_#00B4D8] ml-2">
                Luís Felipe
              </span>
            </h1>
            <h2 className="md:text-2xl font-bold">
              I'm a
              <span className="text-cyan-400 drop-shadow-[0_0_0.5rem_#00B4D8] ml-2">
                FULL STACK DEVELOPER
              </span>
            </h2>

            <p>
              💻 Sou um desenvolvedor apaixonado por tecnologia e inovação! Com
              21 anos, sou formado em Análise e Desenvolvimento de Sistemas pela
              UNIP e atuo como Trainee Full Stack.
            </p>
            <p>
              🚀 Minha jornada profissional é focada no desenvolvimento de
              software, explorando tanto o back-end quanto o front-end. Busco
              constantemente aprimorar minhas habilidades e aprender novas
              tecnologias para entregar soluções eficientes e de alto impacto.
            </p>

            <p>
              📈 Estou sempre em busca de desafios que me permitam crescer
              profissionalmente e contribuir para projetos inovadores.
            </p>

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
              <Button className="bg-cyan-400 text-black shadow-cyan-400 border-cyan-400 border-2 cursor-pointer hover:bg-transparent font-bold hover:text-cyan-400  shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.8)]">
                Baixar Curriculo
              </Button>
            </a>
          </div>
        </div>
        <div className=" md:w-[50%]  items-center justify-center  flex mb-8 mt-8 md:mb-0 md:mt-0">
          <Image
            src="/foto.jpg"
            alt="Profile"
            width={400}
            height={400}
            className="w-[250px] md:w-[400px] rounded-full border-2 border-cyan-400 shadow-[0_0_60px_rgba(34,211,238,0.8)] hover:shadow-[0_0_25px_rgba(34,211,238,0.8)]"
          />
        </div>
      </section>
    </div>
  );
}

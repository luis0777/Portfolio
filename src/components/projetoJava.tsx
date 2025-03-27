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

export function ProjetoJava() {
  return (
    <Dialog>
      <DialogTrigger className="p-8 cursor-pointer w-[300px] border-2 rounded-3xl border-gray-500 hover:border-cyan-400 hover:shadow-[0_0_60px_rgba(34,211,238,0.8)] duration-200 hover:scale-90">
        <div className="">
          <Image src="/java.png" alt="java" width={300} height={300} />
        </div>
        <span className="flex justify-center text-white text-2xl font-bold">
          Projetos em Java
        </span>
      </DialogTrigger>
      <DialogContent className="bg-[#080808] w-[340px] md:w-[600px] border-gray-500">
        <DialogHeader>
          <DialogTitle className="text-white flex justify-center">
            Projetos em Java
          </DialogTitle>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className=" hover:text-cyan-400">
                API GERENCIAMENTO
              </AccordionTrigger>
              <AccordionContent className="">
                <span className="font-bold text-lg text-cyan-400 ">
                  Objetivo:
                </span>
                <p className="text-justify">
                  Desenvolver uma API REST para gerenciar usuários, pedidos e
                  produtos com funcionalidades completas de CRUD e autenticação
                  segura, utilizando uma arquitetura modular e escalável.
                </p>
                <a
                  href="https://github.com/luis0777/API_Gerenciamento"
                  target="_blank"
                  className="w-full flex justify-center"
                >
                  <Button className="mt-5 hover:scale-105 cursor-pointer border-cyan-400 border-2  shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.8)]">
                    <Github /> Repositorio
                  </Button>
                </a>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className=" hover:text-cyan-400">
                API LISTA DE TAREFAS
              </AccordionTrigger>
              <AccordionContent>
                <span className="font-bold text-lg text-cyan-400 ">
                  Objetivo:
                </span>
                <p className="text-justify">
                  Desenvolver uma API REST para gerenciamento de tarefas,
                  permitindo operações completas de CRUD, busca por prioridade e
                  status de realização, com uma arquitetura modular e escalável.
                </p>
                <a
                  href="https://github.com/luis0777/API_Tarefas"
                  target="_blank"
                  className="w-full flex justify-center"
                >
                  <Button className="mt-5 hover:scale-105 cursor-pointer border-cyan-400 border-2  shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.8)]">
                    <Github /> Repositorio
                  </Button>
                </a>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className=" hover:text-cyan-400">
                API GERENCIAMENTO DE ITENS DE FARMÁCIA
              </AccordionTrigger>
              <AccordionContent>
                <span className="font-bold text-lg text-cyan-400 ">
                  Objetivo:
                </span>
                <p className="text-justify">
                  Desenvolver uma API REST para gerenciar itens de uma farmácia,
                  oferecendo funcionalidades completas de CRUD e garantindo uma
                  arquitetura organizada e escalável.
                </p>
                <a
                  href="https://github.com/luis0777/Farmacia_API"
                  target="_blank"
                  className="w-full flex justify-center"
                >
                  <Button className="mt-5 hover:scale-105 cursor-pointer border-cyan-400 border-2  shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.8)]">
                    <Github /> Repositorio
                  </Button>
                </a>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className=" hover:text-cyan-400 uppercase">
                Sistema Bancário JAVA
              </AccordionTrigger>
              <AccordionContent>
                <span className="font-bold text-lg text-cyan-400 ">
                  Objetivo:
                </span>
                <p className="text-justify">
                  O objetivo deste sistema é implementar uma solução de
                  gerenciamento de conta bancária simples, permitindo ao usuário
                  realizar operações de criação de conta, login, saque e
                  consulta de saldo.
                </p>
                <a
                  href="https://github.com/luis0777/SistemaBancario_JAVA"
                  target="_blank"
                  className="w-full flex justify-center"
                >
                  <Button className="mt-5 hover:scale-105 cursor-pointer border-cyan-400 border-2  shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.8)]">
                    <Github /> Repositorio
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

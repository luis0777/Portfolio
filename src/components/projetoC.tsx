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

export function ProjetoC() {
  return (
    <Dialog>
      <DialogTrigger className="p-8  cursor-pointer w-full max-w-[300px] border-2 rounded-3xl border-gray-500 hover:border-cyan-400 hover:shadow-[0_0_60px_rgba(34,211,238,0.8)] duration-200 hover:scale-90">
        <div className="flex justify-center">
          <Image src="/c.png" alt="java" width={130} height={300} />
        </div>
        <span className="flex justify-center text-white text-2xl font-bold">
          Projetos em C
        </span>
      </DialogTrigger>
      <DialogContent className="bg-[#080808] w-[340px] md:w-[600px] border-gray-500">
        <DialogHeader>
          <DialogTitle className="text-white flex justify-center">
            Projetos em C
          </DialogTitle>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className=" hover:text-cyan-400">
                SISTEMA DE GERENCIAMENTO DE MUSEU MULTITEMÁTICO
              </AccordionTrigger>
              <AccordionContent className="">
                <span className="font-bold text-lg text-cyan-400 ">
                  Objetivo:
                </span>
                <p className="text-justify">
                  Desenvolver um sistema de compra de ingressos para um museu
                  multitemático, destacando a vida e carreira do jogador Rei
                  Pelé.
                </p>
                <a
                  href="https://github.com/luis0777/PROJETO-GERENCIAMENTO-DE-MUSEU-MULTITEMATICO"
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

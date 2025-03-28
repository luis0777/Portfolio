"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { ProjetoJava } from "./projetoJava";
import { ProjetoCsharp } from "./projetoCsharp";

export function Projetos() {
  return (
    <section id="projetos" className="px-8 pt-24">
      <div className="flex flex-col items-center mb-5 ">
        <h1 className="text-4xl font-bold text-cyan-400 drop-shadow-[0_0_0.3rem_#00B4D8]">
          Projetos
        </h1>
        <p className="text-white">
          Escolha o card para visualizar os projetos de estudos feitos por mim
        </p>
      </div>

      <div className="max-w-[1500px] mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        
        <ProjetoJava />

        {/* <Card className="cursor-pointer w-[300px] border-gray-500 hover:border-cyan-400 hover:shadow-[0_0_60px_rgba(34,211,238,0.8)] duration-200 hover:scale-90">
          <CardHeader>
            <CardTitle>
              <div className="flex justify-center">
                <Image src="/csharp.png" alt="c#" width={150} height={150} />
              </div>
            </CardTitle>
            <CardDescription className="flex justify-center text-white text-2xl font-bold">
              Projetos em C#
            </CardDescription>
          </CardHeader>
        </Card> */}

        <ProjetoCsharp />

        <Card className="cursor-pointer w-full max-w-[300px] border-gray-500 hover:border-cyan-400 hover:shadow-[0_0_60px_rgba(34,211,238,0.8)] duration-200 hover:scale-90">
          <CardHeader>
            <CardTitle>
              <div className="flex justify-center">
                <Image src="/c.png" alt="c" width={150} height={150} />
              </div>
            </CardTitle>
            <CardDescription className="flex justify-center text-white text-2xl font-bold">
              Projetos em C
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="cursor-pointer w-[300px] border-gray-500 hover:border-cyan-400 hover:shadow-[0_0_60px_rgba(34,211,238,0.8)] duration-200 hover:scale-90">
          <CardHeader>
            <CardTitle>
              <div className="flex justify-center">
                <Image src="/react.png" alt="react" width={150} height={150} />
              </div>
            </CardTitle>
            <CardDescription className="flex justify-center text-white text-2xl font-bold">
              Projetos em React
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
        <div className="">
          {/* <Image src="/java.png" alt="java" width={300} height={300} /> */}
        </div>
        <div className="">
          {/* <Image src="/angular.png" alt="angular" width={150} height={150} /> */}
        </div>
        <div className="">
          {/* <Image src="/css.png" alt="css" width={150} height={150} /> */}
        </div>
        <div className="">
          {/* <Image src="/html.png" alt="html" width={150} height={150} /> */}
        </div>
        <div className="">
          {/* <Image src="/react.png" alt="react" width={150} height={150} /> */}
        </div>
        <div className="">
          {/* <Image src="/sqlserver.png" alt="sql" width={150} height={150} /> */}
        </div>
        <div className="">
          {/* <Image src="/git.png" alt="git" width={150} height={150} /> */}
        </div>
        <div className="">
          {/* <Image src="/github.jpg" alt="github" width={150} height={150} /> */}
        </div>
      </div>
    </section>
  );
}

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <header className="text-white flex justify-between p-8 fixed top-0 left-0 right-0  bg-[#121212] z-10">
        <a href="#" className="text-2xl font-bold tracking-wide">
          Luís <span className="text-cyan-400 shadow-cyan-500/50">Felipe</span>
        </a>

        <nav className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu className="text-cyan-400" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sobre</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <nav className="md:flex gap-8 hidden font-bold">
          <a href="#" className="hover:text-cyan-400 hover:border-b-4">
            Sobre
          </a>
          <a href="#" className="hover:text-cyan-400 hover:border-b-4">
            Projetos
          </a>
          <a href="#" className="hover:text-cyan-400 hover:border-b-4">
            Skills
          </a>
          <a href="#" className="hover:text-cyan-400 hover:border-b-4">
            Contato
          </a>
        </nav>
      </header>

      <section className="mt-24 px-8">
        <h1>
          Olá, eu sou <span>Luís</span>
        </h1>
        <p>
          💻 Sou um desenvolvedor apaixonado por tecnologia e inovação! Com 21
          anos, sou formado em Análise e Desenvolvimento de Sistemas pela UNIP e
          atuo como Trainee Full Stack.
        </p>
        <p>
          🚀 Minha jornada profissional é focada no desenvolvimento de software,
          explorando tanto o back-end quanto o front-end. Busco constantemente
          aprimorar minhas habilidades e aprender novas tecnologias para
          entregar soluções eficientes e de alto impacto.
        </p>

        <p>
          📈 Estou sempre em busca de desafios que me permitam crescer
          profissionalmente e contribuir para projetos inovadores.
        </p>

        <div>
          
        </div>
      </section>
    </div>
  );
}

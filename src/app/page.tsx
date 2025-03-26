import {Inicio} from "@/components/inicio";
import {Formacao} from "@/components/formacao";
import {Skills} from "@/components/skills";

export default function Home() {
  return (
    <main className="space-y-32 md:space-y-10">
      <Inicio />
      <Formacao />
      <Skills />
    </main>
  );
}

import {Inicio} from "@/components/inicio";
import {Formacao} from "@/components/formacao";
import {Skills} from "@/components/skills";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="space-y-32 md:space-y-10">
      <Inicio />
      <Formacao />
      <Skills />
      <Footer />
    </main>
  );
}

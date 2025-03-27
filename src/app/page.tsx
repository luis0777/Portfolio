import {Inicio} from "@/components/inicio";
import {Formacao} from "@/components/formacao";
import {Projetos} from "@/components/projetos";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="space-y-32 md:space-y-10">
      <Inicio />
      <Formacao />
      <Projetos />
      <Footer />
    </main>
  );
}

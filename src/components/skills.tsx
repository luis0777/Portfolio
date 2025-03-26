import Image from "next/image";

export function Skills() {
  return (
    <section id="skills" className="px-8">
      <div className="flex justify-center mb-5">
        <h1 className="text-4xl font-bold text-cyan-400 drop-shadow-[0_0_0.3rem_#00B4D8]">
          Skills
        </h1>
      </div>

      <div className="max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
        <div className="">
          <Image src="/java.png" alt="java" width={300} height={300} />
        </div>
        <div className="">
          <Image src="/angular.png" alt="angular" width={150} height={150} />
        </div>
        <div className="">
          <Image src="/css.png" alt="css" width={150} height={150} />
        </div>
        <div className="">
          <Image src="/html.png" alt="html" width={150} height={150} />
        </div>
        <div className="">
          <Image src="/react.png" alt="react" width={150} height={150} />
        </div>
        <div className="">
          <Image src="/sqlserver.png" alt="sql" width={150} height={150} />
        </div>
        <div className="">
          <Image src="/git.png" alt="git" width={150} height={150} />
        </div>
        <div className="">
          <Image src="/github.png" alt="github" width={150} height={150} />
        </div>
      </div>
    </section>
  );
}

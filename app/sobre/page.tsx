import NavBar from "../components/NavBar";

export default function Sobre() {
  return (
    <div>
      <NavBar />
      <main className="p-6 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Quem sou eu</h1>
        <div>
          <img src="https://i.pravatar.cc/300" alt="" className="rounded-full"/>
        </div>
        <p className="text-center text-gray-700 mt-4 max-w-md">
          Sou um desenvolvedor full-stack com experiência em React, Node.js e tecnologias relacionadas. Gosto de criar aplicações web modernas e eficientes.
        </p>
      </main>
    </div>
  );
}
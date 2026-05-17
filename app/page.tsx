import NavBar from "./components/NavBar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div>
        <img src="https://picsum.photos/1000/400" alt="" className="mx-auto mt-6"/>
        <h1 className="text-3xl font-bold text-center mt-4">Bem-vindo ao meu site!</h1>
        <p className="text-center text-gray-700 mt-2 max-w-md mx-auto">
          Este é um exemplo de página inicial usando Next.js e Tailwind CSS. Explore as outras páginas para ver mais funcionalidades!
        </p>

        <div className="flex justify-center mt-8">
          <Link
            href="/atividade7"
            className="
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              hover:from-blue-700
              hover:to-cyan-600
              text-white
              px-6
              py-3
              rounded-2xl
              font-semibold
              shadow-lg
              transition-all
              duration-300
            "
          >
            Atividade 7
          </Link>
        </div>


      </div>
    </div>
  );
}

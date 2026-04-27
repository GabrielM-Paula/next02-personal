import NavBar from "./components/NavBar";

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
      </div>
    </div>
  );
}

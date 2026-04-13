import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
        <div className="flex flex-col items-center justify-center text-center p-10">
          <img 
            src="https://picsum.photos/400/300" alt="" className="rounded-xl shadow-lg mb-6" />
          <h1 className="text-2xl font-bold">Bem-vindo ao projeto! Página Home</h1>
        </div>
    </div>
  );
}

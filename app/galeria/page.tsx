import NavBar from "../components/NavBar";

export default function Galeria() {
  return (
    <div>
      <NavBar />
      <main className="flex justify-contetn 
      align-items place-items-center flex-col p-10">
        <h1>Galeria de Imagens</h1>
        <div className=" flex flex-col 
        justify-content align-items 
        grid grid-cols-4 gap-10 p-4">
          <img
            src="https://picsum.photos/200/300"
            alt="Imagem 1" 
            className="w-60 hover:scale-105 transition-transform duration-1000"/>
            <img
            src="https://picsum.photos/200/300"
            alt="Imagem 1" className="w-60 hover:scale-105 transition-transform duration-1000"/>
            <img
            src="https://picsum.photos/200/300"
            alt="Imagem 1" className="w-60 hover:scale-105 transition-transform duration-1000"/>
            <img
            src="https://picsum.photos/200/300"
            alt="Imagem 1" className="w-60 hover:scale-105 transition-transform duration-1000"/>
            <img
            src="https://picsum.photos/200/300"
            alt="Imagem 1" className="w-60 hover:scale-105 transition-transform duration-1000"/>
        </div>
        
      </main>
    </div>
  );
}
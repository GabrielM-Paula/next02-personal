import NavBar from "../components/NavBar";

export default function Form() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center 
        p-10">
        <h1 className="p-4 text-2xl font-bold">FORMULÁRIO</h1>
        <form action="" method="post"
          className=" p-6 rounded shadow-lg bg-white w-100">
          <input type="text"
            placeholder="Digite seu nome"
            className="border p-2 rounded mb-4 w-full" /> <br />
          <input type="email"
            placeholder="Digite seu email"
            className="border p-2 rounded mb-4 w-full" /> <br />
          <textarea placeholder="Digite sua mensagem"
            className="border p-2 rounded mb-4 w-full" rows={10}></textarea> <br />
          <button type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded w-full">Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
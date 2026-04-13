import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-indigo-600 p-4 text-white flex justify-end space-x-4">
        <Link href="/">Home</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/form">Formulário</Link>
        <Link href="/galeria">Galeria</Link>
        <Link href="/tabela">Tabela</Link>
    </nav>
  );
}   
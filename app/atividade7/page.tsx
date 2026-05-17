"use client";

import { useState } from "react";
import NavBar from "../components/NavBar";

type Usuario = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
};

export default function Atividade7() {
  const [open, setOpen] = useState(false);

  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    senha: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    const novoUsuario: Usuario = {
      id: Date.now(),
      nome: formData.nome,
      email: formData.email,
      telefone: formData.telefone,
    };

    setUsuarios([...usuarios, novoUsuario]);

    setFormData({
      nome: "",
      email: "",
      telefone: "",
      senha: "",
    });

    setOpen(false);
  }

  function removerUsuario(id: number) {
    setUsuarios(
      usuarios.filter((usuario) => usuario.id !== id)
    );
  }

  return (
    <div>
      <NavBar />

      {/* TOPO */}
      <section className="flex flex-col items-center justify-center py-16 px-6">

        <div className="p-10 w-full max-w-3xl text-center">

          <h1 className="text-4xl font-bold mb-4">
            Sistema de Cadastro
          </h1>

          <p className="text-slate-600 mb-8">
            Exemplo de modal com formulário utilizando
            Next.js e Tailwind CSS.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-6
              py-3
              rounded-xl
              font-semibold
              transition
            "
          >
            Novo Cadastro
          </button>

        </div>

      </section>

      {/* LISTA */}
      <section className="px-6 pb-20">

        <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-8 max-w-5xl mx-auto">

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-2xl font-bold text-slate-800">
              Cadastros
            </h2>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-semibold">
              {usuarios.length} usuários
            </span>

          </div>

          {usuarios.length === 0 ? (
            <div className="text-center py-10 text-slate-500">
              Nenhum cadastro realizado.
            </div>
          ) : (
            <div className="overflow-x-auto">

              <table className="w-full">

                <thead>

                  <tr className="border-b border-slate-200">

                    <th className="text-left py-4 text-slate-700">
                      Nome
                    </th>

                    <th className="text-left py-4 text-slate-700">
                      Email
                    </th>

                    <th className="text-left py-4 text-slate-700">
                      Telefone
                    </th>

                    <th className="text-center py-4 text-slate-700">
                      Ações
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {usuarios.map((usuario) => (

                    <tr
                      key={usuario.id}
                      className="border-b border-slate-100 hover:bg-slate-50 transition"
                    >

                      <td className="py-4 text-slate-800">
                        {usuario.nome}
                      </td>

                      <td className="py-4 text-slate-600">
                        {usuario.email}
                      </td>

                      <td className="py-4 text-slate-600">
                        {usuario.telefone}
                      </td>

                      <td className="py-4 text-center">

                        <button
                          onClick={() => removerUsuario(usuario.id)}
                          className="
                            bg-red-500
                            hover:bg-red-600
                            text-white
                            px-4
                            py-2
                            rounded-lg
                            text-sm
                            transition
                          "
                        >
                          Excluir
                        </button>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>
          )}

        </div>

      </section>

      {/* MODAL */}
      {open && (

        <div
          className="
            fixed inset-0
            bg-black/40
            flex items-center
            justify-center
            p-4
            z-50
          "
        >

          {/* CAIXA */}
          <div
            className="
              bg-white
              w-full
              max-w-md
              rounded-2xl
              shadow-2xl
              border
              border-slate-200
              overflow-hidden
            "
          >

            {/* HEADER */}
            <div className="bg-blue-600 p-6 text-white">

              <div className="flex items-center justify-between">

                <h2 className="text-2xl font-bold">
                  Novo Cadastro
                </h2>

                <button
                  onClick={() => setOpen(false)}
                  className="
                    text-white
                    text-2xl
                    font-bold
                    hover:opacity-70
                  "
                >
                  ×
                </button>

              </div>

              <p className="text-blue-100 mt-2">
                Preencha os dados abaixo
              </p>

            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="p-6 space-y-5"
            >

              {/* NOME */}
              <div>

                <label className="block mb-2 text-slate-700 font-medium">
                  Nome
                </label>

                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Digite seu nome"
                  className="
                    w-full
                    border
                    border-slate-300
                    rounded-lg
                    px-4
                    py-3
                    bg-white
                    text-slate-800
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-400
                  "
                  required
                />

              </div>

              {/* EMAIL */}
              <div>

                <label className="block mb-2 text-slate-700 font-medium">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Digite seu email"
                  className="
                    w-full
                    border
                    border-slate-300
                    rounded-lg
                    px-4
                    py-3
                    bg-white
                    text-slate-800
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-400
                  "
                  required
                />

              </div>

              {/* TELEFONE */}
              <div>

                <label className="block mb-2 text-slate-700 font-medium">
                  Telefone
                </label>

                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="(11) 99999-9999"
                  className="
                    w-full
                    border
                    border-slate-300
                    rounded-lg
                    px-4
                    py-3
                    bg-white
                    text-slate-800
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-400
                  "
                  required
                />

              </div>

              {/* SENHA */}
              <div>

                <label className="block mb-2 text-slate-700 font-medium">
                  Senha
                </label>

                <input
                  type="password"
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                  placeholder="Digite sua senha"
                  className="
                    w-full
                    border
                    border-slate-300
                    rounded-lg
                    px-4
                    py-3
                    bg-white
                    text-slate-800
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-400
                  "
                  required
                />

              </div>

              {/* BOTÕES */}
              <div className="flex justify-end gap-3 pt-2">

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="
                    px-5
                    py-2
                    rounded-lg
                    bg-slate-200
                    hover:bg-slate-300
                    text-slate-700
                    transition
                  "
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  className="
                    px-5
                    py-2
                    rounded-lg
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    font-semibold
                    transition
                  "
                >
                  Cadastrar
                </button>

              </div>

            </form>

          </div>

        </div>

      )}
    </div>
  );
}
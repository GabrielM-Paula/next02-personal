"use client";

import { useState } from "react";

export default function Page() {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    idade: "",
    nascimento: "",
    cor: "#0000ff",
    cidade: "",
    mensagem: "",
    tecnologia: "",
    ativo: false,
    genero: "",
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);

    alert("Formulário enviado!");

    setOpen(false);
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      {/* Botão */}
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 text-white px-5 py-3 rounded"
      >
        Abrir Modal
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center overflow-auto p-4">
          <div className="bg-white w-full max-w-xl rounded-xl p-6 shadow-xl">
            <h2 className="text-2xl font-bold mb-5">
              Cadastro Completo
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* TEXT */}
              <div>
                <label className="block mb-1">Nome</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Digite seu nome"
                  className="w-full border p-2 rounded"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Digite seu email"
                  className="w-full border p-2 rounded"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label className="block mb-1">Senha</label>
                <input
                  type="password"
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                  placeholder="Digite sua senha"
                  className="w-full border p-2 rounded"
                />
              </div>

              {/* NUMBER */}
              <div>
                <label className="block mb-1">Idade</label>
                <input
                  type="number"
                  name="idade"
                  value={formData.idade}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>

              {/* DATE */}
              <div>
                <label className="block mb-1">
                  Data de nascimento
                </label>
                <input
                  type="date"
                  name="nascimento"
                  value={formData.nascimento}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>

              {/* COLOR */}
              <div>
                <label className="block mb-1">Cor favorita</label>
                <input
                  type="color"
                  name="cor"
                  value={formData.cor}
                  onChange={handleChange}
                  className="w-full h-12 border rounded"
                />
              </div>

              {/* SELECT */}
              <div>
                <label className="block mb-1">Cidade</label>

                <select
                  name="cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                >
                  <option value="">Selecione</option>
                  <option value="São Paulo">São Paulo</option>
                  <option value="Rio de Janeiro">
                    Rio de Janeiro
                  </option>
                  <option value="Curitiba">Curitiba</option>
                </select>
              </div>

              {/* RADIO */}
              <div>
                <label className="block mb-2">Gênero</label>

                <div className="flex gap-4">
                  <label>
                    <input
                      type="radio"
                      name="genero"
                      value="Masculino"
                      onChange={handleChange}
                    />{" "}
                    Masculino
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="genero"
                      value="Feminino"
                      onChange={handleChange}
                    />{" "}
                    Feminino
                  </label>
                </div>
              </div>

              {/* CHECKBOX */}
              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="ativo"
                    checked={formData.ativo}
                    onChange={handleChange}
                  />

                  Usuário ativo
                </label>
              </div>

              {/* TEXTAREA */}
              <div>
                <label className="block mb-1">Mensagem</label>

                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border p-2 rounded"
                />
              </div>

              {/* RANGE */}
              <div>
                <label className="block mb-1">
                  Nível React: {formData.tecnologia}
                </label>

                <input
                  type="range"
                  min="0"
                  max="10"
                  name="tecnologia"
                  value={formData.tecnologia}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>

              {/* BOTÕES */}
              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded"
                >
                  Fechar
                </button>

                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded"
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
"use client"; //necessário para usar o useState e outros hooks do React

import NavBar from "../components/NavBar";
import { useState } from "react";

export default function Page() {
    const [open, setOpen] = useState(false); //para abrir e fechar a modal
    //visible é o atributo da modal, se false modal fechada, se true modal aberta

    const [formData, setFormData] = useState({//para pegar os dados do formulário
        nome: "", //atributo nome do formulário
        email: "", //atributo email do formulário
    });

    function handleChange(e: any) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    function limparFormulario() {
        setFormData({
            nome: "",
            email: "",
        });
    }

    function enviarDados(e: any) {
        e.preventDefault();//para evita recarga da página

        alert(`Nome: ${formData.nome} Email: ${formData.email}`);

        setOpen(false);//fechar a modal

        setFormData({ //para pegar os valores e mostrar na tela
            nome: `${formData.nome}`,
            email: `${formData.email}`,
        });
        
        limparFormulario(); //limpar o formulário após enviar os dados
    }

    return (
        <div>
            <NavBar />{/* para fazer comentários */}

            <div className="flex flex-col items-center justify-center 
        p-10">
                <h3 className="p-4 text-2xl font-bold">CADASTRO</h3>
                <button
                    onClick={() => setOpen(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Abrir Modal
                </button>

                <div className="mt-4 text-gray-600">
                    <h3>Nome: {formData.nome}</h3>
                    <h3>E-mail: {formData.email}</h3>
                </div>
            </div>


            {/* Fundo escuro */}
            {open && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

                    {/* Modal */}
                    <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">
                            Formulário
                        </h2>

                        <form onSubmit={enviarDados}>
                            {/* Nome */}
                            <input
                                type="text"
                                name="nome"
                                placeholder="Digite seu nome"
                                value={formData.nome}
                                onChange={handleChange}
                                className="w-full border p-2 rounded mb-3"
                            />

                            {/* Email */}
                            <input
                                type="email"
                                name="email"
                                placeholder="Digite seu email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border p-2 rounded mb-3"
                            />

                            {/* Botões */}
                            <div className="flex justify-end gap-2">
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
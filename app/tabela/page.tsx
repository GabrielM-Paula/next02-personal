"use client";  // This is a client component, as it uses state and interactivity

import { useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

const initialData: User[] = [
  { id: 1, name: "João Silva", email: "joao@email.com" },
  { id: 2, name: "Maria Souza", email: "maria@email.com" },
  { id: 3, name: "Carlos Lima", email: "carlos@email.com" },
];

export default function DataTable() {
  const [data, setData] = useState<User[]>(initialData);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [newName, setNewName] = useState("");

  function handleDelete(id: number) {
    setData(data.filter((item) => item.id !== id));
  }

  function handleEdit(id: number, currentName: string) {
    setEditingId(id);
    setNewName(currentName);
  }

  function handleSave(id: number) {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, name: newName } : item
      )
    );
    setEditingId(null);
  }

  return (
    <div className="p-6">
      <div className="bg-white shadow-lg rounded-2xl p-4">
        <h2 className="text-xl font-semibold mb-4">Tabela de Usuários</h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left border-b">
              <th className="p-2">Nome</th>
              <th className="p-2">Email</th>
              <th className="p-2 text-center">Ações</th>
            </tr>
          </thead>

          <tbody>
            {data.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="p-2">
                  {editingId === user.id ? (
                    <input
                      className="border p-1 rounded"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                    />
                  ) : (
                    user.name
                  )}
                </td>

                <td className="p-2">{user.email}</td>

                <td className="p-2 flex gap-2 justify-center">
                  {editingId === user.id ? (
                    <button
                      onClick={() => handleSave(user.id)}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    >
                      Salvar
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(user.id, user.name)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      Editar
                    </button>
                  )}

                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {data.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            Nenhum usuário encontrado
          </p>
        )}
      </div>
    </div>
  );
}
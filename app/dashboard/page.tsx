export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 hidden md:block">
        <h1 className="text-2xl font-bold mb-10">MinhaApp</h1>

        <nav className="space-y-4">
          <a className="block hover:text-gray-300">Dashboard</a>
          <a className="block hover:text-gray-300">Usuários</a>
          <a className="block hover:text-gray-300">Relatórios</a>
          <a className="block hover:text-gray-300">Configurações</a>
        </nav>
      </aside>

      {/* Conteúdo */}
      <div className="flex-1">

        {/* Header */}
        <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Dashboard</h2>

          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Buscar..."
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          </div>
        </header>

        {/* Conteúdo principal */}
        <main className="p-6">

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-gray-500">Usuários</h3>
              <p className="text-2xl font-bold mt-2">1.240</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-gray-500">Vendas</h3>
              <p className="text-2xl font-bold mt-2">R$ 8.320</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-gray-500">Conversões</h3>
              <p className="text-2xl font-bold mt-2">32%</p>
            </div>

          </div>

          {/* Tabela */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Últimos usuários</h3>

            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-500 border-b">
                  <th className="pb-2">Nome</th>
                  <th>Email</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="py-2">João</td>
                  <td>joao@email.com</td>
                  <td className="text-green-500">Ativo</td>
                </tr>

                <tr className="border-b">
                  <td className="py-2">Maria</td>
                  <td>maria@email.com</td>
                  <td className="text-yellow-500">Pendente</td>
                </tr>

                <tr>
                  <td className="py-2">Carlos</td>
                  <td>carlos@email.com</td>
                  <td className="text-red-500">Inativo</td>
                </tr>
              </tbody>
            </table>
          </div>

        </main>
      </div>
    </div>
  );
}
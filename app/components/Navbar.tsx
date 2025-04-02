import React from 'react';
import Link from 'next/link';

type NavbarProps = {
  userType: 'admin' | 'monitor' | 'student';
};

const Navbar: React.FC<NavbarProps> = ({ userType }) => {
  // Função para aplicar a cor da navbar conforme o tipo de usuário
  const getNavbarColor = () => {
    switch (userType) {
      case 'admin':
        return 'bg-gray-900'; // Cor para o Admin
      case 'monitor':
        return 'bg-red-800'; // Cor para o Monitor
      case 'student':
        return 'bg-blue-700'; // Cor para o Estudante
      default:
        return 'bg-gray-900'; // Cor padrão (caso o tipo de usuário não seja reconhecido)
    }
  };

  const renderAdminLinks = () => (
    <>
      <h3 className="text-center text-xl font-semibold mb-6">Monitoria Digital ADM</h3>
      <ul className="space-y-3">
        <li><Link href="/admin/dashboard" className="bg-gray-700 px-4 py-2 rounded">Dashboard</Link></li>
        <li><Link href="/admin/cadastro" className="block px-4 py-2 rounded hover:bg-gray-700">Cadastro de Usuários</Link></li>
        <li><Link href="/admin/feedbacks" className="block px-4 py-2 rounded hover:bg-gray-700">Feedbacks</Link></li>
        <li><Link href="/admin/monitoria" className="block px-4 py-2 rounded hover:bg-gray-700">Cadastrar Monitorias</Link></li>
        <li><Link href="/" className="block px-4 py-2 rounded hover:bg-red-600 mt-4">Sair</Link></li>
      </ul>
    </>
  );

  const renderMonitorLinks = () => (
    <>
      <h4 className="text-center text-xl font-semibold mb-6">Monitoria Digital</h4>
      <h5 className="text-center text-xl font-semibold mb-6">Monitor</h5>
      <ul className="space-y-3">
      <li><Link href="/monitor/dashboard" className="block px-4 py-2 rounded hover:bg-blue-600 transition">Dashboard</Link></li>
      <li><Link href="/monitor/agenda" className="block px-4 py-2 rounded hover:bg-blue-600 transition">Agenda</Link></li>
      <li><Link href="/monitor/monitoria" className="block px-4 py-2 rounded hover:bg-blue-600 transition">Monitorias</Link></li>
      <li><Link href="/" className="block px-4 py-2 rounded hover:bg-blue-600 transition">Sair</Link></li>
      </ul>
    </>
  );

  const renderStudentLinks = () => (
    <>
      <h4 className="text-center text-xl font-semibold mb-6">Monitoria Digital</h4>
      <h5 className="text-center text-xl font-semibold mb-6">Aluno</h5>

      <ul className="space-y-3">
      <li><Link href="/User/dashboard" className="block px-4 py-2 rounded hover:bg-blue-500">Dashboard</Link></li>
      <li><Link href="/User/agenda" className="block px-4 py-2 rounded hover:bg-blue-500">Agenda</Link></li>
      <li><Link href="/User/monitoria" className="block px-4 py-2 rounded hover:bg-blue-500">Monitorias</Link></li>
      <li><Link href="/" className="block px-4 py-2 rounded hover:bg-blue-500">Sair</Link></li>
      </ul>
    </>
  );

  return (
    <div className="flex min-h-screen">
      <nav className={`${getNavbarColor()} text-white w-64 p-6 shadow-md`}>
        {userType === 'admin' && renderAdminLinks()}
        {userType === 'monitor' && renderMonitorLinks()}
        {userType === 'student' && renderStudentLinks()}
      </nav>
    </div>
  );
};

export default Navbar;

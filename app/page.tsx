'use client'; // Adicione isso no início do arquivo
import { Layout, OutroComponente } from './components/Layout';


const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 sm:px-12">
      <div className="container mx-auto text-center">
        {/* Título */}
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Monitoria Digital</h1>

        {/* Descrição do Sistema */}
        <p className="text-lg text-gray-700 mb-8">
          Bem-vindo ao Monitoria Digital, uma plataforma para gerenciar monitorias, acompanhar o desempenho dos alunos e agendar atividades. 
          Nosso sistema oferece uma experiência intuitiva e eficiente para monitores e alunos.
        </p>

        {/* Cards de Funcionalidades */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-200">
            <h3 className="text-xl font-semibold text-gray-800">Agendamento de Monitorias</h3>
            <p className="text-gray-600 mt-2">Agende suas monitorias e acompanhe seu progresso com facilidade.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-200">
            <h3 className="text-xl font-semibold text-gray-800">Dashboard de Desempenho</h3>
            <p className="text-gray-600 mt-2">Acompanhe o desempenho acadêmico com gráficos e relatórios detalhados.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-200">
            <h3 className="text-xl font-semibold text-gray-800">Feedback dos Alunos</h3>
            <p className="text-gray-600 mt-2">Receba feedbacks valiosos para melhorar as monitorias e ajudar os alunos.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <a href="/login" className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700 transition duration-300">
            Acesse o Sistema
          </a>
        </div>
      </div>
    </div>

  );
};

export default Home;

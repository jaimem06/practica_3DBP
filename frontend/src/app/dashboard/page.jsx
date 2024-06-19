import React from 'react';
import Sidebar from '../components/sidebar';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">Bienvenido</h1>
          {/* Resto de la pagina */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
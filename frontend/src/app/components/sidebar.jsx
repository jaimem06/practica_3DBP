'use client';
import React, { useState } from 'react';
import { ShoppingBagIcon, HomeIcon, ArrowLeftStartOnRectangleIcon } from '@heroicons/react/20/solid'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex">
            <div
                className={`bg-gray-800 text-white 
                    fixed h-screen transition-all 
                    duration-300 z-10 
                    ${isOpen ? 'w-64' : 'w-0 overflow-hidden'
                    }`}>
                {/* Asegúrate de que este div tenga h-full para ocupar toda la altura */}
                <div className="flex flex-col h-full items-center">
                    <div className="mt-4">
                        <a href="/dashboard"
                            className="inline-flex items-center px-12 py-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
                            <HomeIcon className="h-5 w-5 mr-2" />
                            Inicio
                        </a>
                    </div>
                    <div className="mt-4">
                        <a href="/productos"
                            className="inline-flex items-center px-7 py-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
                            <ShoppingBagIcon className="h-5 w-5 mr-2" />
                            Productos
                        </a>
                    </div>
                    {/* Add more sidebar items here */}
                    {/* Este div tiene mt-auto para empujarlo hacia abajo */}
                    <div className="mt-auto mb-4">
                        <a href="/logout"
                            className="inline-flex items-center px-5 py-3 bg-red-500 hover:bg-red-700 text-white font-bold rounded">
                            <ArrowLeftStartOnRectangleIcon className="h-5 w-5 mr-2" />
                            Cerrar sesión
                        </a>
                    </div>
                </div>
            </div>
            <div className={`flex-1 p-4 
                        ${isOpen ? 'ml-64' : 'ml-0'}`}>
                <div className="ml-auto">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 
                       text-white font-bold py-2 px-4 rounded"
                        onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
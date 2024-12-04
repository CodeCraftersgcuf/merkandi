import React, { useState } from 'react';
import TopNavbar from '../../components/TopNavbar/TopNavbar';
import Footer from '../../components/Footer/Footer';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <TopNavbar />
            <div className="flex">
                {/* Sidebar */}
                <div
                    className={`fixed lg:static top-0 left-0 z-20 bg-white transition-transform transform ${
                        mobileOpen ? 'translate-x-0' : '-translate-x-full'
                    } lg:translate-x-0 lg:w-[20%] w-64`}
                >
                    <Sidebar setMobileOpen={setMobileOpen} />
                </div>

                {/* Main Content */}
                <div
                    className={`flex-1 min-h-screen bg-gray-100 transition-all duration-300 `}
                >
                    <div className="p-4">
                        <div className="bg-gray-200 flex justify-between items-center p-4 rounded mb-4">
                            <button
                                className="block lg:hidden"
                                onClick={() => setMobileOpen(!mobileOpen)}
                            >
                                <i className="fa-solid fa-bars text-2xl"></i>
                            </button>
                            <button
                                className="hidden lg:block opacity-0 cursor-default"
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                            >
                                <i className="fa-solid fa-bars text-2xl"></i>
                            </button>
                            <div className="bg-blue-700 w-10 h-10 flex items-center justify-center rounded-full">
                                <i className="fa-solid fa-user text-xl text-white"></i>
                            </div>
                        </div>
                        <Outlet />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Layout;

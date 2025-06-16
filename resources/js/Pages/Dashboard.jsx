import React, { useState } from 'react';
import { Head, usePage, router } from '@inertiajs/react';

export default function Dashboard() {
    const { auth, usersCount } = usePage().props; // renamed from employeesCount
    const [processing, setProcessing] = useState(false);

    const handleLogout = (e) => {
        e.preventDefault();
        setProcessing(true);

        router.post(route('logout'), {}, {
            preserveScroll: true,
            preserveState: false,
            onSuccess: () => {
                console.log('✅ Logged out successfully');
            },
            onError: (errors) => {
                console.error('❌ Logout failed:', errors);
                alert('Logout failed. Please try again.');
            },
            onFinish: () => {
                setProcessing(false);
            }
        });
    };

    return (
        <>
            <Head title="Dashboard" />
            <div className="bg-gray-100 min-h-screen text-gray-800">
                {/* Navbar */}
                <nav className="bg-white shadow-md p-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold">User Dashboard</h1>
                    <button
                        onClick={handleLogout}
                        className={`bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ${processing ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={processing}
                    >
                        {processing ? 'Logging out...' : 'Logout'}
                    </button>
                </nav>

                {/* Body */}
                <div className="container mx-auto px-4 py-10">
                    <h2 className="text-2xl font-semibold mb-6">
                        Welcome, {auth.user.name}!
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-lg font-bold mb-2">Total Users</h3>
                            <p className="text-3xl text-blue-600 font-semibold">{usersCount ?? 'N/A'}</p>
                        </div>

                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-lg font-bold mb-2">Your Email</h3>
                            <p className="text-gray-700">{auth.user.email}</p>
                        </div>

                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-lg font-bold mb-2">Your Position</h3>
                            <p className="text-gray-700">{auth.user.position ?? 'N/A'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

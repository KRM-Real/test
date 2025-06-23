import React, { useState } from 'react';
import { Head, usePage, router, Link } from '@inertiajs/react';


export default function Dashboard() {
    const { auth = {}, usersCount } = usePage().props;
    const user = auth.user || {}; // fallback to empty object
    const [processing, setProcessing] = useState(false);

    const handleLogout = (e) => {
        e.preventDefault();
        setProcessing(true);

        router.post(route('logout'), {}, {
            preserveScroll: true,
            preserveState: false,
            onSuccess: () => console.log('✅ Logged out successfully'),
            onError: (errors) => {
                console.error('❌ Logout failed:', errors);
                alert('Logout failed. Please try again.');
            },
            onFinish: () => setProcessing(false)
        });
    };

    return (
        <>
            <Head title="Dashboard" />
            <div className="bg-gray-100 min-h-screen text-gray-800">
                {/* Navbar */}
                <nav className="bg-white shadow-md p-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold">User Dashboard</h1>
                    <div className="flex items-center space-x-4">
                        <Link
                            href={route('profile.edit')}
                            className="text-gray-600 hover:text-gray-900"
                            title="Edit Profile"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M5.121 17.804A9.953 9.953 0 0112 15c2.21 0 4.242.722 5.879 1.933M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M12 3C7.03 3 3 7.03 3 12c0 2.21.722 4.242 1.933 5.879M21 12c0-4.97-4.03-9-9-9" />
                            </svg>
                        </Link>
                        <button
                            onClick={handleLogout}
                            className={`bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ${processing ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={processing}
                        >
                            {processing ? 'Logging out...' : 'Logout'}
                        </button>
                    </div>
                </nav>

                {/* Body */}
                <div className="container mx-auto px-4 py-10">
                    <h2 className="text-2xl font-semibold mb-6">
                        Welcome, {user.name ?? 'Guest'}!
                    </h2>

                    <div className ="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <a
    href="/members"
    className="bg-white shadow-md rounded-lg p-6 block hover:bg-gray-100 transition"
>
    <h3 className="text-lg font-bold mb-2">Total Users</h3>
    <p className="text-3xl text-blue-600 font-semibold">{usersCount ?? 0}</p>
</a>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-lg font-bold mb-2">Your Email</h3>
                        <p className="text-gray-700">{user.email ?? 'N/A'}</p>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-lg font-bold mb-2">Your Position</h3>
                        <p className="text-gray-700">{user.position ?? 'N/A'}</p>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

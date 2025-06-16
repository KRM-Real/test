import { Head, Link } from '@inertiajs/react';

export default function Welcome({ canLogin, canRegister, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative min-h-screen bg-white flex flex-col justify-center items-center text-gray-800 px-6 overflow-hidden">
                <header className="mb-12 text-center z-10">
                    <h1 className="text-5xl font-extrabold text-green-700 mb-2">Batang Quiapo Fans</h1>
                    <p className="text-lg text-gray-600">Welcome to the official fan portal of Batang Quiapo</p>
                </header>

                <div className="flex gap-4 mb-8 z-10">
                    {canLogin && (
                        <Link
                            href={route('login')}
                            className="px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded shadow hover:bg-green-700 transition"
                        >
                            Login
                        </Link>
                    )}
                    {canRegister && (
                        <Link
                            href={route('register')}
                            className="px-6 py-3 bg-white border border-green-600 text-green-600 text-lg font-semibold rounded shadow hover:bg-green-50 transition"
                        >
                            Register
                        </Link>
                    )}
                </div>

                <footer className="text-sm text-gray-400 z-10">
                    Laravel v{laravelVersion} • PHP v{phpVersion}
                </footer>

                {/* Larger Decorative Image */}
                <img
                    src="/images/quiapo.png" // Make sure this path is correct
                    alt="Quiapo Theme"
                    className="absolute bottom-0 right-0 w-80 opacity-90 md:block hidden pointer-events-none"
                />
            </div>
        </>
    );
}

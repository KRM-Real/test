import { router, Link, usePage } from '@inertiajs/react';
import React from 'react';

export default function Index({ members }) {
    const { flash } = usePage().props;

    const handleDelete = (id) => {
        if (confirm('Are you sure?')) {
            router.delete(route('members.destroy', id), {
                preserveScroll: true,
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Member List</h1>

                {/* ✅ Flash Success Message */}
                {flash?.success && (
                    <div className="mb-4 p-4 bg-green-100 text-green-800 rounded border border-green-300">
                        {flash.success}
                    </div>
                )}

                {/* ✅ Add Member Button */}
                <div className="flex justify-end mb-4">
                    <Link
                        href={route('members.create')}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
                    >
                        + Add Member
                    </Link>
                </div>

                {/* ✅ Members Table */}
                <div className="overflow-x-auto shadow rounded-lg bg-white">
                    <table className="min-w-full text-left border-collapse">
                        <thead className="bg-gray-200 text-gray-700 text-sm uppercase">
                            <tr>
                                <th className="px-6 py-3 font-semibold">ID</th>
                                <th className="px-6 py-3 font-semibold">Name</th>
                                <th className="px-6 py-3 font-semibold">Email</th>
                                <th className="px-6 py-3 font-semibold text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {members.data.map((user, index) => (
                                <tr
                                    key={user.id}
                                    className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                                >
                                    <td className="px-6 py-4">{user.id}</td>
                                    <td className="px-6 py-4">{user.name}</td>
                                    <td className="px-6 py-4">{user.email}</td>
                                    <td className="px-6 py-4 text-center space-x-4">
                                        <button
                                            onClick={() => router.visit(route('members.edit', user.id))}
                                            className="text-blue-600 hover:underline"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(user.id)}
                                            className="text-red-600 hover:underline"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* ✅ Pagination */}
                <div className="mt-6 flex justify-center space-x-2">
                    {members.links.map((link, index) => (
                        <button
                            key={index}
                            disabled={!link.url}
                            onClick={() => link.url && router.visit(link.url)}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`px-3 py-1 rounded text-sm ${
                                link.active
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white border text-gray-700 hover:bg-gray-100'
                            } ${!link.url ? 'opacity-50 cursor-not-allowed' : ''}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

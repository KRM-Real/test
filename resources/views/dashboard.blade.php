<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 text-gray-800">
    <nav class="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 class="text-xl font-bold">Employee Dashboard</h1>
        <form action="{{ route('logout') }}" method="POST">
            @csrf
            <button type="submit" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Logout</button>
        </form>
    </nav>

    <div class="container mx-auto px-4 py-10">
        <h2 class="text-2xl font-semibold mb-4">Welcome, {{ Auth::user()->name }}!</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div class="bg-white shadow-md rounded-lg p-6">
                <h3 class="text-lg font-bold mb-2">Total Employees</h3>
                <p class="text-3xl text-blue-600 font-semibold">{{ \App\Models\Employee::count() }}</p>
            </div>

            <div class="bg-white shadow-md rounded-lg p-6">
                <h3 class="text-lg font-bold mb-2">Your Email</h3>
                <p class="text-gray-700">{{ Auth::user()->email }}</p>
            </div>

            <div class="bg-white shadow-md rounded-lg p-6">
                <h3 class="text-lg font-bold mb-2">Your Position</h3>
                <p class="text-gray-700">{{ Auth::user()->position ?? 'N/A' }}</p>
            </div>
        </div>
    </div>
</body>
</html>

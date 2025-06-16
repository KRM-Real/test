<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Display</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 text-gray-800">
    <div class="container mx-auto px-4 py-8">
        <div class="flex justify-between items-center mb-6">
            <div>
                <h1 class="text-3xl font-bold mb-1">Welcome to the Index Page</h1>
                <p class="text-gray-600">This is a simple Blade template example.</p>
            </div>
            <a href="{{ route('register') }}" class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">Register</a>
        </div>

        <div class="bg-white shadow rounded-lg p-6">
            <h2 class="text-2xl font-semibold mb-4">Employee List</h2>
            <table class="min-w-full table-auto border border-gray-300">
                <thead class="bg-gray-200">
                    <tr>
                        <th class="px-4 py-2 border">ID</th>
                        <th class="px-4 py-2 border">Name</th>
                        <th class="px-4 py-2 border">Email</th>
                        <th class="px-4 py-2 border">Position</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($employees as $employee)
                    <tr class="hover:bg-gray-50">
                        <td class="px-4 py-2 border">{{ $employee->id }}</td>
                        <td class="px-4 py-2 border">{{ $employee->name }}</td>
                        <td class="px-4 py-2 border">{{ $employee->email }}</td>
                        <td class="px-4 py-2 border">{{ $employee->position }}</td>
                    </tr>
                    @endforeach
                </tbody>
            </table>

            <div class="mt-4 text-sm text-gray-700">
                <p>Total Employees: <span class="font-semibold">{{ $employees->count() }}</span></p>  
            </div>
         </div>
     </div>     
</body>
</html>
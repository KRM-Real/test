<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 flex justify-center items-center h-screen">
    <form action="{{ route('login') }}" method="POST" class="bg-white p-8 rounded shadow-md w-full max-w-sm">
        @csrf
        <h2 class="text-2xl font-bold mb-6">Login</h2>
        <input name="email" type="email" placeholder="Email" class="w-full mb-4 px-4 py-2 border rounded" required>
        <input name="password" type="password" placeholder="Password" class="w-full mb-4 px-4 py-2 border rounded" required>
        <button type="submit" class="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">Login</button>
    </form>
</body>
</html>
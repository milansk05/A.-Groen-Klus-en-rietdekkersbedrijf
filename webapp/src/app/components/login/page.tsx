'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Inlog: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const isAuthenticated = sessionStorage.getItem("isAuthenticated");
        if (isAuthenticated === "true") {
            console.log("Gebruiker is al ingelogd, redirect naar /admin...");
            setTimeout(() => router.push("/admin"), 100);
        }
    }, [router]);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.error || "Fout bij inloggen");
            }

            // ✅ Bewaar authenticatiestatus in sessionStorage
            sessionStorage.setItem("isAuthenticated", "true");
            sessionStorage.setItem("userRole", result.role);

            console.log("Login succesvol! Authenticated:", sessionStorage.getItem("isAuthenticated"));

            // ✅ Gebruik setTimeout voor veilige redirect
            setTimeout(() => router.push("/admin"), 100);
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-xl font-bold mb-4 text-center">Inloggen</h1>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-gray-700">
                            E-mail
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-700">
                            Wachtwoord
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-primary text-white font-bold px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Inlog;
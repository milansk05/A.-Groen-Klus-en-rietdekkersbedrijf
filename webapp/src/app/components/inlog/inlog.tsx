"use client"; // Mark this file as a client component

import { useState } from "react";

const Inlog: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "admin" && password === "adminpass") {
      console.log("Credentials valid. Redirecting...");
      sessionStorage.setItem("isAuthenticated", "true");
      window.location.href = "/admin";
    } else {
      setError("De gebruikersnaam of het wachtwoord is onjuist.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
        <img
          className="mx-auto mb-6"
          src="/images/zwartetekstlgo.png"
          alt="A Groen Dienstverlening Logo"
          width={250}
          height={70}
        />
        <h1 className="text-xl font-bold mb-4 text-center">Inloggen</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-gray-700">
              Gebruikersnaam
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`w-full p-2 border rounded ${
                error ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
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
              className={`w-full p-2 border rounded ${
                error ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Inlog;
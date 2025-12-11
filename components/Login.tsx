"use client";

import React, { useState } from "react";
import { loginUser } from "@/app/actions/authActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<{
    email?: string;
    password?: string;
    general?: string;
  }>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError({}); // reset errors

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await loginUser(formData);

      if (!response.success) {
        const newErrors: typeof error = {};

        if (response.errors) {
          if ("email" in response.errors)
            newErrors.email = response.errors.email?.[0];
          if ("password" in response.errors)
            newErrors.password = response.errors.password?.[0];
          if ("general" in response.errors)
            newErrors.general = response.errors.general?.[0];
        }

        if (response.error) newErrors.general = response.error;

        setError(newErrors);
      } else {
        alert(response.message);
        window.location.href = "/dashboard";
      }
    } catch (err) {
      console.error("Login error:", err);
      setError({ general: "An unexpected error occurred." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 sm:px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-purple-800">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
              placeholder="Enter your email"
            />
            {error.email && (
              <p className="text-red-500 text-sm mt-1">{error.email}</p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
              placeholder="Enter your password"
            />
            {error.password && (
              <p className="text-red-500 text-sm mt-1">{error.password}</p>
            )}
          </div>

          {/* General Error */}
          {error.general && (
            <p className="text-red-500 text-sm">{error.general}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition duration-300 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

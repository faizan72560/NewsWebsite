"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../navbar";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig"; // Ensure this path is correct

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();
  //   const auth = getAuth();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError("Email and password are required");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    console.log(formData);
    try {
      const data = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log(data);
      if (data?.user) {
        localStorage.setItem("isLoggedIn", true);
        router.push("/");
      }
      // router.push("/"); // Redirect to home after successful login
    } catch (firebaseError) {
      console.log(firebaseError);
      setError(firebaseError.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-10 text-gray-800">Login</h2>
          <form onSubmit={handleSubmit}>
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="name@example.com"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                value={formData.password}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

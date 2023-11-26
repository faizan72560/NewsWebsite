import React, { useState } from "react";
import { auth } from "./config/firebaseConfig"; // Ensure this path is correct
// import { use client } from 'next';
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const validate = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    } else if (values.name.length < 2 || values.name.length > 50) {
      errors.name = "Name must be between 2 and 50 characters";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          console.log("User created:", userCredential.user);
          // Handle additional actions after successful signup
        })
        .catch((error) => {
          console.error("Error signing up:", error.message);
          // Handle Firebase errors here
        });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-10 text-gray-800">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Full name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={formData.name}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            {errors.name && (
              <div className="text-red-600 text-sm">{errors.name}</div>
            )}
          </div>
          {/* Email Field */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            {errors.email && (
              <div className="text-red-600 text-sm">{errors.email}</div>
            )}
          </div>
          {/* Password Field */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            {errors.password && (
              <div className="text-red-600 text-sm">{errors.password}</div>
            )}
          </div>
          {/* Confirm Password Field */}
          <div className="mb-6">
            <label
              htmlFor="confirm-password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              onChange={handleChange}
              value={formData.confirmPassword}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            {errors.confirmPassword && (
              <div className="text-red-600 text-sm">
                {errors.confirmPassword}
              </div>
            )}
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "@/services/supabase";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const schema = yup
  .object({
    password: yup
      .string()
      .required("Required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain at least 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character of !@#$%^&*",
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password do not match")
      .required("Confirm Password required"),
  })
  .required();

export const UpdatePassword = () => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [password, setPassword] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const handleUpdatePassword = async (data) => {
    setError(null);
    setSuccess(false);

    const { error } = await supabase.auth.updateUser({
      password: data.password,
    });

    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center">Update your Password</h1>
        <form
          onSubmit={handleSubmit(handleUpdatePassword)}
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="password"
              className="text-sm font-semibold text-gray-400"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password")}
              className="w-full p-3 mt-1 text-gray-100 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-semibold text-gray-400"
            >
              Password
            </label>
            <input
              type="password"
              {...register("confirmPassword")}
              className="w-full p-3 mt-1 text-gray-100 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="cursor-pointer w-full py-3 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Reset Password
          </button>
          {error && (
            <p className="mt-4 text-sm text-center text-red-500">{error}</p>
          )}
          {success && (
            <p className="mt-4 text-sm text-center text-green-500">
              Please check your email to confirm your password reset.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

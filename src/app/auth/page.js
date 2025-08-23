"use client";
import { loginUser } from "@/store/features/userSlice";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = { email, password };

    dispatch(loginUser(credentials))
      .unwrap()
      .then((response) => {
        localStorage.setItem("token", response.token);
        router.push("/dashboard/users");
      })
      .catch((error) => {
        console.error("Login failed:", error.message);
        setError(error.message);
      });
  };
  return (
    <section className="h-screen flex items-center justify-center bg-[#F5F5F5]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="w-full  flex flex-col items-center justify-center">
          <div className="w-full max-w-md p-4">
            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="text-[#000] text-[18px] font-normal"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-[383px] h-[50px] rounded-[10px] mt-[18px] px-5 leading-[23px]"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mt-[42px]">
                <label
                  className="text-[#000] text-[18px] font-normal "
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-[383px] h-[50px]  rounded-[10px]  mt-[18px] px-5 leading-[23px]"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && (
                <p className="text-center mb-3 text-red-500 mt-5">{error}</p>
              )}
              <button
                type="submit"
                className="w-[383px]  bg-[#B8F900] h-[50px] rounded-[10px] mt-[26px] text-[#000] text-[18px] font-normal leading-[23px]"
              >
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");
  const [open, setopen] = useState(false);

  const handleToggle = () => {
    setIsRegister(!isRegister);
    setError("");
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setPhone("");
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password || !phone) {
      setError("Ro‘yxatdan o‘tish uchun barcha maydonlarni to‘ldiring.");
      return;
    }

    const userData = { firstName, lastName, email, password, phone };

    try {
      const response = await fetch("http://10.10.3.9:8080/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      // if (response.status !== 201) {
      //   const errorData = await response.json();
      //   throw new Error(errorData.message || "Ro‘yxatdan o‘tishda xatolik.");
      // }

      setopen(true);

      // alert("Ro‘yxatdan o‘tish muvaffaqiyatli amalga oshirildi!");
      // handleToggle();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Iltimos, email va parolni kiriting.");
      return;
    }

    const loginData = { email, password };

    try {
      const response = await fetch("http://10.10.3.9:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      if (response.status !== 201) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login muvaffaqiyatsiz.");
      }

      const data = await response.json();
      const token = data?.data?.Authorize;
      if (token) {
        localStorage.setItem("authToken", token);
        alert("Kirish muvaffaqiyatli amalga oshirildi!");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        {open ? (
          <>
            kodni kiriting
            <input />
          </>
        ) : (
          <>
            <div className="flex gap-3 mb-6">
              <button
                onClick={handleToggle}
                className={
                  !isRegister
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600"
                }
              >
                Kirish
              </button>
              <button
                onClick={handleToggle}
                className={
                  isRegister
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600"
                }
              >
                Ro‘yxatdan o‘tish
              </button>
            </div>
            {isRegister ? (
              <form onSubmit={handleSubmitRegister}>
                <input
                  type="text"
                  placeholder="Ismingiz"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full mb-4 px-4 py-2 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Familiyangiz"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full mb-4 px-4 py-2 border rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mb-4 px-4 py-2 border rounded-lg"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Parol"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mb-4 px-4 py-2 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Telefon"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full mb-4 px-4 py-2 border rounded-lg"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2"
                >
                  Ro‘yxatdan o‘tish
                </button>
              </form>
            ) : (
              <form onSubmit={handleSubmitLogin}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mb-4 px-4 py-2 border rounded-lg"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Parol"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mb-4 px-4 py-2 border rounded-lg"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2"
                >
                  Kirish
                </button>
              </form>
            )}
          </>
        )}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default Login;

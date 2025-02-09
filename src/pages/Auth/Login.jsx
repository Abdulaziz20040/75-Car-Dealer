import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

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
    console.log("Ro‘yxatdan o‘tish ma’lumotlari:", userData);

    try {
      const response = await fetch("http://16.171.243.1:8080/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      console.log("Ro‘yxatdan o‘tish javobi:", data);

      if (response === 201) {
        localStorage.setItem("authToken", data?.data);
        localStorage.setItem("email", email);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("phone", phone);
        alert("Ro‘yxatdan o‘tish muvaffaqiyatli!");
        setOpen(true);
      } else {
        setError(data.message || "Ro‘yxatdan o‘tishda xatolik.");
      }
    } catch (error) {
      setError("Server bilan bog‘lanishda xatolik yuz berdi.");
    }
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Iltimos, email va parolni kiriting.");
      return;
    }

    const loginData = { email, password };
    console.log("Login ma’lumotlari:", loginData);

    try {
      const response = await fetch("http://16.171.243.1:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
      console.log("Login javobi:", data.data);

      if (response.ok) {
        localStorage.setItem("authToken", data?.data);
        alert("Login muvaffaqiyatli bajarildi!");
        navigate(-1);
      } else {
        alert(data.message || "Login muvaffaqiyatsiz.");
      }
    } catch (error) {
      alert("Server bilan bog‘lanishda xatolik yuz berdi.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        {open ? (
          <>
            Kodni kiriting:
            <input type="text" className="w-full px-4 py-2 border rounded-lg" />
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
                  type="password"
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
                  type="password"
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

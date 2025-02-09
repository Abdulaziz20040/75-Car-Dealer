import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsRegister(!isRegister);
    setError("");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, phone } = formData;

    if (!firstName || !lastName || !email || !password) {
      setError("Ro‘yxatdan o‘tish uchun barcha maydonlarni to‘ldiring.");
      return;
    }

    try {
      const response = await fetch("http://16.171.243.1:8080/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.status === 201) {
        alert("Foydalanuvchi yaratildi (tasdiqlash kutilmoqda).");
        setOpen(true);
      } else {
        setError(data.message || "Ro‘yxatdan o‘tishda xatolik.");
      }
    } catch {
      setError("Server bilan bog‘lanishda xatolik yuz berdi.");
    }
  };

  const handleVerifyCode = async () => {
    if (!verificationCode) {
      setError("Iltimos, tasdiqlash kodini kiriting.");
      return;
    }

    try {
      const response = await fetch("http://16.171.243.1:8080/auth/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, code: verificationCode }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Tasdiqlash muvaffaqiyatli bajarildi! Endi tizimga kiring.");
        setOpen(false);
        setIsRegister(false);
      } else {
        setError(data.message || "Tasdiqlashda xatolik yuz berdi.");
      }
    } catch {
      setError("Server bilan bog‘lanishda xatolik yuz berdi.");
    }
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      alert("Iltimos, email va parolni kiriting.");
      return;
    }

    try {
      const response = await fetch("http://16.171.243.1:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("authToken", data?.data);
        alert("Login muvaffaqiyatli bajarildi!");
        navigate(-1);
      } else {
        alert(data.message || "Login muvaffiyatsiz.");
      }
    } catch {
      alert("Server bilan bog‘lanishda xatolik yuz berdi.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        {open ? (
          <div>
            <p className="mb-4">
              Foydalanuvchi yaratildi (tasdiqlash kutilmoqda).
            </p>
            <input
              type="text"
              placeholder="Gmailga kelgan kodni kiriting"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg mb-4"
            />
            <button
              onClick={handleVerifyCode}
              className="w-full bg-blue-600 text-white py-2 rounded-lg"
            >
              Tasdiqlash
            </button>
          </div>
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
            <form
              onSubmit={isRegister ? handleSubmitRegister : handleSubmitLogin}
            >
              {isRegister && (
                <>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Ismingiz"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full mb-4 px-4 py-2 border rounded-lg"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Familiyangiz"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full mb-4 px-4 py-2 border rounded-lg"
                  />
                </>
              )}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mb-4 px-4 py-2 border rounded-lg"
              />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Parol"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg mb-4"
              />
              {isRegister && (
                <input
                  type="text"
                  name="phone"
                  placeholder="Telefon raqam"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              )}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg"
              >
                {isRegister ? "Ro‘yxatdan o‘tish" : "Kirish"}
              </button>
            </form>
          </>
        )}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default Login;

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
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const url = isRegister
      ? "http://16.171.243.1:8080/auth/register"
      : "http://16.171.243.1:8080/auth/login";

    const requiredFields = isRegister
      ? ["firstName", "lastName", "email", "password", "phone"]
      : ["email", "password"];

    for (const field of requiredFields) {
      if (!formData[field]) {
        setError("Barcha maydonlarni to‘ldiring.");
        return;
      }
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Xatolik yuz berdi.");
        return;
      }

      if (isRegister) {
        setOpen(true);
        alert("Siz ro‘yxatdan o‘tdingiz!");
      } else {
        const token = data?.data?.Authorize;
        if (token) {
          localStorage.setItem("authToken", token);
          localStorage.setItem("email", data.data.email);
          localStorage.setItem("lastName", data.data.lastName);
          localStorage.setItem("firstName", data.data.firstName);
          localStorage.setItem("phone", data.data.phone);
          alert("Login muvaffaqiyatli bajarildi!");
          navigate(-1);
        }
      }
    } catch (error) {
      setError("Server bilan bog‘lanishda xatolik yuz berdi.");
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
            <form onSubmit={handleSubmit}>
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
                  <input
                    type="text"
                    name="phone"
                    placeholder="Telefon"
                    value={formData.phone}
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
                className="w-full mb-4 px-4 py-2 border rounded-lg"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2"
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

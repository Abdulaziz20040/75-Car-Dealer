import React, { useState } from "react";
import { FaFacebookF, FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");

  const handleToggle = () => {
    setIsRegister(!isRegister);
    setError("");
    setUsername("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Iltimos ma'lumotlarni to'ldiring");
      return;
    }

    // Ma'lumotlarni localStorage-ga saqlash
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert(isRegister ? "Registered successfully!" : "Logged in successfully!");
    setUsername("");
    setPassword("");
    setError("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <div className="flex gap-3 mb-6">
          <button
            onClick={handleToggle}
            className={`${
              !isRegister
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600"
            }`}
          >
            Sign in
          </button>
          <button
            onClick={handleToggle}
            className={`${
              isRegister
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600"
            }`}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username or Email"
              className="w-full outline-none px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full outline-none px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>

          {isRegister && (
            <div className="mb-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Repeat Password"
                className="w-full outline-none px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
              />
            </div>
          )}

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 flex justify-center items-center"
          >
            {isRegister ? "Register" : "Login"} <span className="ml-2">→</span>
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-4 text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="flex gap-10">
          <button className="flex items-center justify-center border border-sky-400 text-sky-400 py-3 w-[230px] rounded-lg hover:bg-sky-200 hover:text-white">
            <span className="mr-2">
              <FaFacebookF />
            </span>
            Login with Facebook
          </button>
          <button className="flex items-center justify-center border border-red-400 text-red-400 py-3 w-[230px] rounded-lg hover:bg-red-200 hover:text-white">
            <span className="mr-2">
              <FaGoogle />
            </span>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/api";
import { useUserProfile } from "../context/UseProfileContext";

export default function Register() {
  const navigate = useNavigate();
  const { updateProfile } = useUserProfile() || { updateProfile: () => {} };

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    profession: "",
    username: "", 
    about_me: "", 
    dob: "",
    phone: "",
    interests: [],
    marital_status: "Single",
    height_ft: "",
    height_in: "",
    complexion: "",
    education: "",
    parents_name: "",
    address: "",
    maternal_uncle_name: "",
    buddh_vihar: "",
    alternate_phone: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Clear any existing user data before registration
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      if (updateProfile) {
        updateProfile(null);
      }

      const payload = {
        first_name: form.first_name,
        last_name: form.last_name,
        email: form.email,
        password: form.password,
        profession: form.profession,
        username: form.username,
        about_me: form.about_me || null,
        dob: form.dob || null,
        phone: form.phone || null,
        interests: form.interests,
        marital_status: form.marital_status,
        height_ft: form.height_ft ? Number(form.height_ft) : null,
        height_in: form.height_in ? Number(form.height_in) : null,
        complexion: form.complexion || null,
        education: form.education || null,
        parents_name: form.parents_name || null,
        address: form.address || null,
        maternal_uncle_name: form.maternal_uncle_name || null,
        buddh_vihar: form.buddh_vihar || null,
        alternate_phone: form.alternate_phone || null,
      };

      // Register the new user (API call only)
      await registerUser(payload);

      alert("Registration successful! Please login with your new account.");

      // Force clear everything again before navigation
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      if (updateProfile) {
        updateProfile(null);
      }

      navigate("/login", { replace: true });
    } catch (err) {
      console.error("Register error:", err);
      const msg =
        err?.response?.data?.error ||
        err?.response?.data?.message ||
        err?.message ||
        "Registration failed";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 px-4">
      <div className="max-w-md w-full bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-blue-100">
        {/* Header - HOME PAGE STYLE */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold">
            <span className="text-orange-500">BodhiBridal</span>
            <span className="text-red-500"> Matrimony</span>
          </h1>
          <p className="text-gray-600 mt-2">
            Create your account and start your journey
          </p>
        </div>

        {error && (
          <div className="bg-red-100 text-red-700 px-3 py-2 rounded-md mb-4 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                placeholder="John"
                value={form.first_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                placeholder="Doe"
                value={form.last_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="e.g., john_doe"
              value={form.username}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Profession
            </label>
            <input
              type="text"
              name="profession"
              placeholder="Software Engineer"
              value={form.profession}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white font-medium text-gray-700"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Mobile Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="e.g. +91 9876543210"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white font-medium text-gray-700"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Alternate Mobile Number (Optional)
              </label>
              <input
                type="tel"
                name="alternate_phone"
                placeholder="e.g. +91 9876543211"
                value={form.alternate_phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white font-medium text-gray-700"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Height (Feet)
              </label>
              <select
                name="height_ft"
                value={form.height_ft}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white text-gray-700"
              >
                <option value="">Select Ft</option>
                <option value="4">4'</option>
                <option value="5">5'</option>
                <option value="6">6'</option>
                <option value="7">7'</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Height (Inches)
              </label>
              <select
                name="height_in"
                value={form.height_in}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white text-gray-700"
              >
                <option value="">Select In</option>
                {[...Array(12).keys()].map((i) => (
                  <option key={i} value={i}>{i}"</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Complexion
              </label>
              <input
                type="text"
                name="complexion"
                placeholder="e.g. Fair / Medium"
                value={form.complexion}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Educational Qualification
            </label>
            <input
              type="text"
              name="education"
              placeholder="e.g. B.Com., M.A. / B.A.M.S."
              value={form.education}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Father's / Mother's Name
              </label>
              <input
                type="text"
                name="parents_name"
                placeholder="e.g. Ayu. Sudam Gajbhiye"
                value={form.parents_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Maternal Uncle's Name
              </label>
              <input
                type="text"
                name="maternal_uncle_name"
                placeholder="e.g. Ayu. Khushal Somkuwar"
                value={form.maternal_uncle_name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              BuddhVihar / Temple
            </label>
            <input
              type="text"
              name="buddh_vihar"
              placeholder="e.g. Rahul Nagar Buddh Vihar"
              value={form.buddh_vihar}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="e.g. J-359, Kotra Sultanabad, Bhopal (M.P.)"
              value={form.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              About Me
            </label>
            <textarea
              name="about_me" // ✅ name="about_me" corrected
              value={form.about_me}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about yourself..."
              className="w-full px-3 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Create a strong password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
            />
          </div>

          {/* BLUE BUTTON like home page */}
          {/* <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 mt-4 font-bold text-white rounded-lg shadow-md transition duration-200 ${
              loading
                ? "bg-blue-600 cursor-not-allowed opacity-90"
                : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg"
            }`}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button> */}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 mt-4 font-bold text-white rounded-lg shadow-md transition duration-200 ${
              loading
                ? "bg-orange-400 cursor-not-allowed opacity-80"
                : "bg-gradient-to-r from-red-400 to-red-400 hover:from-red-400 hover:to-red-400 hover:shadow-lg"
            }`}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              onClick={() => {
                localStorage.removeItem("user");
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
              }}
              className="font-bold text-red-400 hover:text-red-400 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

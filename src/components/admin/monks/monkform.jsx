// import React, { useState, useEffect } from "react";
// //import { createMonk, updateMonk } from "../../services/monkApi";
// import { createMonk, updateMonk } from "../../services/monksApi";

// const MonkForm = ({ fetchMonks, editingMonk, setEditingMonk }) => {
//   const [form, setForm] = useState({
//     name: "",
//     title: "",
//     birth_place: "",
//     short_desc: "",
//     image: null,
//   });

//   useEffect(() => {
//     if (editingMonk) {
//       setForm({
//         ...editingMonk,
//         image: null,
//       });
//     }
//   }, [editingMonk]);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;

//     if (name === "image") {
//       setForm({ ...form, image: files[0] });
//     } else {
//       setForm({ ...form, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();

//     Object.keys(form).forEach((key) => {
//       if (form[key]) {
//         formData.append(key, form[key]);
//       }
//     });

//     if (editingMonk) {
//       await updateMonk(editingMonk.id, formData);
//     } else {
//       await createMonk(formData);
//     }

//     setForm({
//       name: "",
//       title: "",
//       birth_place: "",
//       short_desc: "",
//       image: null,
//     });

//     setEditingMonk(null);
//     fetchMonks();
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
//       <h3>{editingMonk ? "Edit Monk" : "Add Monk"}</h3>

//       <input
//         type="text"
//         name="name"
//         placeholder="Name"
//         value={form.name}
//         onChange={handleChange}
//       />

//       <input
//         type="text"
//         name="title"
//         placeholder="Title"
//         value={form.title}
//         onChange={handleChange}
//       />

//       <input
//         type="text"
//         name="birth_place"
//         placeholder="Birth Place"
//         value={form.birth_place}
//         onChange={handleChange}
//       />

//       <textarea
//         name="short_desc"
//         placeholder="Short Description"
//         value={form.short_desc}
//         onChange={handleChange}
//       />

//       <input type="file" name="image" onChange={handleChange} />

//       <br />

//       <button type="submit">
//         {editingMonk ? "Update Monk" : "Create Monk"}
//       </button>
//     </form>
//   );
// };

// export default MonkForm;

import { useState, useEffect } from "react";
import { createMonk, updateMonk } from "../../services/monkApi";

const MonkForm = ({ editingMonk, refresh, setEditingMonk }) => {
  const [form, setForm] = useState({
    name: "",
    title: "",
    period: "",
    birth_place: "",
    history: "",
    famous_quote: "",
    image: null,
  });
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editingMonk) {
      setForm({
        ...editingMonk,
        image: null,
      });
      setPreview(editingMonk.image_url);
    } else {
      setForm({
         name: "",
        title: "",
        period: "",
        birth_place: "",
        history: "",
        famous_quote: "",
        image: null
      });
      setPreview(null);
    }
  }, [editingMonk]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      if (file) {
        setForm({ ...form, image: file });
        setPreview(URL.createObjectURL(file));
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    const fields = [
       "name",
      "title",
      "period",
      "birth_place",
      "history",
      "famous_quote",
      "image",
    ];
    fields.forEach((key) => {
      if (form[key] !== undefined && form[key] !== null) {
        data.append(key, form[key]);
      }
    });

    try {
      if (editingMonk) {
        await updateMonk(editingMonk.id, data);
      } else {
        await createMonk(data);
      }
      refresh();
      setEditingMonk(null);
    } catch (error) {
      console.error("Error saving monk:", error);
      alert("Failed to save Buddhist master");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-4xl mx-auto mb-10 transform transition-all duration-300 hover:shadow-2xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
        <span className="w-2 h-8 bg-amber-600 rounded-full"></span>
        {editingMonk ? "Edit Buddhist Master" : "Add New Master"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600 ml-1">
              Full Name
            </label>
            <input
              name="name"
              value={form.name}
              placeholder="e.g. Dilgo Khyentse Rinpoche"
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600 ml-1">
              Title
            </label>
            <input
              name="title"
              value={form.title || ""}
              placeholder="title (e.g. His Holiness, Venerable, etc.)"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white"
            />
          </div>
          {/* <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600 ml-1">Nationality</label>
            <input
              name="nationality"
              value={form.nationality || ""}
              placeholder="e.g. Tibetan"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white"
            />
          </div> */}

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600 ml-1">
              Period
            </label>
            <input
              name="period"
              value={form.period || ""}
              placeholder="e.g. 1910"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600 ml-1">
              Birth Place
            </label>
            <input
              name="birth_place"
              value={form.birth_place || ""}
              placeholder="e.g. Lhasa, Tibet"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-semibold text-gray-600 ml-1">
              Famous Quote
            </label>
            <input
              name="famous_quote"
              value={form.famous_quote || ""}
              placeholder="Enter a famous quote from the master..."
              onChange={handleChange}
               rows="3"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-600 ml-1">
            History
          </label>
          <textarea
            name="history"
            value={form.history || ""}
            placeholder="Enter the master's history..."
            onChange={handleChange}
            rows="6"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white"
          />
        </div>

        <div className="space-y-4">
          <label className="text-sm font-semibold text-gray-600 ml-1">
            Master's Portrait
          </label>
          <div className="flex items-center gap-6">
            <div
              className={`w-32 h-32 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50 overflow-hidden relative group transition-all duration-300 ${preview ? "border-amber-400" : "hover:border-amber-300"}`}
            >
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <div className="text-gray-400 text-center flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mb-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span className="text-xs">No Photo</span>
                </div>
              )}
              <input
                type="file"
                name="image"
                onChange={handleChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-2">
                Click the circle to upload a photo. Square aspect ratio works
                best.
              </p>
              <p className="text-xs text-amber-600 font-medium tracking-wide">
                JPG, PNG, WEBP (Max 5MB)
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            disabled={loading}
            className={`flex-1 bg-amber-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-amber-200 hover:bg-amber-700 hover:shadow-amber-300 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : null}
            {editingMonk ? "Update Master" : "Create Master"}
          </button>

          {editingMonk && (
            <button
              type="button"
              onClick={() => setEditingMonk(null)}
              className="px-8 bg-gray-100 text-gray-600 font-bold py-4 rounded-xl hover:bg-gray-200 transition-all active:scale-95"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MonkForm;

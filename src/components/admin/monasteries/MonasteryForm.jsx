// import { useState } from "react";
// // import {
// //   createMonastery,
// //   updateMonastery
// // } from "../../../services/monasteryService";
// import { createMonastery, updateMonastery } from "../../../services/monasteriesApi";

// const MonasteryForm = ({ editing, refresh }) => {

//   const [form, setForm] = useState({
//     name: "",
//     country: "",
//     location: "",
//     altitude: "",
//     founded_year: "",
//     type: "",
//     short_desc: "",
//     history: "",
//     image: null
//   });

//   const handleChange = (e) => {

//     const { name, value, files } = e.target;

//     if (files) {
//       setForm({ ...form, image: files[0] });
//     } else {
//       setForm({ ...form, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = new FormData();

//     Object.keys(form).forEach((key) => {
//       data.append(key, form[key]);
//     });

//     if (editing) {
//       await updateMonastery(editing.id, data);
//     } else {
//       await createMonastery(data);
//     }

//     refresh();
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="grid grid-cols-2 gap-4 bg-white p-6 shadow"
//     >

//       <input name="name" placeholder="Name" onChange={handleChange} />
//       <input name="country" placeholder="Country" onChange={handleChange} />
//       <input name="location" placeholder="Location" onChange={handleChange} />
//       <input name="altitude" placeholder="Altitude" onChange={handleChange} />
//       <input name="founded_year" placeholder="Founded Year" onChange={handleChange} />
//       <input name="type" placeholder="Type" onChange={handleChange} />

//       <textarea
//         name="short_desc"
//         placeholder="Short Description"
//         onChange={handleChange}
//       />

//       <textarea
//         name="history"
//         placeholder="History"
//         onChange={handleChange}
//       />

//       <input type="file" onChange={handleChange} />

//       <button className="bg-green-600 text-white p-2 rounded col-span-2">
//         Save
//       </button>

//     </form>
//   );
// };

// export default MonasteryForm;



import { useState, useEffect } from "react";
import { createMonastery, updateMonastery } from "../../services/monasteriesApi";

const MonasteryForm = ({ editing, refresh, setEditing }) => {
  const [form, setForm] = useState({
    name: "",
    country: "",
    location: "",
    altitude: "",
    founded_year: "",
    type: "",
    short_desc: "",
    history: "",
    display_order: 0,
    image: null
  });
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editing) {
      setForm({
        ...editing,
        image: null
      });
      setPreview(editing.image_url);
    } else {
      setForm({
        name: "",
        country: "",
        location: "",
        altitude: "",
        founded_year: "",
        type: "",
        short_desc: "",
        history: "",
        display_order: 0,
        image: null
      });
      setPreview(null);
    }
  }, [editing]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      setForm({ ...form, image: file });
      setPreview(URL.createObjectURL(file));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    const fields = ["name", "country", "location", "altitude", "founded_year", "type", "short_desc", "history", "display_order", "image"];
    fields.forEach((key) => {
      if (form[key] !== undefined && form[key] !== null) {
        data.append(key, form[key]);
      }
    });


    try {
      if (editing) {
        await updateMonastery(editing.id, data);
      } else {
        await createMonastery(data);
      }
      refresh();
      setEditing(null);
    } catch (error) {
      console.error("Error saving monastery:", error);
      alert("Failed to save monastery");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-4xl mx-auto mb-10 transform transition-all duration-300 hover:shadow-2xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
        <span className="w-2 h-8 bg-indigo-600 rounded-full"></span>
        {editing ? "Edit Monastery" : "Add New Monastery"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600 ml-1">Monastery Name</label>
            <input
              name="name"
              value={form.name}
              placeholder="e.g. Shaolin Monastery"
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600 ml-1">Country</label>
            <input
              name="country"
              value={form.country}
              placeholder="e.g. China"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600 ml-1">Location / District</label>
            <input
              name="location"
              value={form.location}
              placeholder="e.g. Henan Province"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600 ml-1">Altitude (meters)</label>
            <input
              name="altitude"
              value={form.altitude || ""}
              placeholder="e.g. 1500m"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600 ml-1">Founded Year</label>
            <input
              name="founded_year"
              value={form.founded_year || ""}
              placeholder="e.g. 495 AD"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600 ml-1">Type / Tradition</label>
            <input
              name="type"
              value={form.type || ""}
              placeholder="e.g. Zen / Chan"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600 ml-1">Display Order</label>
            <input
              type="number"
              name="display_order"
              value={form.display_order || 0}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-600 ml-1">Short Description</label>
          <textarea
            name="short_desc"
            value={form.short_desc || ""}
            placeholder="A brief summary of the monastery..."
            onChange={handleChange}
            rows="2"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white resize-none"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-600 ml-1">Full History</label>
          <textarea
            name="history"
            value={form.history || ""}
            placeholder="Detailed historical background..."
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white"
          />
        </div>

        <div className="space-y-4">
          <label className="text-sm font-semibold text-gray-600 ml-1">Monastery Image</label>
          <div className="flex items-center gap-6">
            <div className={`w-32 h-32 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50 overflow-hidden relative group transition-all duration-300 ${preview ? 'border-indigo-400' : 'hover:border-indigo-300'}`}>
              {preview ? (
                <img src={preview} alt="Preview" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              ) : (
                <div className="text-gray-400 text-center flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs">No Image</span>
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
              <p className="text-sm text-gray-500 mb-2">Click the box to upload an image. Best size: 800x600px, max 5MB.</p>
              <p className="text-xs text-indigo-600 font-medium">Supports: JPG, PNG, WEBP</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            disabled={loading}
            className={`flex-1 bg-indigo-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-indigo-300 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : null}
            {editing ? "Update Monastery" : "Create Monastery"}
          </button>

          {editing && (
            <button
              type="button"
              onClick={() => setEditing(null)}
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

export default MonasteryForm;

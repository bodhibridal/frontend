// import React, { useEffect, useState } from "react";
// // import {
// //   getTeachings,
// //   addTeaching,
// //   deleteTeaching,
// //   updateTeaching,
// // } from "../../services/teachingApi";
// import { getTeachings, addTeaching, deleteTeaching, updateTeaching } from "../../services/teachingApi";

// const TeachingsPage = () => {
//   const [teachings, setTeachings] = useState([]);
//   const [monkId, setMonkId] = useState("");
//   const [teaching, setTeaching] = useState("");
//   const [editingId, setEditingId] = useState(null);

//   const fetchTeachings = async () => {
//     if (!monkId) return;
//     const data = await getTeachings(monkId);
//     setTeachings(data);
//   };

//   useEffect(() => {
//     fetchTeachings();
//   }, [monkId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = {
//       monk_id: monkId,
//       teaching,
//     };

//     if (editingId) {
//       await updateTeaching(editingId, payload);
//     } else {
//       await addTeaching(payload);
//     }

//     setTeaching("");
//     setEditingId(null);
//     fetchTeachings();
//   };

//   const handleDelete = async (id) => {
//     await deleteTeaching(id);
//     fetchTeachings();
//   };

//   const handleEdit = (item) => {
//     setTeaching(item.teaching);
//     setEditingId(item.id);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Teachings Management</h2>

//       <input
//         placeholder="Enter Monk ID"
//         value={monkId}
//         onChange={(e) => setMonkId(e.target.value)}
//       />

//       <form onSubmit={handleSubmit}>
//         <input
//           placeholder="Teaching"
//           value={teaching}
//           onChange={(e) => setTeaching(e.target.value)}
//         />

//         <button type="submit">
//           {editingId ? "Update Teaching" : "Add Teaching"}
//         </button>
//       </form>

//       <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Teaching</th>
//             <th>Actions</th>
//           </tr>
//         </thead>

//         <tbody>
//           {teachings.map((t) => (
//             <tr key={t.id}>
//               <td>{t.id}</td>
//               <td>{t.teaching}</td>

//               <td>
//                 <button onClick={() => handleEdit(t)}>Edit</button>

//                 <button
//                   onClick={() => handleDelete(t.id)}
//                   style={{ marginLeft: "10px", color: "red" }}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TeachingsPage;




import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTeachings, addTeaching, deleteTeaching, updateTeaching } from "../../services/teachingApi";
import { getMonks } from "../../services/monkApi";

const TeachingsPage = () => {
  const navigate = useNavigate();

  const [monks, setMonks] = useState([]);
  const [teachings, setTeachings] = useState([]);
  const [monkId, setMonkId] = useState("");
  const [teaching, setTeaching] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [monksLoading, setMonksLoading] = useState(true);

  useEffect(() => {
    const fetchMonks = async () => {
      try {
        const data = await getMonks();
        setMonks(data);
      } catch (error) {
        console.error("Error fetching monks:", error);
      } finally {
        setMonksLoading(false);
      }
    };
    fetchMonks();
  }, []);

  const fetchTeachings = async () => {
    if (!monkId) {
      setTeachings([]);
      return;
    }
    setLoading(true);
    try {
      const data = await getTeachings(monkId);
      setTeachings(data);
    } catch (error) {
      console.error("Error fetching teachings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeachings();
  }, [monkId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!monkId) {
      alert("Please select a master first");
      return;
    }

    const payload = {
      monk_id: monkId,
      teaching,
    };

    try {
      if (editingId) {
        await updateTeaching(editingId, payload);
      } else {
        await addTeaching(payload);
      }
      setTeaching("");
      setEditingId(null);
      fetchTeachings();
    } catch (error) {
      console.error("Error saving teaching:", error);
      alert("Failed to save teaching");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this teaching?")) {
      try {
        await deleteTeaching(id);
        fetchTeachings();
      } catch (error) {
        console.error("Error deleting teaching:", error);
      }
    }
  };

  const handleEdit = (item) => {
    setTeaching(item.teaching);
    setEditingId(item.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedMonk = monks.find(m => m.id.toString() === monkId.toString());

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate("/admin")}
          className="flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-800 transition-colors mb-6 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Dashboard
        </button>

        <header className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Teachings</h1>
          <p className="mt-2 text-lg text-gray-600">Manage spiritual teachings for each Buddhist Master.</p>
        </header>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="md:col-span-1 border-r border-gray-200 pr-0 md:pr-8">
            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Select Master</label>
            <div className="relative">
              <select
                value={monkId}
                onChange={(e) => setMonkId(e.target.value)}
                className="w-full pl-4 pr-10 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white shadow-sm appearance-none transition-all cursor-pointer hover:border-emerald-300"
              >
                <option value="">-- Choose a Master --</option>
                {monks.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {selectedMonk && (
              <div className="mt-8 p-6 bg-white rounded-2xl border border-gray-100 shadow-lg text-center animate-in fade-in zoom-in-95 duration-300">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-emerald-100 p-1 shadow-inner overflow-hidden">
                  <img src={selectedMonk.image_url || 'https://via.placeholder.com/150'} alt={selectedMonk.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1">{selectedMonk.name}</h3>
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest">{selectedMonk.tradition || 'Buddhist Tradition'}</p>
              </div>
            )}
          </div>

          <div className="md:col-span-2">
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                {editingId ? "Update Teaching" : "Add New Teaching"}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <textarea
                  placeholder="Enter the wisdom or teaching here..."
                  value={teaching}
                  onChange={(e) => setTeaching(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white min-h-[120px] resize-none text-gray-700 leading-relaxed"
                  required
                />
                <div className="flex justify-end gap-3">
                  {editingId && (
                    <button
                      type="button"
                      onClick={() => { setEditingId(null); setTeaching(""); }}
                      className="px-6 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition-all"
                    >
                      Cancel
                    </button>
                  )}
                  <button
                    type="submit"
                    disabled={!monkId}
                    className="px-10 py-3 bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-200 hover:bg-emerald-700 hover:shadow-emerald-300 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {editingId ? "Update Wisdom" : "Save Teaching"}
                  </button>
                </div>
              </form>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest pl-1">Collected Teachings</h3>
              {loading ? (
                <div className="text-center py-20">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto mb-3"></div>
                  <p className="text-gray-500">Retrieving wisdom...</p>
                </div>
              ) : !monkId ? (
                <div className="bg-indigo-50 border border-indigo-100 p-10 rounded-3xl text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <h4 className="font-bold text-indigo-900 text-lg mb-1">No Master Selected</h4>
                  <p className="text-indigo-600">Please select a Buddhist Master from the left to view and manage their teachings.</p>
                </div>
              ) : teachings.length === 0 ? (
                <div className="bg-gray-100 p-10 rounded-3xl text-center border-2 border-dashed border-gray-200">
                  <p className="text-gray-500 font-medium italic">No teachings recorded for this master yet.</p>
                </div>
              ) : (
                <div className="grid gap-4">
                  {teachings.map((t) => (
                    <div key={t.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all group relative overflow-hidden">
                      <div className="absolute left-0 top-0 w-1 h-full bg-emerald-500"></div>
                      <p className="text-gray-700 italic leading-relaxed pr-20">"{t.teaching}"</p>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => handleEdit(t)}
                          className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
                          title="Edit"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDelete(t.id)}
                          className="p-2 text-red-500 hover:bg-red-50 py-1 rounded-lg transition-all"
                          title="Delete"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachingsPage;
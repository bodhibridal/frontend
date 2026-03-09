// import { useEffect, useState } from "react";
// // import {
// //   getMonasteries,
// //   deleteMonastery
// // } from "../../../services/monasteryService";

// // import MonasteryForm from "./MonasteryForm";

// import { getMonasteries, deleteMonastery } from "../../../services/monasteriesApi";
// import MonasteryForm from "./MonasteryForm";

// const MonasteriesPage = () => {

//   const [monasteries, setMonasteries] = useState([]);
//   const [editing, setEditing] = useState(null);

//   const loadData = async () => {
//     const data = await getMonasteries();
//     setMonasteries(data);
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   const handleDelete = async (id) => {
//     if (confirm("Delete monastery?")) {
//       await deleteMonastery(id);
//       loadData();
//     }
//   };

//   return (
//     <div>

//       <h1 className="text-2xl font-bold mb-6">
//         Monasteries Management
//       </h1>

//       <MonasteryForm
//         editing={editing}
//         refresh={loadData}
//       />

//       <table className="w-full bg-white shadow mt-6">

//         <thead className="bg-gray-200">
//           <tr>
//             <th>Name</th>
//             <th>Country</th>
//             <th>Location</th>
//             <th>Actions</th>
//           </tr>
//         </thead>

//         <tbody>
//           {monasteries.map((m) => (
//             <tr key={m.id} className="border-t">

//               <td>{m.name}</td>
//               <td>{m.country}</td>
//               <td>{m.location}</td>

//               <td className="space-x-2">

//                 <button
//                   onClick={() => setEditing(m)}
//                   className="bg-blue-500 text-white px-3 py-1 rounded"
//                 >
//                   Edit
//                 </button>

//                 <button
//                   onClick={() => handleDelete(m.id)}
//                   className="bg-red-500 text-white px-3 py-1 rounded"
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

// export default MonasteriesPage;



import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMonasteries, deleteMonastery } from "../../services/monasteriesApi";
import MonasteryForm from "./MonasteryForm";

const MonasteriesPage = () => {
  const navigate = useNavigate();

  const [monasteries, setMonasteries] = useState([]);
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await getMonasteries();
      setMonasteries(data);
    } catch (error) {
      console.error("Error loading monasteries:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this monastery? This action cannot be undone.")) {
      try {
        await deleteMonastery(id);
        loadData();
      } catch (error) {
        console.error("Error deleting monastery:", error);
        alert("Failed to delete monastery");
      }
    }
  };

  const handleEdit = (m) => {
    setEditing(m);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate("/admin")}
          className="flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-800 transition-colors mb-6 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Dashboard
        </button>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">

              Monasteries
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Manage Buddhist monasteries and historical sites.
            </p>
          </div>

          <button
            onClick={() => {
              setShowForm(!showForm);
              if (showForm) setEditing(null);
            }}
            className={`px-6 py-3 rounded-xl font-bold transition-all duration-200 shadow-lg flex items-center gap-2 ${showForm ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-indigo-200'}`}
          >
            {showForm ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Close Form
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Add Monastery
              </>
            )}
          </button>
        </div>

        {showForm && (
          <div className="mb-12 animate-in fade-in slide-in-from-top-4 duration-500">
            <MonasteryForm
              editing={editing}
              refresh={loadData}
              setEditing={(val) => {
                setEditing(val);
                if (!val) setShowForm(false);
              }}
            />
          </div>
        )}

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 transition-all hover:shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100">
                  <th className="px-6 py-5 text-sm font-bold text-gray-500 uppercase tracking-wider">Monastery</th>
                  <th className="px-6 py-5 text-sm font-bold text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-5 text-sm font-bold text-gray-500 uppercase tracking-wider text-center">Order</th>
                  <th className="px-6 py-5 text-sm font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {loading ? (
                  <tr>
                    <td colSpan="4" className="px-6 py-20 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600"></div>
                        <span className="text-gray-500 font-medium">Loading monasteries...</span>
                      </div>
                    </td>
                  </tr>
                ) : monasteries.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="px-6 py-20 text-center text-gray-500 font-medium">
                      No monasteries found. Start by adding one!
                    </td>
                  </tr>
                ) : (
                  monasteries.map((m) => (
                    <tr key={m.id} className="hover:bg-indigo-50/30 transition-colors group">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-200">
                            {m.image_url ? (
                              <img src={m.image_url} alt={m.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              </div>
                            )}
                          </div>
                          <div>
                            <div className="font-bold text-gray-900 text-lg">{m.name}</div>
                            <div className="text-sm text-gray-500 font-medium">{m.type || 'General'} • Founded {m.founded_year || 'Unknown'}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex flex-col">
                          <span className="font-semibold text-gray-700">{m.country}</span>
                          <span className="text-sm text-gray-500">{m.location}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-gray-600 font-bold text-sm">
                          {m.display_order}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-right space-x-3">
                        <button
                          onClick={() => handleEdit(m)}
                          className="p-2 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-lg transition-all"
                          title="Edit"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDelete(m.id)}
                          className="p-2 text-red-500 hover:bg-red-500 hover:text-white rounded-lg transition-all"
                          title="Delete"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonasteriesPage;
// import React, { useEffect, useState } from "react";
// //import { getMonks, deleteMonk } from "../../services/monkApi";
// //import MonkForm from "./MonkForm";
// //import { getMonks, deleteMonk } from "../../services/monksApi";
// import { getMonks, deleteMonk} from "../../services/monkApi";
// import MonkForm from "./monkform";
// const MonksPage = () => {
//   const [monks, setMonks] = useState([]);
//   const [editingMonk, setEditingMonk] = useState(null);

//   const fetchMonks = async () => {
//     const data = await getMonks();
//     setMonks(data);
//   };

//   useEffect(() => {
//     fetchMonks();
//   }, []);

//   const handleDelete = async (id) => {
//     if (window.confirm("Delete this monk?")) {
//       await deleteMonk(id);
//       fetchMonks();
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Monks Management</h2>

//       <MonkForm
//         fetchMonks={fetchMonks}
//         editingMonk={editingMonk}
//         setEditingMonk={setEditingMonk}
//       />

//       <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Title</th>
//             <th>Birth Place</th>
//             <th>Actions</th>
//           </tr>
//         </thead>

//         <tbody>
//           {monks.map((monk) => (
//             <tr key={monk.id}>
//               <td>{monk.name}</td>
//               <td>{monk.title}</td>
//               <td>{monk.birth_place}</td>

//               <td>
//                 <button onClick={() => setEditingMonk(monk)}>Edit</button>

//                 <button
//                   onClick={() => handleDelete(monk.id)}
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

// export default MonksPage;



import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMonks, deleteMonk } from "../../services/monkApi";
import MonkForm from "./monkform";

const MonksPage = () => {
  const navigate = useNavigate();

  const [monks, setMonks] = useState([]);
  const [editingMonk, setEditingMonk] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchMonks = async () => {
    setLoading(true);
    try {
      const data = await getMonks();
      setMonks(data);
    } catch (error) {
      console.error("Error fetching monks:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMonks();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this Buddhist Master? All their teachings will also be removed.")) {
      try {
        await deleteMonk(id);
        fetchMonks();
      } catch (error) {
        console.error("Error deleting master:", error);
        alert("Failed to delete master");
      }
    }
  };

  const handleEdit = (monk) => {
    setEditingMonk(monk);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate("/admin")}
          className="flex items-center gap-2 text-amber-600 font-bold hover:text-amber-800 transition-colors mb-6 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Dashboard
        </button>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">

              Buddhist Masters
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Manage profiles and biographies of revered monks.
            </p>
          </div>

          <button
            onClick={() => {
              setShowForm(!showForm);
              if (showForm) setEditingMonk(null);
            }}
            className={`px-6 py-3 rounded-xl font-bold transition-all duration-200 shadow-lg flex items-center gap-2 ${showForm ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' : 'bg-amber-600 text-white hover:bg-amber-700 hover:shadow-amber-200'}`}
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
                Add Master
              </>
            )}
          </button>
        </div>

        {showForm && (
          <div className="mb-12 animate-in fade-in slide-in-from-top-4 duration-500">
            <MonkForm
              editingMonk={editingMonk}
              refresh={fetchMonks}
              setEditingMonk={(val) => {
                setEditingMonk(val);
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
                  <th className="px-6 py-5 text-sm font-bold text-gray-500 uppercase tracking-wider">Master</th>
                  <th className="px-6 py-5 text-sm font-bold text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-5 text-sm font-bold text-gray-500 uppercase tracking-wider">Birth Place</th>
                  <th className="px-6 py-5 text-sm font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {loading ? (
                  <tr>
                    <td colSpan="4" className="px-6 py-20 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-amber-600"></div>
                        <span className="text-gray-500 font-medium">Loading masters...</span>
                      </div>
                    </td>
                  </tr>
                ) : monks.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="px-6 py-20 text-center text-gray-500 font-medium">
                      No Buddhist masters found.
                    </td>
                  </tr>
                ) : (
                  monks.map((monk) => (
                    <tr key={monk.id} className="hover:bg-amber-50/30 transition-colors group">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 border-2 border-white shadow-sm ring-1 ring-gray-100 group-hover:ring-amber-200 group-hover:shadow-md transition-all duration-300">
                            {monk.image_url ? (
                              <img src={monk.image_url} alt={monk.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                              </div>
                            )}
                          </div>
                          <div>
                            <div className="font-bold text-gray-900 text-lg group-hover:text-amber-700 transition-colors">{monk.name}</div>
                            <div className="text-sm text-gray-500 font-medium">
                              {monk.period ? ` ${monk.period }` : ''}
                              {/* {monk.birth_place ? `b. ${monk.birth_place}` : 'N/A'} */}
                              {/* {monk.death_year ? ` - d. ${monk.death_year}` : (monk.period ? ' - Present' : '')} */}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 uppercase tracking-wider">
                          {monk.title || 'General'}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <div className="font-semibold text-gray-700">{monk.birth_place  || 'Unknown'}</div>
                      </td>
                      <td className="px-6 py-5 text-right space-x-3">
                        <button
                          onClick={() => handleEdit(monk)}
                          className="p-2 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-lg transition-all"
                          title="Edit"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDelete(monk.id)}
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

export default MonksPage;
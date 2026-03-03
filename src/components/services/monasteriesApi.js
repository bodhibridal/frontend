
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://backend-5e2b.onrender.com";
  //"https://backend-q0wc.onrender.com";
/**
 * Fetch all Buddhist Monks from database
 */
export const fetchAllMonks = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/monks`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching monks:', error);
    throw error;
  }
};

/**
 * Fetch single monk by ID
 */
export const fetchMonkById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/monks/${id}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(`Error fetching monk with ID ${id}:`, error);
    throw error;
  }
};
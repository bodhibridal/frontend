import AdminLogin from './AdminLogin';

const ProtectedRoute = ({ children }) => {
  const adminToken = localStorage.getItem('adminToken');
  
  if (!adminToken) {
    return <AdminLogin />;
  }
  
  return children;
};

export default ProtectedRoute;

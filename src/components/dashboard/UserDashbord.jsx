// src/components/dashboard/UserDashboard.jsx
import React, { useEffect, useState, useCallback } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useUserProfile } from "../context/UseProfileContext";
import { userAPI } from "../services/userApi";
import Sidebar from "./Sidebar";
import DashboardHome from "./DashboardContent";
import MessagesSection from "./MessagesSection";
import ProfilePage from "../profiles/ProfilePage";
import EditProfilePage from "../profiles/EditProfile";
import MatchesPage from "../MatchSystem/MatchesPage";
import MemberPage from "../pages/MemberPage";
import AdvancedSearch from "./SearchSection";
import UserPlans from "../pages/UserPlans";

export default function UserDashboard() {
  const { profile, loading } = useUserProfile();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [planStatus, setPlanStatus] = useState(null);

  // Get active section from URL
  const getActiveSection = useCallback(() => {
    const path = location.pathname;
    if (path === "/dashboard" || path === "/dashboard/") return "dashboard";
    if (path.includes("profile")) return "profile";
    if (path.includes("messages")) return "messages";
    if (path.includes("search")) return "search";
    if (path.includes("matches")) return "matches";
    if (path.includes("members")) return "members";
    if (path.includes("plans")) return "plans";
    return "dashboard";
  }, [location.pathname]);

  const activeSection = getActiveSection();

  // Redirect if no token & fetch plan status
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchPlan = async () => {
      try {
        const res = await userAPI.getPlanStatus();
        setPlanStatus(res.data);
      } catch (err) {
        console.error("Error fetching plan status:", err);
        setPlanStatus({ is_free: true, plan_type: "Free" });
      }
    };
    fetchPlan();
  }, [navigate]);

  // Compute permissions dynamically
  const getPermissions = () => {
    if (!planStatus || !planStatus.active) {
      return {
        isFree: true,
        isBasic: false,
        isPro: false,
        canAccessDashboard: false,
        canAccessMessages: false,
        canAccessSearch: false,
        canAccessMatches: false,
        canAccessMembers: false,
      };
    }

    const typeStr = (
      planStatus.plan_type ||
      planStatus.plan?.type ||
      planStatus.plan_name ||
      planStatus.plan?.name ||
      ""
    ).toLowerCase();

    const nameStr = (
      planStatus.plan_name ||
      planStatus.plan?.name ||
      ""
    ).toLowerCase();

    const price = Number(planStatus.plan?.price ?? planStatus.price ?? 0);
    const isFree = planStatus.is_free || typeStr === "free" || nameStr.includes("free") || price === 0;

    if (isFree) {
      return {
        isFree: true,
        isBasic: false,
        isPro: false,
        canAccessDashboard: false,
        canAccessMessages: false,
        canAccessMatches: false,
        canAccessSearch: false,
        canAccessMembers: false,
      };
    }

    // Explicitly check for Advance / Pro / Premium / Gold tier (or price >= 30)
    const isAdvanceOrPro =
      typeStr.includes("pro") ||
      typeStr.includes("advance") ||
      typeStr.includes("premium") ||
      typeStr.includes("gold") ||
      nameStr.includes("pro") ||
      nameStr.includes("advance") ||
      nameStr.includes("premium") ||
      nameStr.includes("gold") ||
      price >= 30;

    const isBasic = !isAdvanceOrPro;

    return {
      isFree: false,
      isBasic,
      isPro: isAdvanceOrPro,
      canAccessDashboard: true,
      canAccessMessages: true,
      canAccessMatches: true,
      canAccessSearch: isAdvanceOrPro,
      canAccessMembers: isAdvanceOrPro,
    };
  };

  const permissions = getPermissions();

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-3"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  // No profile state
  if (!profile) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-md">
          <div className="text-gray-400 text-3xl mb-3">👤</div>
          <h3 className="text-gray-800 text-lg mb-2">Create Your Profile</h3>
          <p className="text-gray-600 text-sm mb-4">
            Let's set up your profile to get started
          </p>
          <button
            onClick={() => navigate("/dashboard/edit-profile")}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-sm"
          >
            Create Profile
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Sidebar */}
      <Sidebar
        profile={profile}
        activeSection={activeSection}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        permissions={permissions}
        planStatus={planStatus}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <header className="lg:hidden bg-white shadow-sm p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition"
            >
              <span className="text-xl text-black">☰</span>
            </button>
            <h1 className="text-lg font-semibold text-gray-800 capitalize">
              {activeSection.replace("-", " ")}
            </h1>
            <div className="w-8"></div>
          </div>
        </header>

        {/* Routes & Feature Protection */}
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route
              index
              element={
                permissions.canAccessDashboard ? (
                  <DashboardHome profile={profile} />
                ) : (
                  <Navigate to="/dashboard/profile" replace />
                )
              }
            />
            <Route path="profile/:userId?" element={<ProfilePage />} />
            <Route path="edit-profile" element={<EditProfilePage />} />
            <Route
              path="messages"
              element={
                permissions.canAccessMessages ? (
                  <MessagesSection />
                ) : (
                  <Navigate to="/dashboard/plans" replace />
                )
              }
            />
            <Route
              path="search"
              element={
                permissions.canAccessSearch ? (
                  <AdvancedSearch />
                ) : (
                  <Navigate to="/dashboard/plans" replace />
                )
              }
            />
            <Route
              path="matches"
              element={
                permissions.canAccessMatches ? (
                  <MatchesPage />
                ) : (
                  <Navigate to="/dashboard/plans" replace />
                )
              }
            />
            <Route
              path="members"
              element={
                permissions.canAccessMembers ? (
                  <MemberPage />
                ) : (
                  <Navigate to="/dashboard/plans" replace />
                )
              }
            />
            <Route path="plans" element={<UserPlans />} />
            <Route
              path="*"
              element={
                <Navigate
                  to={permissions.isFree ? "/dashboard/profile" : "/dashboard"}
                  replace
                />
              }
            />
          </Routes>
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

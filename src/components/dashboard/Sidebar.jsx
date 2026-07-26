// src/components/dashboard/Sidebar.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SidebarItem = ({
  icon,
  label,
  active = false,
  isLocked = false,
  onClick,
  isDropdown = false,
  isOpen = false,
  onToggle,
  children,
}) => {
  if (isDropdown) {
    return (
      <div className="relative">
        <button
          onClick={onToggle}
          className={`w-full flex items-center gap-3 px-4 py-4 text-left rounded-xl transition-all duration-200 ${
            active
              ? "bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 border-r-2 border-indigo-600 shadow-sm font-semibold"
              : "text-gray-700 hover:bg-gray-50 hover:translate-x-1 font-medium"
          }`}
        >
          <span className="text-xl">{icon}</span>
          <span className="flex-1 font-medium">{label}</span>
          <span
            className={`transform transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>

        {isOpen && (
          <div className="ml-6 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50">
            {children}
          </div>
        )}
      </div>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-between w-full px-4 py-3.5 text-left rounded-xl transition-all duration-200 ${
        isLocked
          ? "bg-gray-50 text-gray-400 opacity-60 cursor-not-allowed border border-dashed border-gray-200 hover:bg-gray-100"
          : active
          ? "bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 border-r-2 border-indigo-600 shadow-sm font-semibold"
          : "text-gray-700 hover:bg-gray-50 hover:translate-x-1 font-medium"
      }`}
    >
      <div className="flex items-center">
        <span className="mr-3 text-xl">{icon}</span>
        <span className={isLocked ? "text-gray-400 font-normal" : ""}>{label}</span>
      </div>
      {isLocked && (
        <span className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full flex items-center gap-1 font-medium">
          🔒 Locked
        </span>
      )}
    </button>
  );
};

export default function Sidebar({
  profile,
  activeSection,
  sidebarOpen,
  setSidebarOpen,
  permissions = {
    isFree: true,
    isBasic: false,
    isPro: false,
    canAccessDashboard: false,
    canAccessMessages: false,
    canAccessSearch: false,
    canAccessMatches: false,
    canAccessMembers: false,
  },
  planStatus,
}) {
  const navigate = useNavigate();
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [upgradeModal, setUpgradeModal] = useState({ open: false, featureName: "" });

  const handleLockedClick = (featureName) => {
    setUpgradeModal({ open: true, featureName });
  };

  const planBadge = permissions.isPro
    ? { name: "Pro Member ⭐", bg: "bg-purple-100 text-purple-700 border-purple-300" }
    : permissions.isBasic
    ? { name: "Basic Member ⚡", bg: "bg-blue-100 text-blue-700 border-blue-300" }
    : { name: "Free Member 🔒", bg: "bg-gray-100 text-gray-600 border-gray-300" };

  return (
    <>
      {/* Overlay - Only for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Upgrade Feature Modal */}
      {upgradeModal.open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-gray-100 text-center animate-fadeIn">
            <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 shadow-inner">
              🔒
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Feature Locked</h3>
            <p className="text-gray-600 text-sm mb-6">
              <span className="font-semibold text-indigo-600">{upgradeModal.featureName}</span> is not accessible on your current plan ({planBadge.name}). Upgrade your membership to gain access!
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setUpgradeModal({ open: false, featureName: "" })}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition font-medium text-sm"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setUpgradeModal({ open: false, featureName: "" });
                  navigate("/dashboard/plans");
                  setSidebarOpen(false);
                }}
                className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition font-semibold text-sm flex items-center gap-2"
              >
                <span>⭐ Upgrade Plan</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-20 w-64 bg-white shadow-xl transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 h-screen flex flex-col overflow-hidden`}
      >
        <div className="flex-1 overflow-y-auto overflow-x-hidden py-4 px-4">
          <nav className="space-y-1">
            <SidebarItem
              icon="🏠"
              label="Dashboard"
              active={activeSection === "dashboard"}
              isLocked={!permissions.canAccessDashboard}
              onClick={() => {
                if (!permissions.canAccessDashboard) {
                  handleLockedClick("Dashboard");
                  return;
                }
                navigate("/dashboard");
                setSidebarOpen(false);
              }}
            />

            <SidebarItem
              icon="👤"
              label="Profile"
              active={
                activeSection === "profile" || activeSection === "edit-profile"
              }
              isDropdown={true}
              isOpen={profileDropdownOpen}
              onToggle={() => setProfileDropdownOpen(!profileDropdownOpen)}
            >
              <button
                onClick={() => {
                  navigate("/dashboard/profile");
                  setProfileDropdownOpen(false);
                  setSidebarOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 text-left text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
              >
                <span className="text-lg">👤</span>
                <span className="font-medium">View Profile</span>
              </button>
              <button
                onClick={() => {
                  navigate("/dashboard/edit-profile");
                  setProfileDropdownOpen(false);
                  setSidebarOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 text-left text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
              >
                <span className="text-lg">✏️</span>
                <span className="font-medium">Edit Profile</span>
              </button>
            </SidebarItem>

            <SidebarItem
              icon="💬"
              label="Messages"
              active={activeSection === "messages"}
              isLocked={!permissions.canAccessMessages}
              onClick={() => {
                if (!permissions.canAccessMessages) {
                  handleLockedClick("Messages");
                  return;
                }
                navigate("/dashboard/messages");
                setSidebarOpen(false);
              }}
            />

            <SidebarItem
              icon="🔍"
              label="Advanced Search"
              active={activeSection === "search"}
              isLocked={!permissions.canAccessSearch}
              onClick={() => {
                if (!permissions.canAccessSearch) {
                  handleLockedClick("Advanced Search");
                  return;
                }
                navigate("/dashboard/search");
                setSidebarOpen(false);
              }}
            />

            <SidebarItem
              icon="👥"
              label="My Matches"
              active={activeSection === "matches"}
              isLocked={!permissions.canAccessMatches}
              onClick={() => {
                if (!permissions.canAccessMatches) {
                  handleLockedClick("My Matches");
                  return;
                }
                navigate("/dashboard/matches");
                setSidebarOpen(false);
              }}
            />

            <SidebarItem
              icon="🌐"
              label="Browse Members"
              active={activeSection === "members"}
              isLocked={!permissions.canAccessMembers}
              onClick={() => {
                if (!permissions.canAccessMembers) {
                  handleLockedClick("Browse Members");
                  return;
                }
                navigate("/dashboard/members");
                setSidebarOpen(false);
              }}
            />

            <SidebarItem
              icon="💳"
              label="Plan"
              active={activeSection === "plans"}
              isLocked={false}
              onClick={() => {
                navigate("/dashboard/plans");
                setSidebarOpen(false);
              }}
            />
          </nav>
        </div>

        <div className="flex-shrink-0 p-4 border-t border-gray-200 bg-white">
          <div className="flex items-center gap-3 mb-4 p-3 bg-gray-50 rounded-xl">
            {profile?.profile_picture_url || profile?.profilePhoto ? (
              <img
                src={profile.profile_picture_url || profile.profilePhoto}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover border-2 border-indigo-500"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold">
                {profile?.full_name?.charAt(0) || "U"}
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-800 truncate">
                {profile?.full_name?.split(" ")[0] || "User"}
              </p>
              <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full border mt-0.5 ${planBadge.bg}`}>
                {planBadge.name}
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              localStorage.clear();
              window.location.href = "#/login";
            }}
            className="flex items-center w-full px-4 py-3 text-red-600 bg-red-50 rounded-xl hover:bg-red-100 transition-all duration-200 font-medium"
          >
            <span className="mr-3">🚪</span>
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

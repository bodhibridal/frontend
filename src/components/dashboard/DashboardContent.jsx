// src/components/dashboard/DashboardHome.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import StatCard from "../comman/StatCard";
import ActivityItem from "../comman/ActivityItem";
import QuickAction from "../comman/QuickAction";
import SuggestedMatches from "../MatchSystem/SuggetionMatches";
import { chatApi } from "../services/chatApi";
import { getSuggestedMatches } from "../services/chatApi";
import profileViewApi from "../services/profileViewApi";

export default function DashboardHome({ profile }) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [suggestedMatches, setSuggestedMatches] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // State for dynamic data
  const [profileViews, setProfileViews] = useState(0);
  const [recentViewers, setRecentViewers] = useState([]);
  const [totalViewers, setTotalViewers] = useState(0);
  const [matchesCount, setMatchesCount] = useState();
  const [connectionsCount, setConnectionsCount] = useState(0);
  const [messagesCount, setMessagesCount] = useState(0);

  // Get user ID
  const getUserId = () => {
    try {
      const user = localStorage.getItem("currentUser");
      if (user) {
        const userData = JSON.parse(user);
        return userData.user_id || userData.id || "135";
      }
      const storedUserId = localStorage.getItem("userId");
      return storedUserId || "135";
    } catch {
      return "135";
    }
  };

  const userId = getUserId();

  // // Fetch dashboard data
  // const fetchDashboardData = async () => {
  //   try {
  //     setLoading(true);
  //     const dashboardSummary = await profileViewApi.getDashboardSummary(userId);

  //     console.log("📊 Dashboard summary:", dashboardSummary);

  //     setProfileViews(dashboardSummary.profile_views || 0);
  //     setRecentViewers(dashboardSummary.recent_viewers || []);
  //     setTotalViewers(dashboardSummary.today_viewers || 0);
  //     setMessagesCount(dashboardSummary.messages_count || 0);

  //     if (dashboardSummary.matches_count !== undefined) {
  //       setMatchesCount(dashboardSummary.matches_count);
  //     }
  //     if (dashboardSummary.connections_count !== undefined) {
  //       setConnectionsCount(dashboardSummary.connections_count);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching dashboard data:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // ✅ UPDATED: Fetch dashboard data
  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      console.log("📊 Fetching dashboard data...");

      // First, fetch matches count (important)
      await fetchMatchesCount();

      // Then fetch dashboard summary
      try {
        const dashboardSummary =
          await profileViewApi.getDashboardSummary(userId);
        console.log("📊 Dashboard summary:", dashboardSummary);

        setProfileViews(dashboardSummary.profile_views || 0);
        setRecentViewers(dashboardSummary.recent_viewers || []);
        setTotalViewers(dashboardSummary.today_viewers || 0);
        setMessagesCount(dashboardSummary.messages_count || 0);

        // ✅ Override with dashboard matches count if available
        if (
          dashboardSummary.matches_count !== undefined &&
          dashboardSummary.matches_count !== null &&
          dashboardSummary.matches_count > 0
        ) {
          console.log(
            `📊 Using matches count from dashboard: ${dashboardSummary.matches_count}`,
          );
          setMatchesCount(dashboardSummary.matches_count);
        }

        if (dashboardSummary.connections_count !== undefined) {
          setConnectionsCount(dashboardSummary.connections_count);
        }
      } catch (dashboardError) {
        console.error("❌ Dashboard summary error:", dashboardError);
        // Continue with matches count from fetchMatchesCount
      }
    } catch (error) {
      console.error("❌ Error in fetchDashboardData:", error);
    } finally {
      setLoading(false);
    }
  };

  // Separate function for real-time messages update
  const fetchUnreadMessages = async () => {
    try {
      const count = await profileViewApi.getUnreadMessagesCount(userId);
      setMessagesCount(count);
      console.log("📩 Unread messages count:", count);
    } catch (error) {
      console.error("Failed to fetch unread messages:", error);
      setMessagesCount(0);
    }
  };

  // Handle clicks
  const handleProfileViewsClick = () => {
    navigate("/profile-views");
  };

  const handleRecentActivityClick = () => {
    navigate("/profile-views?tab=recent");
  };

  // Calculate time ago
  const getTimeAgo = (timestamp) => {
    if (!timestamp) return "Recently";

    const now = new Date();
    const viewTime = new Date(timestamp);
    const diffMs = now - viewTime;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return viewTime.toLocaleDateString();
  };

  // Handle viewer click
  const handleViewerClick = (viewerId) => {
    if (viewerId) {
      navigate(`/user-profile/${viewerId}`);
    }
  };

  useEffect(() => {
    if (userId && userId !== "null") {
      fetchDashboardData();

      // Refresh messages every 30 seconds
      const interval = setInterval(() => {
        fetchUnreadMessages();
      }, 30000);

      return () => clearInterval(interval);
    }
  }, [userId]);

  // // Fetch matches
  // useEffect(() => {
  //   fetchMatches();
  // }, []);

  // const fetchMatches = async () => {
  //   try {
  //     setLoading(true);
  //     setError(null);
  //     const data = await getSuggestedMatches();

  //     let matchesArray = [];
  //     if (Array.isArray(data)) {
  //       matchesArray = data;
  //     } else if (data && typeof data === "object") {
  //       if (data.id) {
  //         matchesArray = [data];
  //       } else if (data.data) {
  //         matchesArray = Array.isArray(data.data) ? data.data : [data.data];
  //       }
  //     }

  //     const limitedMatches = matchesArray.slice(0, 5);
  //     setSuggestedMatches(limitedMatches);
  //   } catch (err) {
  //     console.error("Error fetching matches:", err);
  //     setError("Failed to load matches. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // // Retry button ke liye
  // const handleRetry = () => {
  //   fetchMatches();
  // };

  // ✅ NEW FUNCTION: Fetch matches count from getSuggestedMatches
  const fetchMatchesCount = async () => {
    try {
      console.log("🔄 Fetching matches count from getSuggestedMatches...");

      // Get matches data
      const matchesData = await getSuggestedMatches();
      console.log("📊 Matches data for count:", matchesData);

      let matchesArray = [];

      // Handle different response formats
      if (Array.isArray(matchesData)) {
        matchesArray = matchesData;
      } else if (
        matchesData &&
        matchesData.data &&
        Array.isArray(matchesData.data)
      ) {
        matchesArray = matchesData.data;
      } else if (
        matchesData &&
        matchesData.matches &&
        Array.isArray(matchesData.matches)
      ) {
        matchesArray = matchesData.matches;
      } else if (
        matchesData &&
        matchesData.users &&
        Array.isArray(matchesData.users)
      ) {
        matchesArray = matchesData.users;
      }

      const count = matchesArray.length;
      console.log(`✅ Found ${count} matches`);

      // Update state
      setMatchesCount(count);
      return count;
    } catch (error) {
      console.error("❌ Error fetching matches count:", error);
      // Fallback to default 20
      setMatchesCount();
      return;
    }
  };

  // Search users function
  const handleSearch = async (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    setSearchLoading(true);
    try {
      const response = await chatApi.searchUsers(query);
      console.log("Search results:", response.data);

      const currentUserId = profile?.id || profile?.user_id;
      const filteredResults = (response.data || []).filter(
        (user) => user.id !== currentUserId,
      );

      setSearchResults(filteredResults);
      setShowSearchResults(true);
    } catch (error) {
      console.error("Search error:", error);
      setSearchResults([]);
    } finally {
      setSearchLoading(false);
    }
  };

  // Search effect with debounce
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery.trim()) {
        handleSearch(searchQuery);
      } else {
        setSearchResults([]);
        setShowSearchResults(false);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  // // Handle user selection from search
  // const handleUserSelectFromSearch = (user) => {
  //   console.log("Selected user from search:", user);
  //   navigate("/dashboard/messages");
  //   setSearchQuery("");
  //   setShowSearchResults(false);
  // };

  // // Close search results when clicking outside
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (!event.target.closest(".search-container")) {
  //       setShowSearchResults(false);
  //     }
  //   };

  //   document.addEventListener("click", handleClickOutside);
  //   return () => document.removeEventListener("click", handleClickOutside);
  // }, []);

  // Handle user selection from search
  const handleUserSelectFromSearch = (user) => {
    console.log("Selected user from search:", user);

    // ✅ State ke through user data pass karein
    navigate("/dashboard/messages", {
      state: {
        selectedUser: {
          id: user.id,
          name:
            user.name ||
            `${user.first_name || ""} ${user.last_name || ""}`.trim(),
          email: user.email,
          // Additional fields agar chahiye
          city: user.city,
          profession: user.profession,
        },
      },
    });

    setSearchQuery("");
    setShowSearchResults(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Welcome Header */}
        <header className="bg-white shadow-sm p-6 border-b border-gray-200 mb-6 rounded-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2 truncate">
                Welcome back,{" "}
                <span className="text-[#FF66CC]">
                  {profile?.first_name ||
                    profile?.last_name?.split(" ")[0] ||
                    profile?.name?.split(" ")[0] ||
                    "User"}
                  !
                </span>
              </h1>
              <p className="text-gray-600 text-sm lg:text-base">
                Manage and keep your profile updated for better matches.
              </p>
            </div>
            <div className="px-3 py-1.5 bg-amber-50 text-amber-700 border border-amber-200 rounded-xl text-xs font-semibold flex items-center gap-1.5 self-start sm:self-center">
              <span>🔒 Profile Mode Active</span>
            </div>
          </div>
        </header>

        {/* Main Content: Profile Card Only */}
        <div className="space-y-6">
          {/* Profile Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-gray-100">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                Your Profile Details
              </h2>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs sm:text-sm rounded-full font-medium flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span> Active
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs sm:text-sm rounded-full font-medium flex items-center gap-1">
                  ✓ Verified
                </span>
              </div>
            </div>

            {/* Profile Header Info */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Profile Picture */}
              <div className="flex-shrink-0">
                {profile?.image_url ? (
                  <img
                    src={profile.image_url}
                    alt="Profile"
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl object-cover border-4 border-white shadow-md ring-1 ring-gray-200"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold shadow-md flex-col">
                    {profile?.first_name?.charAt(0)}
                    {profile?.last_name?.charAt(0)}
                    <span className="text-xs mt-1 text-white/80">
                      Profile Pic
                    </span>
                  </div>
                )}
              </div>

              {/* Profile Info & Actions */}
              <div className="flex-1 w-full text-center sm:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">
                  {profile?.first_name && profile?.last_name
                    ? `${profile.first_name} ${profile.last_name}`
                    : profile?.name || "User"}
                </h3>
                <p className="text-gray-600 text-base sm:text-lg mb-2">
                  {profile?.profession ||
                    profile?.occupation ||
                    profile?.headline ||
                    "Not specified"}
                </p>
                <p className="text-gray-500 text-sm sm:text-base flex items-center justify-center sm:justify-start gap-1 mb-6">
                  📍 {profile?.city || profile?.location || "Location not set"} •
                  {profile?.age ? ` ${profile.age} years old` : " Age not set"}
                </p>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  <button
                    onClick={() => navigate("/dashboard/profile")}
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium text-sm transition shadow-sm flex items-center gap-2 cursor-pointer"
                  >
                    <span>👁️</span>
                    <span>View Full Profile</span>
                  </button>

                  <button
                    onClick={() => navigate("/dashboard/edit-profile")}
                    className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium text-sm transition shadow-sm flex items-center gap-2 cursor-pointer"
                  >
                    <span>✏️</span>
                    <span>Edit Profile</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Restriction Information Banner */}
          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-5 flex items-start gap-4 text-indigo-900 shadow-xs">
            <div className="text-2xl p-2 bg-indigo-100 rounded-lg flex-shrink-0">
              🔒
            </div>
            <div>
              <h4 className="font-semibold text-base mb-1 text-indigo-950">
                Dashboard Locked
              </h4>
              <p className="text-sm text-indigo-800 leading-relaxed">
                Other dashboard sections like Recent Activity, Suggested Matches, Messages, and Member Directory are restricted. You can view or edit your profile using the options above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

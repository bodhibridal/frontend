import React, { useEffect, useState } from "react";
import {
  fetchPlans,
  addToCart as addToCartAPI,
} from "../services/userPlans";
import { userAPI } from "../services/userApi";
import PlansList from "../userPlans/PlansList";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function UserPlans() {
  const [plans, setPlans] = useState([]);
  const [currentPlan, setCurrentPlan] = useState(null);
  const [config, setConfig] = useState({});
  const [loading, setLoading] = useState(true);
  const [buyingPlanId, setBuyingPlanId] = useState(null);
  const navigate = useNavigate();

  const loadData = async () => {
    try {
      setLoading(true);
      const [plansData, statusRes] = await Promise.all([
        fetchPlans(),
        userAPI.getPlanStatus().catch(() => null),
      ]);
      setPlans(plansData || []);
      if (statusRes && statusRes.data) {
        setCurrentPlan(statusRes.data);
      }
    } catch (err) {
      console.error("❌ Error fetching plans or status:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const addToCart = async (plan) => {
    try {
      await addToCartAPI(plan.id);
      toast.success(`${plan.name} has been added to your cart!`);
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (err) {
      console.error("❌ Error adding to cart:", err);
      if (err.response?.data?.message) {
        toast.info(err.response.data.message);
      } else {
        toast.error("Oops! We couldn't add that to your cart. Please log in.");
      }
    }
  };

  const handleBuy = async (plan) => {
    const userId = localStorage.getItem("user_id") || localStorage.getItem("userId");
    const token = localStorage.getItem("accessToken");

    if (!token && !userId) {
      toast.error("Please log in to select or upgrade your plan.");
      navigate("/login");
      return;
    }

    setBuyingPlanId(plan.id);
    try {
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3435";
      const res = await fetch(`${API_BASE_URL}/payments/create-checkout-session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify({ plan, user_id: userId }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to initiate checkout");
      }

      if (data.free) {
        toast.success("🎉 Free Plan activated successfully!");
        await loadData();
        window.location.reload();
      } else if (data.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout
      } else {
        toast.error("Unable to process purchase.");
      }
    } catch (err) {
      console.error("❌ Purchase error:", err);
      toast.error(err.message || "Checkout failed. Please try again.");
    } finally {
      setBuyingPlanId(null);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 min-h-[70vh]">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-3 text-gray-500 hover:text-indigo-600 font-semibold transition-all duration-300 group"
      >
        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-sm border border-gray-200 group-hover:bg-indigo-50 group-hover:border-indigo-200 transition-all">
          <i className="fa-solid fa-arrow-left text-sm"></i>
        </div>
        <span className="text-xs tracking-wide uppercase">Back</span>
      </button>

      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          ✨ Membership & Subscription Plans ✨
        </h2>
        <p className="text-gray-500 text-sm max-w-xl mx-auto">
          Choose the best plan to unlock features, start conversations, and find your perfect match.
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        </div>
      ) : (
        <PlansList
          plans={plans}
          config={config}
          planThemes={{}}
          addToCart={addToCart}
          handleBuy={handleBuy}
          currentPlan={currentPlan}
          buyingPlanId={buyingPlanId}
        />
      )}
    </div>
  );
}

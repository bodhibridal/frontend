
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

// Ultra‑simple success popup like Flipkart: full black overlay + green tick + "Successful"
export default function PaymentSuccess() {
  const [params] = useSearchParams();
  const sessionId = params.get("session_id");
  const planId = params.get("plan_id");
  const urlUserId = params.get("user_id");
  const [open, setOpen] = useState(true);
  const [activating, setActivating] = useState(true);

  useEffect(() => {
    const confirmActivation = async () => {
      try {
        const userId = localStorage.getItem("user_id") || localStorage.getItem("userId") || urlUserId;
        const token = localStorage.getItem("accessToken");
        const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3435";

        await fetch(`${API_BASE_URL}/payments/confirm-success`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : "",
          },
          body: JSON.stringify({
            session_id: sessionId,
            plan_id: planId,
            user_id: userId,
          }),
        });
      } catch (err) {
        console.error("❌ Error confirming plan activation:", err);
      } finally {
        setActivating(false);
      }
    };

    confirmActivation();
  }, [sessionId, planId, urlUserId]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="flex flex-col items-center gap-4 text-center animate-scaleIn">
        {/* green tick */}
        <div className="w-24 h-24 rounded-full bg-green-600 flex items-center justify-center shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-14 h-14 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* message */}
        <h1 className="text-white text-3xl font-semibold">Payment Successful</h1>

        {/* optional session ID */}
        {sessionId && (
          <p className="text-gray-300 text-sm">Ref ID: {sessionId}</p>
        )}

        {/* close button */}
        <button
          onClick={() => { setOpen(false); window.location.href = "/#/dashboard"; }}
          className="mt-4 px-6 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-200"
        >
          OK
        </button>
      </div>

      {/* animation */}
      <style>{`
        @keyframes scaleIn {
          0% { transform: scale(0.4); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-scaleIn { animation: scaleIn 0.3s ease-out; }
      `}</style>
    </div>
  );
}

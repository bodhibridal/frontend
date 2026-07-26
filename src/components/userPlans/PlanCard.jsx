import React from "react";

export default function PlanCard({
  plan,
  config,
  theme,
  addToCart,
  handleBuy,
  currentPlan,
  buyingPlanId,
}) {
  const isCurrentPlan =
    currentPlan &&
    (currentPlan.plan_id === plan.id ||
      currentPlan.plan?.id === plan.id ||
      (currentPlan.plan_name || "").toLowerCase() === (plan.name || "").toLowerCase() ||
      (currentPlan.plan_type || "").toLowerCase() === (plan.type || "").toLowerCase());

  const isBuying = buyingPlanId === plan.id;

  return (
    <div className="w-full sm:w-[320px]">
      <div
        className={`relative rounded-2xl p-6 shadow-lg border transition-all duration-300 ${
          isCurrentPlan
            ? "border-2 border-green-500 bg-gradient-to-br from-green-50/60 to-emerald-50/30 ring-2 ring-green-400/30 shadow-xl"
            : `border-gray-200 ${theme?.border || ""} bg-gradient-to-br ${theme?.bg || "from-white to-gray-50"} hover:shadow-xl hover:-translate-y-1`
        }`}
      >
        {/* Active Plan Badge */}
        {isCurrentPlan && (
          <div className="absolute -top-3 right-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
            <span>✓</span> Active Plan
          </div>
        )}

        <h3 className="font-extrabold uppercase text-center mb-3 flex justify-center items-center gap-2 text-gray-800">
          <span>{plan.name}</span>
          <span className="text-indigo-600 font-bold text-xl">
            {Number(plan.price) === 0 ? "FREE" : `£${plan.price}`}
          </span>
        </h3>

        <p className="text-gray-600 text-xs text-center mb-4 min-h-[32px]">
          {plan.description || "Complete access to BodhiBridal feature tier."}
        </p>

        <ul className="text-gray-700 text-sm mb-6 space-y-2 border-t border-b border-gray-100 py-3">
          <li className="flex items-center gap-2">
            <span className="text-indigo-500">⏱️</span>
            <span>
              Duration:{" "}
              <strong className="text-gray-800">
                {Number(plan.duration) === 0 ? "Lifetime ♾️" : `${plan.duration} Days`}
              </strong>
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-indigo-500">🎥</span>
            <span>
              Video Calls:{" "}
              <strong className="text-gray-800">
                {plan.video_call_limit > 0 ? plan.video_call_limit : "Unlimited / N/A"}
              </strong>
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-indigo-500">📞</span>
            <span>
              Audio Calls:{" "}
              <strong className="text-gray-800">
                {plan.audio_call_limit > 0 ? plan.audio_call_limit : "Unlimited / N/A"}
              </strong>
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-indigo-500">🔍</span>
            <span>
              Search Limit:{" "}
              <strong className="text-gray-800">
                {plan.people_search_limit > 0 ? plan.people_search_limit : "Unlimited / N/A"}
              </strong>
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-indigo-500">💬</span>
            <span>
              Message Limit:{" "}
              <strong className="text-gray-800">
                {plan.people_message_limit > 0 ? plan.people_message_limit : "Unlimited / N/A"}
              </strong>
            </span>
          </li>
          {plan.billing_info && (
            <li className="flex items-center gap-2 text-xs text-gray-500 italic">
              ℹ️ {plan.billing_info}
            </li>
          )}
        </ul>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => addToCart(plan)}
            disabled={isCurrentPlan}
            className={`w-full py-2.5 px-4 rounded-xl text-sm font-semibold border transition flex items-center justify-center gap-2 ${
              isCurrentPlan
                ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                : "bg-white text-indigo-700 border-indigo-200 hover:bg-indigo-50 shadow-sm"
            }`}
          >
            <i className="fa-solid fa-cart-shopping"></i> Add to Cart
          </button>

          {isCurrentPlan ? (
            <button
              disabled
              className="w-full py-2.5 px-4 rounded-xl font-bold text-sm bg-emerald-600 text-white shadow cursor-default flex items-center justify-center gap-2"
            >
              <span>✓</span> Current Plan
            </button>
          ) : (
            <button
              onClick={() => handleBuy(plan)}
              disabled={isBuying}
              className="w-full py-2.5 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition flex items-center justify-center gap-2"
            >
              {isBuying ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Processing...</span>
                </>
              ) : (
                <span>{Number(plan.price) === 0 ? "Select Free Plan" : "Upgrade & Buy Now"}</span>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
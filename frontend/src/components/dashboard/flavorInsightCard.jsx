import { useEffect, useState } from "react";
import { ArrowRight, FlaskConical, Lightbulb } from "lucide-react";
import { getSwaps } from "../../services/flavor.service";

export function FlavorInsightCard({ flavor, missingIngredient }) {
  const [swapData, setSwapData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchSwap = async () => {
    if (!flavor || !missingIngredient) return;
    setLoading(true);
    const data = await getSwaps({ flavor, missingIngredient });
    setSwapData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchSwap();
  }, [flavor, missingIngredient]);

  return (
    <div
      style={{
        border: "1px solid #cfe3d6",
        borderRadius: 20,
        padding: 24,
        background: "#f8faf8",
        boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <FlaskConical color="#9b87f5" />
          <div>
            <div style={{ fontSize: 22, fontWeight: 600 }}>
              Today’s Flavor Swaps
            </div>
            <div style={{ fontSize: 14, color: "#6b7280" }}>
              Smart substitutions that keep the taste you love
            </div>
          </div>
        </div>

        <span
          style={{
            background: "#e9ddff",
            color: "#7c3aed",
            padding: "6px 12px",
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          ✨ FlavorDB
        </span>
      </div>

      {/* Swap Card */}
      {loading && (
        <p style={{ fontSize: 14, color: "#6b7280" }}>
          Finding best swap...
        </p>
      )}

      {swapData && (
        <div
          style={{
            border: "1px solid #d7e8dd",
            borderRadius: 16,
            padding: 18,
            marginBottom: 16,
            background: "#ffffff",
          }}
        >
          {/* Pills */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 10,
            }}
          >
            <span
              style={{
                background: "#f9d6d5",
                color: "#b91c1c",
                padding: "6px 14px",
                borderRadius: 999,
                fontSize: 13,
                textDecoration: "line-through",
              }}
            >
              {swapData.original}
            </span>

            <ArrowRight size={16} color="#6b7280" />

            <span
              style={{
                background: "#d7e8dd",
                color: "#166534",
                padding: "6px 14px",
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              {swapData.replacement}
            </span>
          </div>

          {/* Benefit line */}
          <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 4 }}>
            {swapData.reason}
          </div>

          {/* Flavor note */}
          {swapData.flavorPairings?.length > 0 && (
            <div style={{ fontSize: 14, color: "#6b7280" }}>
              ✨ {swapData.flavorPairings.join(", ")} flavor compatibility
            </div>
          )}
        </div>
      )}

      {/* How it works box */}
      <div
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: 16,
          padding: 16,
          background: "#f3f4f6",
          display: "flex",
          gap: 12,
        }}
      >
        <Lightbulb color="#f59e0b" />

        <div>
          <div style={{ fontWeight: 600, marginBottom: 4 }}>
            How it works
          </div>
          <div style={{ fontSize: 14, color: "#6b7280" }}>
            FlavorDB matches ingredients by their flavor compounds. When we
            suggest a swap, it's because the replacement shares similar taste
            molecules — so you won't miss the original!
          </div>
        </div>
      </div>
    </div>
  );
}

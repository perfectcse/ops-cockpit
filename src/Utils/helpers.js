export const getStatusColor = (status) => {
  switch (status) {
    case "running":
      return "#3b82f6";
    case "completed":
      return "#22c55e";
    case "failed":
      return "#ef4444";
    case "pending":
      return "#f59e0b";
    case "paused":
      return "#6b7280";
    case "cancelled":
      return "#111827";
    default:
      return "#999";
  }
};

// ✅ ADD THIS (missing function)
export const formatTime = (timestamp) => {
  return new Date(timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

// ✅ OPTIONAL (for better UI)
export const getRelativeTime = (timestamp) => {
  const diff = Math.floor((Date.now() - timestamp) / 1000);

  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hr ago`;

  return `${Math.floor(diff / 86400)} day ago`;
};
export const mockJobs = [
  {
    id: 1,
    name: "Order Processing",
    status: "running",
    owner: "Payments Service",
    priority: "high",
    createdAt: Date.now() - 1000 * 60 * 10, // 10 mins ago
  },
  {
    id: 2,
    name: "Inventory Sync",
    status: "failed",
    owner: "Warehouse Service",
    priority: "medium",
    createdAt: Date.now() - 1000 * 60 * 20,
  },
  {
    id: 3,
    name: "Report Generation",
    status: "completed",
    owner: "Analytics Service",
    priority: "low",
    createdAt: Date.now() - 1000 * 60 * 30,
  },
  {
    id: 4,
    name: "Email Dispatch",
    status: "pending",
    owner: "Notification Service",
    priority: "medium",
    createdAt: Date.now() - 1000 * 60 * 5,
  },
];
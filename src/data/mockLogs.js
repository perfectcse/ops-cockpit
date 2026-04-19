export const mockLogs = [
  {
    id: 1,
    message: "Order Processing started",
    time: Date.now() - 1000 * 60 * 10,
  },
  {
    id: 2,
    message: "Fetching order data...",
    time: Date.now() - 1000 * 60 * 9,
  },
  {
    id: 3,
    message: "Inventory Sync failed (timeout)",
    time: Date.now() - 1000 * 60 * 20,
  },
  {
    id: 4,
    message: "Retry triggered for Inventory Sync",
    time: Date.now() - 1000 * 60 * 18,
  },
  {
    id: 5,
    message: "Report generated successfully",
    time: Date.now() - 1000 * 60 * 30,
  },
];
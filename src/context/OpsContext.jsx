import { createContext } from "react";

export const OpsContext = createContext({
  jobs: [],
  setJobs: () => {},
  selectedJob: null,
  setSelectedJob: () => {},
  logs: [],
  setLogs: () => {},
  networkStatus: "online",
  setNetworkStatus: () => {},
});
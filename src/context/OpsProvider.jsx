import { useState, useMemo } from "react";
import { OpsContext } from "./OpsContext";
import { mockJobs } from "../data/mockJobs";
import { mockLogs } from "../data/mockLogs";

function OpsProvider({ children }) {
  const [jobs, setJobs] = useState(mockJobs);
  const [selectedJob, setSelectedJob] = useState(null);
  const [logs, setLogs] = useState(mockLogs);
  const [networkStatus, setNetworkStatus] = useState("online");
  const value = useMemo(() => {
    return {
      jobs,
      setJobs,
      selectedJob,
      setSelectedJob,
      logs,
      setLogs,
      networkStatus,
      setNetworkStatus,
    };
  }, [jobs, selectedJob, logs, networkStatus]);

  return (
    <OpsContext.Provider value={value}>
      {children}
    </OpsContext.Provider>
  );
}

export default OpsProvider;
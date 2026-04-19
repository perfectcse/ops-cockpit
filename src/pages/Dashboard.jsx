import { useCallback, useContext, useEffect } from "react";
import QueueList from "../components/QueueList";
import JobDetails from "../components/JobDetails";
import Timeline from "../components/Timeline";
import { OpsContext } from "../context/OpsContext";
import { usePolling } from "../hooks/usePolling";
import "../styles/dashboard.css";

function Dashboard() {
  const {
    jobs,
    setJobs,
    selectedJob,
    setSelectedJob,
    logs,
    setLogs,
  } = useContext(OpsContext);

  // ✅ Polling
  const randomUpdate = useCallback(() => {
    setJobs((prev) =>
      prev.map((job) => {
        if (Math.random() > 0.7) {
          const statuses = ["running", "completed", "failed"];
          return {
            ...job,
            status: statuses[Math.floor(Math.random() * 3)],
          };
        }
        return job;
      })
    );
  }, [setJobs]);

  usePolling(randomUpdate, 5000);

  // ✅ Optimistic UI + rollback
  const handleAction = (action, job) => {
    const prevJobs = [...jobs];

    const updatedJobs = jobs.map((j) => {
      if (j.id === job.id) {
        if (action === "retry") return { ...j, status: "running" };
        if (action === "pause") return { ...j, status: "paused" };
        if (action === "cancel") return { ...j, status: "cancelled" };
      }
      return j;
    });

    setJobs(updatedJobs);

    setTimeout(() => {
      const failed = Math.random() < 0.3;

      if (failed) {
        setJobs(prevJobs);

        setLogs((prev) => [
          {
            id: Date.now(),
            message: `❌ ${action} failed on ${job.name}`,
            time: Date.now(),
          },
          ...prev,
        ]);
      } else {
        setLogs((prev) => [
          {
            id: Date.now(),
            message: `✅ ${action} success on ${job.name}`,
            time: Date.now(),
          },
          ...prev,
        ]);
      }
    }, 1000);
  };

  // ✅ URL Sync
  useEffect(() => {
    if (selectedJob) {
      window.history.replaceState(null, "", `?job=${selectedJob.id}`);
    }
  }, [selectedJob]);

  return (
    <div className="dashboard">
      <div className="panel left">
        <h2>Queue</h2>
        <QueueList
          jobs={jobs}
          selectedJob={selectedJob}
          onSelect={setSelectedJob}
        />
      </div>

      <div className="panel center">
        <h2>Details</h2>
        <JobDetails job={selectedJob} onAction={handleAction} />
      </div>

      <div className="panel right">
        <h2>Timeline</h2>
        <Timeline logs={logs} />
      </div>
    </div>
  );
}

export default Dashboard;
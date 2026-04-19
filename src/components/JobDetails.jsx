import "../styles/components.css";
import { getStatusColor } from "../utils/helpers";

function JobDetails({ job, onAction }) {
  if (!job) return <p className="empty">Select a job</p>;

  const handleClick = (type) => {
    if (typeof onAction === "function") {
      onAction(type, job);
    }
  };

  return (
    <div className="details-container">
      <h2>{job.name}</h2>

      <p>
        Status:
        <span style={{ color: getStatusColor(job.status) }}>
          {job.status}
        </span>
      </p>

      <p>Owner: {job.owner}</p>

      <div className="action-buttons">
        <button className="btn retry" onClick={() => handleClick("retry")}>
          Retry
        </button>
        <button className="btn pause" onClick={() => handleClick("pause")}>
          Pause
        </button>
        <button className="btn cancel" onClick={() => handleClick("cancel")}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default JobDetails;
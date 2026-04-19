import "../styles/components.css";
import { getStatusColor } from "../utils/helpers";

function QueueItem({ job, isSelected, onClick }) {
  return (
    <div
      className={`queue-card ${isSelected ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="queue-header">
        <h4>{job.name}</h4>
        <span
          className="status-dot"
          style={{ backgroundColor: getStatusColor(job.status) }}
        ></span>
      </div>

      <p className="queue-status">{job.status}</p>
      <p className="queue-owner">Owner: {job.owner}</p>
    </div>
  );
}

export default QueueItem;
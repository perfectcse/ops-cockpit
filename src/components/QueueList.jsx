import QueueItem from "./QueueItem";
import "../styles/components.css";

function QueueList({ jobs, selectedJob, onSelect }) {
  return (
    <div className="queue-list">
      {jobs.map((job) => (
        <QueueItem
          key={job.id}
          job={job}
          isSelected={selectedJob?.id === job.id}
          onClick={() => onSelect(job)}
        />
      ))}
    </div>
  );
}

export default QueueList;
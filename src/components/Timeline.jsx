import "../styles/components.css";
import { formatTime, getRelativeTime } from "../utils/helpers";

function Timeline({ logs }) {
  if (logs.length === 0) return <p>No activity</p>;

  return (
    <div className="timeline">
      {logs.map((log) => (
        <div key={log.id} className="timeline-item">
          <p>{log.message}</p>
          <span>
            {formatTime(log.time)} • {getRelativeTime(log.time)}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
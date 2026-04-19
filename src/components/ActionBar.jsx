function ActionBar({ job, onAction }) {
  return (
    <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
      <button onClick={() => onAction("retry", job)}>Retry</button>
      <button onClick={() => onAction("pause", job)}>Pause</button>
      <button onClick={() => onAction("cancel", job)}>Cancel</button>
    </div>
  );
}

export default ActionBar;
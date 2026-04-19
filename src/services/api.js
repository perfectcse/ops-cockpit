export const simulateJobUpdate = (jobs) => {
  
  const index = Math.floor(Math.random() * jobs.length);

  return jobs.map((job, i) => {
    if (i === index) {
      const statuses = ["running", "failed", "completed"];
      const randomStatus =
        statuses[Math.floor(Math.random() * statuses.length)];

      return { ...job, status: randomStatus };
    }
    return job;
  });
};
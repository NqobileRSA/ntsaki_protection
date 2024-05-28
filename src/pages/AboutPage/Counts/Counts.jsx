import React, { useState, useEffect } from "react";
import "./Counts.css";

const date = new Date();
const year = date.getFullYear();

const Counts = () => {
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [hours, setHours] = useState(0);
  const [workers, setWorkers] = useState(0);

  useEffect(() => {
    const clientLimit = (year - 2019) * 12 * 83;
    const projectLimit = 30;
    const hoursLimit = year - 2019;
    const workersLimit = 15;

    const duration = 5000;
    const steps = 50;

    const clientStep = Math.ceil(clientLimit / (duration / steps));
    const projectStep = Math.ceil(projectLimit / (duration / steps));
    const hoursStep = Math.ceil(hoursLimit / (duration / steps));
    const workersStep = Math.ceil(workersLimit / (duration / steps));

    const interval = setInterval(() => {
      setClients((prevClients) =>
        prevClients < clientLimit ? prevClients + clientStep : clientLimit
      );
      setProjects((prevProjects) =>
        prevProjects < projectLimit ? prevProjects + projectStep : projectLimit
      );
      setHours((prevHours) =>
        prevHours < hoursLimit ? prevHours + hoursStep : hoursLimit
      );
      setWorkers((prevWorkers) =>
        prevWorkers < workersLimit ? prevWorkers + workersStep : workersLimit
      );
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="counts" className="counts secStyle">
      <div className="container">
        {/* <div className="text-center title">
          <h3>What we have achieved so far</h3>
        </div> */}
        <div className="row counters position-relative">
          <div className="col-lg-3 col-6 text-center">
            <span className="purecounter">{clients}+</span>
            <p>Clients Trained</p>
          </div>
          <div className="col-lg-3 col-6 text-center">
            <span className="purecounter">{projects}</span>
            <p>Courses Available</p>
          </div>
          <div className="col-lg-3 col-6 text-center">
            <span className="purecounter">{hours}</span>
            <p>Years Of Experience</p>
          </div>
          <div className="col-lg-3 col-6 text-center">
            <span className="purecounter">{workers}</span>
            <p>Hard Workers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counts;

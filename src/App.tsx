import { useEffect, useState } from "react";
import "./App.css";
import JobCard from "./components/JobCard";
import StepOneModal, { Job } from "./components/StepOneModal";

function App() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState(null);
  function getJobs() {
    fetch("https://6452b0c5a2860c9ed413230a.mockapi.io/job", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((job) => {
        setJobs(job);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div className="App">
      <header className="App-header mb-5">
        <StepOneModal
          onAddingJobs={() => {
            getJobs();
          }}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-3">
          {jobs?.map((job) => (
            <JobCard
              key={job?.id}
              job={{
                id: job?.id,
                company_name: job?.company_name,
                industry: job?.industry,
                job_title: job?.job_title,
                apply_type: job?.apply_type,
                location: job?.location,
                max_exp: job?.max_exp,
                min_exp: job?.min_exp,
                max_salary: job?.max_salary,
                min_salary: job?.min_salary,
                remote_type: job?.remote_type,
                total_employee: job?.total_employee,
              }}
              onDeletingJob={() => {
                getJobs();
              }}
              onUpdatingJob={(job: Job) => {}}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;

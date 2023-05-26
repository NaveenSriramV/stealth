import { useState } from "react";
import { Job } from "./StepOneModal";

interface Props {
  job?: Job;
  onDeletingJob: () => void;
}
function JobCard(props: Props) {
  const [loading, setLoading] = useState(false);
  function deleteJob(id: any) {
    setLoading(true);
    fetch(`https://6452b0c5a2860c9ed413230a.mockapi.io/job/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          props?.onDeletingJob();
        }
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      {loading ? (
        <div
          role=" text-center"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <svg
            aria-hidden="true"
            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      ) : (
        <div className="max-w-xl rounded shadow-lg overflow-hidden bg-white text-left p-8">
          <div className="flex float-right gap-2">
            <div className="cursor-pointer text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </div>
            <div
              className="cursor-pointer text-red-600"
              onClick={() => {
                deleteJob(props?.job?.id);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-1">
              <img src="/logo.png"></img>
            </div>
            <div className="col-span-11">
              <div className="mb-3">
                <h3>{props?.job?.job_title}</h3>
                <p>{`${props?.job?.company_name} - ${props?.job?.industry}`}</p>
                <p style={{ color: "gray" }}>
                  {`${props?.job?.location || "Flexible Location"} (${
                    props?.job?.remote_type || "Flexible Work Mode"
                  })`}
                </p>
              </div>

              <p className="mb-1">
                {`${
                  props?.job?.remote_type || "Flexible Work Mode"
                } (9:00 am - 5:00 pm IST)`}
              </p>
              <p className="mb-1">
                {props?.job?.min_exp && props?.job?.max_exp
                  ? `Experience(${props?.job?.min_exp} - ${props?.job?.max_exp} years)`
                  : `Experience : Open to all`}
              </p>
              <p className="mb-1">
                {props?.job?.min_salary && props?.job?.max_salary
                  ? `INR (₹) ${props?.job?.min_salary} - ${props?.job?.max_salary} / Month`
                  : "Salary : Not disclosed yet"}
              </p>
              <p className="mb-4">
                {props?.job?.total_employee
                  ? `${props?.job?.total_employee} employees`
                  : "Mid-sized Organization"}
              </p>
              <button
                className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default JobCard;

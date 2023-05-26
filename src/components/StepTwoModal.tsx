import { useState } from "react";
import { Job, StepOneValues } from "./StepOneModal";

interface Props {
  showStepTwoModal: boolean;
  stepOneValues: StepOneValues;
  onAddingJobs: () => void;
}
export interface StepTwoValues {
  min_exp: string;
  max_exp: string;
  min_salary: string;
  max_salary: string;
  total_employee: string;
  apply_type: string;
}
export default function StepTwoModal(props: Props) {
  const [minExp, setMinExp] = useState("");
  const [maxExp, setMaxExp] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [totalEmployee, setTotalEmployee] = useState("");
  const [applyType, setApplyType] = useState<"quick_apply" | "external_apply">(
    "quick_apply"
  );
  const [loading, setLoading] = useState(false);
  function onClickingSave(event: any) {
    event.preventDefault();
    setLoading(true);
    const newJob = {
      job_title: props?.stepOneValues?.job_title,
      company_name: props?.stepOneValues?.company_name,
      industry: props?.stepOneValues?.industry,
      location: props?.stepOneValues?.location,
      remote_type: props?.stepOneValues?.remote_type,
      min_exp: minExp,
      max_exp: maxExp,
      min_salary: minSalary,
      max_salary: maxSalary,
      total_employee: totalEmployee,
      apply_type: applyType,
    };

    fetch("https://6452b0c5a2860c9ed413230a.mockapi.io/job", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newJob),
    })
      .then((res) => {
        if (res.ok) {
          props?.onAddingJobs();
        }
      })
      .catch((error) => {
        console.log("error in creating job", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      {props?.showStepTwoModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <form onSubmit={onClickingSave}>
                    <div className="flex gap-5">
                      <div className="mb-6">
                        <label className="text-left	block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Experience
                        </label>
                        <input
                          placeholder="Minimum"
                          type="text"
                          id="default-input"
                          value={minExp}
                          onChange={(event) => {
                            setMinExp(event.target.value);
                          }}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      <div className="mb-6">
                        <input
                          placeholder="Maximum"
                          type="text"
                          id="default-input"
                          value={maxExp}
                          onChange={(event) => {
                            setMaxExp(event.target.value);
                          }}
                          className="mt-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <div className="mb-6">
                        <label className="text-left	block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Salary
                        </label>
                        <input
                          placeholder="Minimum"
                          type="text"
                          id="default-input"
                          value={minSalary}
                          onChange={(event) => {
                            setMinSalary(event.target.value);
                          }}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      <div className="mb-6">
                        <input
                          placeholder="Maximum"
                          type="text"
                          id="default-input"
                          value={maxSalary}
                          onChange={(event) => {
                            setMaxSalary(event.target.value);
                          }}
                          className="mt-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <label className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Total Employee
                      </label>
                      <input
                        type="text"
                        id="default-input"
                        value={totalEmployee}
                        onChange={(event) => {
                          setTotalEmployee(event.target.value);
                        }}
                        placeholder="ex. 100"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Apply type
                      </label>
                      <div className="flex gap-5">
                        <div className="flex items-center mb-4">
                          <input
                            id="default-radio-1"
                            type="radio"
                            value="quick_apply"
                            name="default-radio"
                            checked={applyType === "quick_apply"}
                            onChange={(event) => {
                              setApplyType(event.target.value as any);
                            }}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Quick Apply
                          </label>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            checked={applyType === "external_apply"}
                            id="default-radio-2"
                            type="radio"
                            value="external_apply"
                            name="default-radio"
                            onChange={(event) => {
                              setApplyType(event.target.value as any);
                            }}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            External Apply
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-end p-6 rounded-b">
                      <button
                        disabled={loading}
                        className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                      >
                        save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

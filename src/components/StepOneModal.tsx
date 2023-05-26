import React, { useState } from "react";
import StepTwoModal from "./StepTwoModal";

export interface Job {
  job_title: string;
  company_name: string;
  industry: string;
  location?: string;
  remote_type?: string;
  min_exp?: string;
  max_exp?: string;
  min_salary?: string;
  max_salary?: string;
  total_employee?: string;
  apply_type?: string;
  id: string;
}

export interface StepOneValues {
  job_title: string;
  company_name: string;
  industry: string;
  location?: string;
  remote_type?: string;
}

interface Props {
  onAddingJobs: () => void;
}

export default function StepOneModal(props: Props) {
  const [showModal, setShowModal] = React.useState(false);
  const [showStepTwoModal, setShowStepTwoModal] = useState(false);
  const [jobTitle, setjobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");
  const [remoteType, setremoteType] = useState("");
  let stepOneValues: StepOneValues = {
    job_title: jobTitle,
    company_name: companyName,
    industry,
    location,
    remote_type: remoteType,
  };
  function onClickingNext(event: any) {
    event.preventDefault();
    setShowModal(false);
    setShowStepTwoModal(true);
  }
  return (
    <>
      <button
        className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mt-5"
        type="button"
        onClick={() => setShowModal(true)}
      >
        create job
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <form onSubmit={onClickingNext}>
                  <div className="relative p-6 flex-auto">
                    <div className="mb-6">
                      <label
                        id="required-field"
                        className="text-left	block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Job title
                      </label>
                      <input
                        type="text"
                        id="default-input"
                        required
                        value={jobTitle}
                        onChange={(event) => {
                          setjobTitle(event.target.value);
                        }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        id="required-field"
                        className="text-left	block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        required
                        id="default-input"
                        value={companyName}
                        onChange={(event) => {
                          setCompanyName(event.target.value);
                        }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        id="required-field"
                        className="text-left	block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Industry
                      </label>
                      <input
                        type="text"
                        required
                        id="default-input"
                        value={industry}
                        onChange={(event) => {
                          setIndustry(event.target.value);
                        }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <div className="flex gap-5">
                      <div className="mb-6">
                        <label className="text-left	block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Location
                        </label>
                        <input
                          type="text"
                          id="default-input"
                          value={location}
                          onChange={(event) => {
                            setLocation(event.target.value);
                          }}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      <div className="mb-6">
                        <label className="text-left	block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Remote Type
                        </label>
                        <input
                          type="text"
                          id="default-input"
                          value={remoteType}
                          onChange={(event) => {
                            setremoteType(event.target.value);
                          }}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end p-6 rounded-b">
                    <button
                      className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      next
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {showStepTwoModal && (
        <StepTwoModal
          showStepTwoModal={showStepTwoModal}
          stepOneValues={stepOneValues}
          onAddingJobs={() => {
            setShowStepTwoModal(false);
            props?.onAddingJobs();
          }}
        />
      )}
    </>
  );
}

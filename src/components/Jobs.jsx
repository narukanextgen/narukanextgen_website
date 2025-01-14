import React, { useState } from "react";
import { departments, positions } from "../data/careers";
import { ArrowRight, ChevronRight } from "lucide-react";

function JobDeptFilter({ departments, department, setDepartment }) {
  return (
    <div className="flex items-center justify-evenly rounded-full bg-gradient-to-b from-cyan-pale to-lavender px-2 py-1">
      {departments.map((item, index) => (
        <button
          key={index}
          className={`uppercase text-2xl font-semibold ${
            department === item ? "text-white bg-black" : "text-black"
          } rounded-full grow h-full py-3 transition-all duration-300 ease-in-out`}
          value={item}
          onClick={(e) => setDepartment(e.target.value)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

function JobCard({ position }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`flex shadow-dark ${
        isOpen ? "rounded-3xl mx-10" : "rounded-full"
      } pl-5 pr-10 py-8`}
    >
      <div
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        className="w-12 mr-3 cursor-pointer flex justify-center items-start pt-4"
      >
        <ChevronRight
          className={`${
            isOpen ? "rotate-90" : ""
          } transition-all duration-150 ease-in-out w-10 h-10`}
        />
      </div>
      <div className="w-3/5 mr-10">
        <span className="text-xs bg-indigo font-semibold text-white rounded-full px-2 py-1">
          {position.department}
        </span>
        <h4 className="font-semibold text-2xl mt-3">{position.title}</h4>
        {isOpen && (
          <>
            <p className="mt-5">{position.description}</p>
            <div className="mt-5">
              <h5 className="font-semibold text-lg mb-2">Job Description</h5>
              <ul className="list-disc space-y-3">
                {position.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mt-5">
              <h5 className="font-semibold text-lg mb-2">Requirements</h5>
              <ul className="list-disc space-y-3">
                {position.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
      <div className="w-2/5">
        {!isOpen && (
          <div className="h-full flex justify-end items-center gap-5 font-semibold">
            <p>{position.location}</p>
            <p>{position.type}</p>
          </div>
        )}
        {isOpen && (
          <div>
            <div className="font-semibold text-2xl">Share</div>
            <button className="w-full py-3 text-lg text-cyan-dark rounded-full font-semibold uppercase bg-cyan-pale mt-5">
              Apply Now
            </button>
            <div className="space-y-5 mb-10 mt-10">
              <span className="flex justify-between">
                <p>Location</p>
                <p className="font-semibold">{position.location}</p>
              </span>
              <span className="flex justify-between">
                <p>Type</p>
                <p className="font-semibold">{position.type}</p>
              </span>
              <span className="flex justify-between">
                <p>Qualification</p>
                <p className="font-semibold text-end">
                  {position.qualification}
                </p>
              </span>
              <span className="flex justify-between">
                <p>Posted On</p>
                <p className="font-semibold">{position.datePosted}</p>
              </span>
            </div>
            <button className="w-full flex justify-between items-center py-3 px-5 text-lg rounded-lg font-semibold bg-gradient-to-br from-cyan-pale via-lavender to-pink-candy">
              Ask for more help
              <ArrowRight />
            </button>
            <button className="w-full flex justify-between items-center py-3 px-5 text-lg rounded-lg font-semibold bg-gradient-to-br from-lavender via-pink-candy to-cyan-pale mt-5">
              About Company
              <ArrowRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function JobTable({ positions, department }) {
  return (
    <div className="space-y-10 mt-20">
      {positions
        .filter(
          (position) =>
            position.department === department || department === "All"
        )
        .map((position, index) => (
          <JobCard key={index} position={position} />
        ))}
    </div>
  );
}

function Jobs() {
  const [department, setDepartment] = useState("All");

  return (
    <div className="font-montserrat mt-16">
      <JobDeptFilter
        department={department}
        departments={departments}
        setDepartment={setDepartment}
      />
      <JobTable positions={positions} department={department} />
    </div>
  );
}

export default Jobs;

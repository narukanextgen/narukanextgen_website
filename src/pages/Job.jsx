import React from "react";
import { useParams } from "react-router";
import { careers } from "../data/careers";
import jobStock from "../assets/job-stock.png";
import {
  BookOpenText,
  Briefcase,
  CalendarDays,
  Clock5,
  MapPin,
  RockingChair,
  SquareChartGantt,
} from "lucide-react";

function Job() {
  const { id } = useParams();
  const findByUuid = (id) => {
    for (const career of careers) {
      const role = career.roles.find((role) => role.uuid === id);
      if (role) {
        return role;
      }
    }
    return null;
  };
  const benefits = [
    "Monthly team-building activities and events",
    "Performance-based bonuses and rewards",
    "Employee wellness programs, including gym memberships and counseling services",
    "Fully stocked pantry with snacks and beverages",
    "Parental leave and family-friendly policies",
    "Competitive salary with regular appraisals",
    "Retirement savings plans with company match",
    "Opportunity to work on impactful projects with global reach",
  ];
  const job = findByUuid(id);
  return (
    <div className="font-inter">
      <div className="h-96 bg-[#001833] text-white flex flex-col justify-center items-center text-center gap-5">
        <h2 className="uppercase text-4xl">{job.title}</h2>
        <span className="flex gap-5">
          <p>Job Type: {job.jobType}</p>
          <p>No. of Vacancies: {job.vacancies}</p>
        </span>
        <button className="bg-[#D2232A] px-10 py-3 rounded-md mt-10">
          Apply Now
        </button>
      </div>
      <div className="px-5 py-10 lg:px-56 lg:py-32">
        <img src={jobStock} alt="" />

        <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-0 mt-10 md:mt-24">
          <div className="space-y-10">
            <h2 className="uppercase text-xl md:text-4xl font-bold">
              {job.title}
            </h2>

            <div>
              <h5 className="text-lg font-semibold mb-5">
                Who Are We Looking For
              </h5>
              <ul className="list-disc list-inside space-y-2">
                {job.eligibility.map((item, i) => (
                  <li key={i} className="-indent-6 pl-6">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-5">
                What You Will Be Doing
              </h5>
              <ul className="list-disc list-inside space-y-2">
                {job.responsibilities.map((item, i) => (
                  <li key={i} className="-indent-6 pl-6">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-5">
                Bonus Points for Familiarity with
              </h5>
              <ul className="list-disc list-inside space-y-2">
                {job.bonus.map((item, i) => (
                  <li key={i} className="-indent-6 pl-6">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-5">
                Educational Requirement
              </h5>
              <ul className="list-disc list-inside space-y-2">
                {job.education.map((item, i) => (
                  <li key={i} className="-indent-6 pl-6">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-5">Salary</h5>
              <ul className="list-disc list-inside space-y-2">
                <li>Salary: {job.salary} (Depends on Skill and Experience)</li>
                <li>Salary Review: Yearly</li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-5">Working Hours</h5>
              <ul className="list-disc list-inside space-y-2">
                <li className="-indent-6 pl-6 uppercase">{job.workingHours}</li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-5">Working Days</h5>
              <ul className="list-disc list-inside space-y-2">
                <li>Weekly: 5 days</li>
                <li>Weekend: Saturday, Sunday</li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-5">
                Perks & Benefits You’ll Get{" "}
              </h5>
              <ul className="list-disc list-inside space-y-2">
                {benefits.map((benefit, i) => (
                  <li key={i} className="-indent-6 pl-6">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:w-2/5">
            <div className="bg-gray-100 rounded-md flex flex-col items-center px-3 md:px-8 py-10 gap-5 md:gap-10 text-sm md:text-base">
              <button className="bg-[#D2232A] lg:w-1/2 px-10 py-3 rounded-md mb-5 text-white">
                Apply Now
              </button>
              <h4 className="font-extrabold w-full">Job Summary</h4>

              <div className="flex gap-3 items-center justify-start w-full">
                <MapPin className="h-10 w-10" />
                <span className="flex flex-col">
                  <p className="text-gray-500">Location</p>
                  <p>{job.location}</p>
                </span>
              </div>

              <div className="flex gap-3 items-center justify-start w-full">
                <Briefcase className="h-10 w-10" />
                <span className="flex flex-col">
                  <p className="text-gray-500">Job Type</p>
                  <p>{job.jobType}</p>
                </span>
              </div>

              <div className="flex gap-3 items-center justify-start w-full">
                <CalendarDays className="h-10 w-10" />
                <span className="flex flex-col">
                  <p className="text-gray-500">Date Posted</p>
                  <p>Posted 1 month ago</p>
                </span>
              </div>

              <div className="flex gap-3 items-center justify-start w-full">
                <BookOpenText className="h-10 w-10" />
                <span className="flex flex-col">
                  <p className="text-gray-500">Experience</p>
                  <p>{job.experience}</p>
                </span>
              </div>

              <div className="flex gap-3 items-center justify-start w-full">
                <Clock5 className="h-10 w-10" />
                <span className="flex flex-col">
                  <p className="text-gray-500">Working Hours</p>
                  <p>{job.workingHours}</p>
                </span>
              </div>

              <div className="flex gap-3 items-center justify-start w-full">
                <SquareChartGantt className="h-10 w-10" />
                <span className="flex flex-col">
                  <p className="text-gray-500">Working Days</p>
                  <p>
                    Weekly: 5 days <br /> Weekend: Saturday, Sunday
                  </p>
                </span>
              </div>

              <div className="flex gap-3 items-center justify-start w-full">
                <RockingChair className="h-10 w-10" />
                <span className="flex flex-col">
                  <p className="text-gray-500">Vacancy</p>
                  <p>No. of Vacancies: {job.vacancies}</p>
                </span>
              </div>

              <div className="w-full mt-10">
                <button className="underline text-left">View all job</button>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-16 w-full h-[2px] bg-black" />
        <div className="lg:w-4/5 space-y-10">
          <div>
            <h5 className="text-2xl font-semibold mb-5">
              The Application Process
            </h5>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Submit your application via the career portal with an updated
                resume and cover letter.
              </li>
              <li>
                Our recruitment team will review your application and shortlist
                candidates based on qualifications and experience.
              </li>
              <li>
                Selected candidates will be invited for an initial phone
                screening or video interview.
              </li>
              <li>
                After the screening, there may be one or more technical
                interviews depending on the role.
              </li>
              <li>
                If successful, you'll receive an offer letter outlining
                compensation, benefits, and other details.
              </li>
              <li>
                Upon accepting the offer, you'll complete onboarding steps
                including documentation and orientation.
              </li>
              <li>
                Start your new role and begin contributing to exciting projects
                with our team!
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-2xl font-semibold mb-5">Our Statement</h5>
            <p>
              At Naruka NextGen InfoTech, we redefine the digital experience by
              providing innovative web design, reliable hosting services, and
              cutting-edge solutions tailored to meet the unique needs of each
              client. Our team is committed to delivering exceptional results
              that empower businesses to thrive in the digital age.
            </p>
          </div>
          <div className="w-full flex justify-end">
            <button className="bg-[#D2232A] px-10 py-3 rounded-md text-white mt-10">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Job;

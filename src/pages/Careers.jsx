import { Link, useSearchParams } from "react-router";
import careerBg from "../assets/career-bg.png";
import learning from "../assets/career-icons/learning.png";
import pauseRewind from "../assets/career-icons/pause-rewind.png";
import skills from "../assets/career-icons/skills.png";
import teamWork from "../assets/career-icons/team-work.png";
import Pagination from "../components/Pagination";
import { careers } from "../data/careers";
import { ArrowRight } from "lucide-react";

function Careers() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") || "All";

  const pageSize = 6;
  const page = parseInt(searchParams.get("page")) || 1;
  const filteredCareers = careers.filter(
    (career) =>
      selectedCategory === "All" || career.category === selectedCategory
  );
  const totalRoles = filteredCareers.reduce(
    (total, career) => (total += career.roles.length),
    0
  );

  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;

  const allRoles = filteredCareers.flatMap((career) => career.roles);
  const rolesToDisplay = allRoles.slice(startIndex, endIndex);

  const handleCategoryChange = (category) => {
    setSearchParams(category === "All" ? {} : { category });
  };

  const addSpacesAtSlash = (text) => {
    return text.split("/").join("/ ");
  };

  return (
    <div className="font-inter">
      <div
        className="w-full bg-center bg-cover h-[30rem]"
        style={{ backgroundImage: `url(${careerBg})` }}
      >
        <div className="w-full p-5 h-full bg-[#001833]/60 text-white flex flex-col items-center justify-center gap-7">
          <h2 className="text-4xl">JOIN US</h2>
          <p className="w-full md:w-2/3 lg:w-1/2 text-center">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available
          </p>
          <span className="h-10 space-x-5">
            <button className="h-full bg-[#D2232A] px-5 rounded-md">
              Join the team
            </button>
            <button className="h-full border-2 border-white px-5 rounded-md">
              Culture
            </button>
          </span>
        </div>
      </div>

      <div className="w-full flex flex-col md:grid md:grid-cols-4 px-5 py-10 lg:px-56 lg:pt-32 pb-20 gap-x-5 gap-y-8">
        <div className="col-span-2 row-span-2 space-y-5">
          <h4 className="font-semibold text-lg">BENEFITS</h4>
          <h2 className="text-4xl font-extrabold">
            Why you Should Join Our Awesome Team
          </h2>
          <p className="text-sm">
            we want to feel like home when you are working at JMC(Japan
            Marketing & Consultancy Limited) & for that we have curated a great
            set of benefits for you.It all starts with the free lunch!
          </p>
        </div>
        <div className="space-y-3">
          <img
            src={teamWork}
            alt=""
            className="w-20 p-5 bg-[#E7F2FF] rounded"
          />
          <h5 className="font-bold text-md">Team Work</h5>
          <p className="font-light text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry.
          </p>
        </div>
        <div className="space-y-3">
          <img
            src={pauseRewind}
            alt=""
            className="w-20 p-5 bg-[#E7F2FF] rounded"
          />
          <h5 className="font-bold text-md">Secured Future</h5>
          <p className="font-light text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry.
          </p>
        </div>
        <div className="space-y-3">
          <img
            src={learning}
            alt=""
            className="w-20 p-5 bg-[#E7F2FF] rounded"
          />
          <h5 className="font-bold text-md">Learning Opportunity</h5>
          <p className="font-light text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry.
          </p>
        </div>
        <div className="space-y-3">
          <img src={skills} alt="" className="w-20 p-5 bg-[#E7F2FF] rounded" />
          <h5 className="font-bold text-md">Upgrade Skills</h5>
          <p className="font-light text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry.
          </p>
        </div>
      </div>

      <div className="px-5 py-10 lg:px-56 lg:py-20 bg-gray-100 space-y-10">
        <div className="flex flex-col gap-5 items-center text-center">
          <h4 className="text-lg font-semibold uppercase">Come join us</h4>
          <h2 className="text-4xl font-extrabold">Career Openings</h2>
          <p className="text-sm w-full lg:w-1/2">
            We’re always looking for creative, talented self-starters to join
            the JMC family. Check out our open roles below and fill out an
            application.
          </p>
        </div>

        <div className="w-full flex md:flex-row flex-col gap-5">
          <div className="md:w-4/12 flex flex-row flex-wrap md:flex-col gap-5 font-semibold">
            {careers.map((career) => (
              <button
                key={career.category}
                onClick={() => handleCategoryChange(career.category)}
                className={`uppercase md:text-sm text-left text-xs ${
                  career.category === selectedCategory ? "text-[#D2232A]" : ""
                }`}
              >
                {career.category}{" "}
                {career.category === selectedCategory
                  ? `(${career.roles.length})`
                  : null}
              </button>
            ))}
          </div>
          <div className="flex flex-col-reverse md:flex-col gap-5 w-full">
            {rolesToDisplay.map((role) => (
              <div
                key={role.title}
                className="flex items-center justify-between font-semibold text-sm md:text-lg bg-white px-2 py-1 md:px-5 md:py-2 rounded shadow"
              >
                <h5 className="w-4/12 md:w-6/12 text-wrap break-words hyphens-auto">
                  {addSpacesAtSlash(role.title)}
                </h5>
                <span className="flex flex-col">
                  <p className="text-xs text-gray-300">Experience</p>
                  {role.experience}
                </span>
                <span className="flex flex-col">
                  <p className="text-xs text-gray-300">Deadline</p>
                  {role.deadline}
                </span>
                <Link to={role.uuid}>
                  <ArrowRight />
                </Link>
              </div>
            ))}
            {totalRoles > pageSize && (
              <Pagination
                itemCount={totalRoles}
                pageSize={pageSize}
                currentPage={page}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careers;

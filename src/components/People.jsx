import teamBackground from "../assets/team-bg.jpg";
import people1 from "../assets/people/person-1.png";
import people2 from "../assets/people/person-2.png";
import people3 from "../assets/people/person-3.png";
import people4 from "../assets/people/person-4.png";
import people5 from "../assets/people/person-5.png";
import team from "../assets/team.png";
import gallery from "../assets/Gallery.png";

function PeopleCard({ name, position, description, imgUrl }) {
  return (
    <div className="flex max-md:flex-col max-md:items-center max-md:gap-y-8">
      <div className="shrink-0 md:mr-5 lg:mr-10 flex items-center">
        <div className="relative">
          <img
            src={imgUrl}
            alt=""
            className="z-[2] relative bottom-0 w-40 md:w-32 lg:w-min"
          />
          <div className="w-40 h-40 md:w-32 md:h-32 lg:w-48 lg:h-48 rounded-full absolute bottom-0 border right-0 bg-gradient-to-b from-cyan-pale via-lavender to-pink-candy z-[1]"></div>
          <div className="w-40 h-40 md:w-32 md:h-32 lg:w-48 lg:h-48 rounded-full absolute bottom-0 border border-indigo right-0 translate-x-2 translate-y-2 z-0"></div>
          <div className="w-40 h-40 md:w-32 md:h-32 lg:w-48 lg:h-48 rounded-full absolute bottom-0 border border-cyan-electric right-0 -translate-x-2 -translate-y-2 z-0"></div>
        </div>
      </div>
      <div className="flex flex-col justify-center max-md:text-center">
        <h3 className="text-xl lg:text-cardHeading font-extrabold">{name}</h3>
        <h5 className="md:mt-1 lg:mt-3 text-lg md:text-base lg:text-lg font-extrabold">
          {position}
        </h5>
        <p className="md:mt-2 lg:mt-5 text-base md:text-xs lg:text-base leading-none">
          {description}
        </p>
      </div>
    </div>
  );
}

function People() {
  return (
    <>
      <div
        className="bg-top rounded-t-6xl mt-20 md:mt-16 lg:mt-0"
        style={{ backgroundImage: `url(${teamBackground})` }}
      >
        <div className="bg-gradient-to-r from-lavender/80 to-cyan-light/80 w-full h-full pt-28 md:pt-60 lg:pt-96 pb-24 md:pb-56 rounded-t-6xl">
          <div className="flex flex-col md:grid grid-cols-2 px-5 lg:px-20 md:gap-x-5 gap-y-20 md:gap-y-10 lg:gap-10">
            <div className="flex flex-col md:flex-row md:col-span-2 self-center lg:w-2/3 md:justify-center lg:justify-self-center md:w-full lg:pb-24 md:pb-12">
              <div className="md:shrink-0 md:grow-0 lg:grow md:w-2/5 lg:w-1/2 md:ml-32 lg:ml-0 flex items-center max-md:justify-center">
                <div className="relative">
                  <img
                    src={people5}
                    alt=""
                    className="z-[2] relative bottom-1 w-44 md:w-56 lg:w-fit"
                  />
                  <div className="w-60 h-48 md:w-80 md:h-64 lg:w-[30rem] lg:h-[24rem] rounded-[50%] absolute left-1/2 -translate-x-1/2 bottom-0 border bg-gradient-to-b from-indigo to-cyan-bright z-[1]"></div>
                  <div className="w-60 h-48 md:w-80 md:h-64 lg:w-[30rem] lg:h-[24rem] rounded-[50%] absolute bottom-0 left-1/2 -translate-x-[calc(50%-20px)] border border-indigo z-0"></div>
                </div>
              </div>
              <div className="flex flex-col justify-center max-md:text-center">
                <h3 className="text-xl md:text-2xl lg:text-cardHeading font-extrabold">
                  John Doe
                </h3>
                <h5 className="md:mt-1 lg:mt-3 text-lg md:text-base lg:text-lg font-extrabold">
                  Founder & CEO
                </h5>
                <p className="md:mt-2 lg:mt-5 text-base lg:text-lg leading-none">
                  A visionary leader steering the company’s growth and
                  innovation. With a strategic mindset and a passion for
                  technology, they drive the mission to deliver impactful
                  digital solutions and lead the company toward long-term
                  success.
                </p>
              </div>
            </div>
            <PeopleCard
              name="Jane Doe"
              position="Co-Founder & CTO"
              imgUrl={people1}
              description="A visionary leader driving the company’s technology strategy and innovation. With expertise in software development and cloud technologies, they ensure the team delivers impactful solutions that empower businesses to succeed."
            />
            <PeopleCard
              name="Jim Doe"
              position="Co-Founder & VP of Marketing"
              imgUrl={people2}
              description="A dynamic leader driving impactful marketing strategies and brand growth. With expertise in digital marketing and market trends, they craft innovative campaigns that elevate the company’s presence and connect with audiences."
            />
            <PeopleCard
              name="Jim Doe"
              position="VP of Development"
              imgUrl={people3}
              description="A strategic leader guiding innovative product development and technical excellence. With deep expertise in software engineering, they drive scalable solutions that fuel business growth."
            />
            <PeopleCard
              name="Jim Doe"
              position="VP of Human Resources"
              imgUrl={people4}
              description="A people-centric leader fostering a supportive and inclusive workplace. With a focus on talent development and employee engagement, they cultivate a culture that empowers teams to thrive."
            />
          </div>
          <div className="py-20 md:p-10 lg:p-28">
            <img src={team} alt="" />
          </div>
        </div>
      </div>
      <img src={gallery} alt="" className="-translate-y-1/2 w-full -mb-[25%]" />
    </>
  );
}

export default People;

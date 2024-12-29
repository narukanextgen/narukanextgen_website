import { approaches } from "../data/approaches";

function Approach() {
  return (
    <div className="bg-gray-100 flex flex-col items-center px-5 lg:px-28 font-inter pb-32">
      <hr className="h-2 w-20 bg-gradient-to-r from-darkPurple to-coralPink mb-6 mt-20" />

      <h3 className="text-4xl md:leading-[55px] font-normal text-center mb-20">
        Our design and <br />
        <span className="font-bold"> development approach</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">
        {approaches.map((approach, i) => (
          <div
            key={i}
            className="lg:h-60 border-2 bg-gray-50 flex px-3 md:px-8 py-5 md:pt-12 gap-3 items-start lg:gap-8 rounded-md"
          >
            <span
              className={`w-8 h-8 p-2 md:w-16 md:h-16 bg-gradient-to-r ${approach.gradient} shrink-0 flex items-center justify-center rounded-lg`}
            >
              <img src={approach.image} alt="" />
            </span>
            <span>
              <h4 className="text-lg lg:text-xl font-semibold mb-3">
                {approach.title}
              </h4>
              <p className="text-textGray lg:text-base text-sm">
                {approach.description}
              </p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Approach;

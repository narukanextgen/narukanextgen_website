import blogBanner from "../assets/blog-banner.jpg";
import blog1 from "../assets/blog/blog-1.jpg";
import blog2 from "../assets/blog/blog-2.jpg";
import BlogCard from "../components/BlogCard";
import { blogs } from "../data/blogs";

function Blog() {
  return (
    <div className="font-montserrat px-10">
      <div className="w-full relative h-[70vh] overflow-hidden rounded-4xl flex items-end justify-start">
        <div className="w-2/3 p-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Thoughts, Trends & Tech: Insights From the Minds Driving Digital
            Innovation
          </h2>
          <p className="text-2xl text-white mt-12">
            Discover insights, ideas, and experiences from our team as we
            explore tech trends, share project stories, and reflect on building
            solutions that power digital growth.
          </p>
        </div>
        <div className="w-full h-full absolute -z-[1] bg-gradient-to-b from-purple-deep/5 via-cyan-dark to-indigo"></div>
        <img src={blogBanner} alt="" className="w-full absolute -z-[5]" />
      </div>

      <div className="flex mt-10">
        {/* Blog Card 1 */}
        <div className="flex gap-6">
          <img
            src={blog1}
            alt="Blog 1"
            className="w-52 h-52 object-cover rounded-lg aspect-square"
          />
          <div className="flex flex-col justify-between py-5">
            <h3 className="text-xl font-semibold">
              The Future of Digital Transformation
            </h3>
            <p className="text-sm text-gray-500">10 April 2025</p>
            <p className="text-base text-gray-700">
              Explore how businesses can stay ahead by embracing the latest in
              cloud, AI, and agile tech stacks.
            </p>
            <a
              href="/blog/future-of-digital-transformation"
              className="text-indigo font-medium mt-2 uppercase"
            >
              Read More
            </a>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="flex gap-6">
          <img
            src={blog2}
            alt="Blog 2"
            className="w-52 h-52 object-cover rounded-lg aspect-square"
          />
          <div className="flex flex-col justify-between py-5">
            <h3 className="text-xl font-semibold">
              Building Scalable Web Apps: Lessons Learned
            </h3>
            <p className="text-sm text-gray-500">5 April 2025</p>
            <p className="text-base text-gray-700">
              A behind-the-scenes look at how we approach architecture,
              performance, and design for modern web apps.
            </p>
            <a
              href="/blog/scalable-web-apps"
              className="text-indigo font-medium mt-2 uppercase"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="mt-20 grid grid-cols-3 gap-x-5 gap-y-16">
        {blogs.map((blog) => (
          <BlogCard
            image={blog.image}
            title={blog.title}
            description={blog.description}
            date={blog.date}
          />
        ))}
      </div>
    </div>
  );
}

export default Blog;

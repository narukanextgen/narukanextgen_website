import { v4 as uuid4 } from "uuid";
import blog3 from "../assets/blog/blog-3.jpg";
import blog4 from "../assets/blog/blog-4.jpg";
import blog5 from "../assets/blog/blog-5.jpg";
import blog6 from "../assets/blog/blog-6.jpg";
import blog7 from "../assets/blog/blog-7.jpg";
import blog8 from "../assets/blog/blog-8.jpg";
import blog9 from "../assets/blog/blog-9.jpg";
import blog10 from "../assets/blog/blog-10.jpg";
import blog11 from "../assets/blog/blog-11.jpg";

export const blogs = [
  {
    id: uuid4(),
    title: "Embracing Cloud-Native Architecture",
    date: "April 2, 2025",
    description:
      "Learn how cloud-native principles are reshaping the future of software development and deployment.",
    image: blog3,
  },
  {
    id: uuid4(),
    title: "Design Systems: Consistency at Scale",
    date: "March 28, 2025",
    description:
      "Explore the benefits of building a design system to unify UI components and streamline development.",
    image: blog4,
  },
  {
    id: uuid4(),
    title: "The Power of Headless CMS",
    date: "March 24, 2025",
    description:
      "Discover how headless CMS platforms improve flexibility, performance, and developer experience.",
    image: blog5,
  },
  {
    id: uuid4(),
    title: "Why Accessibility Shouldn’t Be an Afterthought",
    date: "March 20, 2025",
    description:
      "We dive into why inclusive design is essential — not just for compliance, but for better user experience.",
    image: blog6,
  },
  {
    id: uuid4(),
    title: "Scaling Teams and Systems Together",
    date: "March 16, 2025",
    description:
      "Lessons from the field: how growing your dev team and your infrastructure go hand in hand.",
    image: blog7,
  },
  {
    id: uuid4(),
    title: "Breaking Down Microservices vs Monoliths",
    date: "March 12, 2025",
    description:
      "An honest look at the pros and cons of both architectures — and when to choose which.",
    image: blog8,
  },
  {
    id: uuid4(),
    title: "Next.js in Production: Best Practices",
    date: "March 8, 2025",
    description:
      "Optimize your Next.js apps with these performance tips, deployment strategies, and real-world tricks.",
    image: blog9,
  },
  {
    id: uuid4(),
    title: "Building with TypeScript: A Developer’s Perspective",
    date: "March 4, 2025",
    description:
      "Why we adopted TypeScript — and how it’s improved our codebase, collaboration, and confidence.",
    image: blog10,
  },
  {
    id: uuid4(),
    title: "UX is Not UI: Bridging the Gap",
    date: "February 28, 2025",
    description:
      "Understanding the critical difference between UX and UI — and why both matter in every project.",
    image: blog11,
  },
];

function BlogCard({ image, title, date, description }) {
  return (
    <div className="flex flex-col px-5 items-start gap-5">
      <img
        src={image}
        alt={title}
        className="w-full aspect-square object-cover rounded-3xl"
      />
      <h3 className="line-clamp-2 text-2xl font-medium min-h-16">{title}</h3>
      <p className="text-black/50">{date}</p>
      <p className="text-left">{description}</p>
      <button className="text-indigo uppercase text-sm font-semibold">
        Read More
      </button>
    </div>
  );
}

export default BlogCard;

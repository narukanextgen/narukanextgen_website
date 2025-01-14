function Effect({ className }) {
  return (
    <span className={`h-2 md:h-3 space-x-2 flex items-center ${className}`}>
      <span className="h-full w-2 md:w-3 rounded-full bg-gradient-to-b from-cyan-pale via-lavender to-pink-candy"></span>
      <span className="h-full w-10 md:w-20 rounded-full bg-gradient-to-b from-cyan-pale via-lavender to-pink-candy"></span>
    </span>
  );
}

export default Effect;

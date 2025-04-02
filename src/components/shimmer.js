const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {Array(12)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-60 h-72 bg-gray-200 rounded-lg animate-pulse"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;

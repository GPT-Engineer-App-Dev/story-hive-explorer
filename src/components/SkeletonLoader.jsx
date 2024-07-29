const SkeletonLoader = () => {
  return (
    <div className="space-y-4">
      {[...Array(5)].map((_, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="flex justify-between items-center">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/6"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;

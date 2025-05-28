const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
        <div className="absolute inset-2 bg-blue-500 rounded-full blur-lg opacity-30"></div>
      </div>
      <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 animate-pulse">
        Loading...
      </p>
    </div>
  );
};

export default Loading;

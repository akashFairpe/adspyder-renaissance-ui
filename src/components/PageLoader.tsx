import { LoadingSpinner } from "./LoadingSpinner";

export const PageLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fcfdff]">
      <div className="text-center">
        <LoadingSpinner size="lg" className="mb-4" />
        <p className="text-gray-600 text-lg">Loading...</p>
      </div>
    </div>
  );
};
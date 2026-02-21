import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-sky-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p className="text-white/70 font-medium animate-pulse">Fetching sky data...</p>
    </div>
  );
};

export const SkeletonCard: React.FC = () => {
  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 w-full max-w-md animate-pulse">
      <div className="h-6 bg-white/20 rounded w-1/3 mb-6"></div>
      <div className="flex justify-between items-center mb-8">
        <div className="h-20 bg-white/20 rounded w-1/2"></div>
        <div className="h-16 w-16 bg-white/20 rounded-full"></div>
      </div>
      <div className="space-y-3">
        <div className="h-4 bg-white/20 rounded w-full"></div>
        <div className="h-4 bg-white/20 rounded w-2/3"></div>
      </div>
    </div>
  );
};

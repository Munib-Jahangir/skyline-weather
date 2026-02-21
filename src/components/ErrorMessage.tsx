import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <div className="backdrop-blur-xl bg-red-500/10 border border-red-500/20 rounded-3xl p-8 w-full max-w-md text-center">
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-red-500/20 rounded-full">
          <AlertCircle className="w-8 h-8 text-red-400" />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">Oops! Something went wrong</h3>
      <p className="text-white/70 mb-6">{message}</p>
      <button
        onClick={onRetry}
        className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl text-white font-medium transition-all active:scale-95"
      >
        <RefreshCw className="w-4 h-4 mr-2" />
        Try Again
      </button>
    </div>
  );
};

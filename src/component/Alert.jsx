import React from "react";

export default function Alert({ status }) {
  if (!status) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 px-4">
      <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] bg-white rounded-xl shadow-xl flex items-center justify-center animate-zoom-in">
        {status === "sending" && (
          <div className="flex flex-col items-center space-y-2 sm:space-y-3 text-center">
            <div className="w-6 h-6 sm:w-8 sm:h-8 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
            <span className="text-gray-700 font-medium text-sm sm:text-base">
              Sending...
            </span>
          </div>
        )}

        {status === "success" && (
          <div className="flex flex-col items-center space-y-2 sm:space-y-3 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 sm:h-16 sm:w-16 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-green-600 font-semibold text-sm sm:text-base">
              Sent Successfully!
            </span>
          </div>
        )}
      </div>      

{/* this is made using react jsx */}
      {/* animation styles */}
      <style>{`
        @keyframes zoomIn {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-zoom-in {
          animation: zoomIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

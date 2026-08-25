import React from "react";

type Props = {
  text: string;
  children: React.ReactNode;
};

function ToolTip({ text, children }: Props) {
  return (
    <div className="relative inline-block group">
      {children}

      <div
        className="
          absolute
          bottom-full
          left-1/2
          -translate-x-1/2
          mb-2

          invisible
          opacity-0
          group-hover:visible
          group-hover:opacity-100

          transition-all
          duration-200

          whitespace-nowrap
          rounded-md
          bg-black
          px-3
          py-2
          text-sm
          text-white
          shadow-lg

          z-50
        "
      >
        {text}

        {/* Arrow */}
        <div
          className="
            absolute
            left-1/2
            top-full
            -translate-x-1/2
            border-l-4
            border-r-4
            border-t-4
            border-l-transparent
            border-r-transparent
            border-t-black
          "
        />
      </div>
    </div>
  );
}

export default ToolTip;
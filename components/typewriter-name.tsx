"use client";

import React, { useEffect, useState } from "react";

interface TypewriterNameProps {
  name?: string;
  className?: string;
  textClassName?: string;
}

export function TypewriterName({
  name = "John Paul Martirez",
  className = "",
  textClassName = "text-xl sm:text-2xl font-bold tracking-tight text-white",
}: TypewriterNameProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText === name) {
      // Finished typing full name; pause for 2.2 seconds before deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && displayedText === "") {
      // Finished deleting; pause briefly before typing again
      timer = setTimeout(() => {
        setIsDeleting(false);
      }, 600);
    } else {
      // Advance typing or deleting step
      const stepSpeed = isDeleting ? 55 : 105;
      timer = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting ? prev.slice(0, -1) : name.slice(0, prev.length + 1)
        );
      }, stepSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, name]);

  const isPausedAtEnd = !isDeleting && displayedText === name;

  return (
    <div className={`flex items-center justify-center min-h-8 sm:min-h-9 ${className}`}>
      <h1 className={`${textClassName} drop-shadow-sm inline-flex items-center text-center`}>
        <span>{displayedText}</span>
        <span
          className={`inline-block w-[2.5px] h-[0.9em] ml-1 bg-linear-to-b from-cyan-400 to-sky-500 rounded-full transition-opacity duration-300 ${
            isPausedAtEnd ? "animate-pulse" : "opacity-100"
          }`}
          aria-hidden="true"
        />
      </h1>
    </div>
  );
}

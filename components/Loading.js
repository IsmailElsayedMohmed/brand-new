import React from "react";
import Image from "next/image";

export default function Loading(item) {
  return (
    <div>
      {item.length === 0 && (
        <Image
          src="/images/snakeCircle.gif"
          alit="wait"
          layout="fill"
          className="text-center text-4xl mx-auto my-2 bg-gray-300 border-4 border-double border-cyan-900 rounded-lg shadow-md"
        />
      )}
    </div>
  );
}

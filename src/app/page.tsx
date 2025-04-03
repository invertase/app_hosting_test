"use client";
// This is a client component

import { useState, useEffect } from "react";
import Image from "next/image";

const initialSrc = "https://us-central1-dev-extensions-testing.cloudfunctions.net/ext-image-processing-api-s77f-handler/process?operations=%5B%7B%22operation%22%3A%22input%22%2C%22type%22%3A%22path%22%2C%22path%22%3A%22%2Fdog.png%22%7D%2C%7B%22operation%22%3A%22grayscale%22%7D%2C%7B%22operation%22%3A%22output%22%2C%22format%22%3A%22webp%22%7D%5D";

export default function Home() {
  const [src, setSrc] = useState(initialSrc);
  const [inputValue, setInputValue] = useState(src);

  useEffect(() => {
    console.log("Image URL:", src);
  }, [src]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSrc(inputValue);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="bg-white">
          <Image
            className="dark:invert"
            unoptimized={true}
            src={src}
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="flex flex-col gap-2">
            <label htmlFor="image-src" className="text-sm font-medium">
              Image Source URL
            </label>
            <div className="flex gap-2">
              <input
                id="image-src"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter image URL"
              />
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
"use client";
import React, { Suspense } from "react";
import Hero from "../components/blog/Hero";
import Blog from "../components/blog/Blog";

const Page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading hero...</div>}>
        <Hero />
      </Suspense>

      <Suspense fallback={<div>Loading blog...</div>}>
        <Blog />
      </Suspense>
    </div>
  );
};

export default Page;

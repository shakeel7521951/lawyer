"use client";
import React, { Suspense } from "react";
import Hero from "../components/blog/Hero";
import TimelineProfile from "../components/blog/TimelineProfile";
import AppealJudgment from "../components/blog/AppealJudgment";


const Page = () => {
  return (
    <div>
    <Hero />
        <TimelineProfile />
        <AppealJudgment />
</div>
  );
};

export default Page;

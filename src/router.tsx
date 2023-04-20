import { Routes, Route } from "react-router-dom";

import { AboutContainer } from "./Pages/AboutContainer";
import { TechContainer } from "./Pages/TechContainer";
export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AboutContainer />} />
        <Route path="/Tech" element={<TechContainer />} />
      </Routes>
    </>
  );
};

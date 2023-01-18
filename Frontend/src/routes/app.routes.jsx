import { Routes, Route } from "react-router-dom";

import { Registers } from "../pages/Registers";
import { List } from "../pages/List";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Registers />} />
      <Route path="/list" element={<List />} />
    </Routes>
  );
}

import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import OneToOneCoaching from "./components/OneToOneCoaching";
import TrainingPrograms from "./components/TrainingPrograms";
import WellnessPlanning from "./components/WellnessPlanning";
import AccountabilityCheckins from "./components/AccountabilityCheckins";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coaching" element={<OneToOneCoaching />} />
          <Route path="/training" element={<TrainingPrograms />} />
          <Route path="/accountability" element={<AccountabilityCheckins />} />
          <Route path="/wellness" element={<WellnessPlanning />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;

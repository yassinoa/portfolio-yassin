import "./App.css";
import Header from "./components/Header";
import Info from "./components/Info";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import AboutDetailCard from "./components/AboutDetailCard";
import ContactDetailCard from "./components/ContactDetailCard";
import ProjectDetailCard from "./components/ProjectDetailCard";
import WorkDetailCard from "./components/WorkDetailCard";
import ResumeDetailCard from "./components/ResumeDetailCard";

function App() {
  return (
    <div className="bg-light dark:bg-dark bg-cover  ">
      <div className="mx-auto  max-w-7xl pt-12 xl:pt-20 pb-10">
        <BrowserRouter>
          <Routes basename='https://yassin-portfolio.onrender.com'>
            <Route
              path="/"
              exact
              element={
                <section id="about">
                  <Header />
                  <div className="mx-3 md:mx-6   xl:mt-52 xl:flex space-y-8 xl:space-x-8 xl:space-y-0">
                    {/* w=1/4 is reserver for info  */}
                    <Info />

                    <div className="xl:w-8/12    space-y-2">
                      <section
                        id="about-detail-card "
                        className="text-[#a6a6a6]"
                      >
                        <Navigation />
                        <AboutDetailCard />
                      </section>
                    </div>
                  </div>
                </section>
              }
            />
            <Route
              path="/about"
              element={
                <section id="about">
                  <Header />
                  <div className="mx-3 md:mx-6   xl:mt-60 xl:flex space-y-8 xl:space-x-8 xl:space-y-0">
                    {/* w=1/4 is reserver for info  */}
                    <Info />

                    <div className="xl:w-8/12   space-y-2">
                      <section
                        id="about-detail-card "
                        className="text-slate-600"
                      >
                        <Navigation />
                        <AboutDetailCard />
                      </section>
                    </div>
                  </div>
                </section>
              }
            />
            <Route
              path="/contact"
              element={
                <section id="contact">
                  <Header />
                  <div className="mx-3 md:mx-6  xl:mt-60 xl:flex space-y-8 xl:space-x-8 xl:space-y-0">
                    {/* w=1/4 is reserver for info  */}
                    <Info />

                    <div className="xl:w-8/12   space-y-2">
                      <section
                        id="about-detail-card "
                        className="text-[#a6a6a6]"
                      >
                        <Navigation />
                        <ContactDetailCard />
                      </section>
                    </div>
                  </div>
                </section>
              }
            />
            <Route
              path="/project"
              element={
                <section id="project">
                  <Header />
                  <div className="mx-3 md:mx-6   xl:mt-60 xl:flex space-y-8 xl:space-x-8 xl:space-y-0">
                    {/* w=1/4 is reserver for info  */}
                    <Info />

                    <div className="xl:w-8/12   space-y-2">
                      <section
                        id="about-detail-card "
                        className="text-slate-600"
                      >
                        <Navigation />
                        <ProjectDetailCard />
                      </section>
                    </div>
                  </div>
                </section>
              }
            />
            <Route
              path="/work"
              element={
                <section id="work">
                  <Header />
                  <div className="mx-3 md:mx-6   xl:mt-60 xl:flex space-y-8 xl:space-x-8 xl:space-y-0">
                    {/* w=1/4 is reserver for info  */}
                    <Info />

                    <div className="xl:w-8/12  space-y-2">
                      <section
                        id="about-detail-card "
                        className="text-slate-600"
                      >
                        <Navigation />
                        <WorkDetailCard />
                      </section>
                    </div>
                  </div>
                </section>
              }
            />
            <Route
              path="/resume"
              element={
                <section id="resume">
                  <Header />
                  <div className="mx-3 md:mx-6  xl:mt-60 xl:flex space-y-8 xl:space-x-8 xl:space-y-0 ">
                    {/* w=1/4 is reserver for info  */}
                    <Info />

                    <div className="xl:w-8/12  space-y-2">
                      <section
                        id="about-detail-card "
                        className="text-slate-600"
                      >
                        <Navigation />
                        <ResumeDetailCard />
                      </section>
                    </div>
                  </div>
                </section>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

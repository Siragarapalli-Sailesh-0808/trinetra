import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useWow } from "./lib/hooks/useWow";
import { HomeTwo } from "./pages/home/HomeTwo";
import { CoursesGridView } from "./pages/course/CoursesGridView";
import { About } from "./pages/about/About";
import { Error } from "./pages/error/Error";
import { Contact } from "./pages/contact/Contact";

function App() {
  useWow();

  // on route change to top of the page
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo({ top: 0, behavior: "instant" }), [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomeTwo />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<CoursesGridView />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;

import React, { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";

export const App = () => {
  const [page, setPage] = useState();

  React.useEffect(() => {
    window.addEventListener("popstate", (event) => {
      setPage(event.state)
    });
  }, []);

  const onChangePage = e => {
    const page = e.target.dataset.page;
    window.history.pushState(page, "", `/${page}`);
    setPage(page);
  }
  return (
    <div>
      <div>
        <button data-page="home" onClick={onChangePage}>Home</button>
        <button data-page="about" onClick={onChangePage}>About</button>
      </div>
      { page === "home" ? <Home /> : <About />}
    </div>
  )
}
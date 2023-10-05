import React from "react";
import Directory from "./Directory";

const Home = () => {
  return (
    <div className="home">
      <div className="home__content">
        <section>
          <h1>Introduction</h1>
          <ul>
            <li><a href="" target="_new">GitHub</a></li>
            <li><a href="" target="_new">Portfolio</a></li>
            <li><a href="" target="_new">LinkedIn</a></li>
          </ul>

          <p>
            The purpose of this project is to track my progress as I experiment and learn new things
            with CSS and try out new designs. 
          </p>

          <h2>Insprations</h2>
          <p>This website, that website</p>
        </section>

        <Directory />
      </div>


      <footer>
        <p>You have reached the end of the page</p>
        <a href="#">Back to top</a>
        <ul>
            <li><a href="" target="_new">GitHub</a></li>
            <li><a href="" target="_new">Portfolio</a></li>
            <li><a href="" target="_new">LinkedIn</a></li>
          </ul>
      </footer>
    </div>
  )
}

export default Home;
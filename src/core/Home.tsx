import React from "react";
import Directory from "./Directory";

const Home = () => {
  return (
    <div className="home">
      <div className="home__content">
        <section>
          <h1>Introduction</h1>
          <ul>
            <li>Github</li>
            <li>Portfolio</li>
            <li>LinkedIn</li>
          </ul>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga laudantium vero voluptatem earum recusandae in magnam maxime, distinctio maiores architecto deleniti optio corrupti atque, illo commodi? Voluptas voluptatum dolore asperiores!
          Eius rem facere odio officiis velit pariatur est architecto incidunt officia, quibusdam repudiandae autem hic blanditiis dicta voluptatem labore, ipsa minus impedit accusantium commodi suscipit nihil eligendi dolor? Necessitatibus, incidunt!</p>

          <h2>Insprations</h2>
          <p>This website, that website</p>
        </section>

        <Directory />
      </div>


      <footer>
        You have reached the end of the page
        <a href="#">Back to top</a>
        <ul>
            <li>Github</li>
            <li>Portfolio</li>
            <li>LinkedIn</li>
          </ul>
      </footer>
    </div>
  )
}

export default Home;
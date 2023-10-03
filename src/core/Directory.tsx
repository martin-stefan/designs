import React from "react";
import { Link } from "react-router-dom";
import { items } from './items';

const Directory = () => {
  return (
    <div className="directory">
      {
        items.map(el => (
          <div className="directory__item">

            <Link to={`/${el.title}`} key={el.title}>{el.title}</Link>
          </div>
        ))
      }
    </div>
  )
}

export default Directory;
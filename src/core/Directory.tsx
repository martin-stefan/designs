import React from "react";
import { Link } from "react-router-dom";
import { items } from './items';

const Directory = () => {
  return (
    <div className="directory">
      {
        items.map(el => (
          <Link to={`/${el.title}`} key={el.title}>{el.title}</Link>
        ))
      }
    </div>
  )
}

export default Directory;
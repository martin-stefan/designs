import React from "react";
import { Link } from "react-router-dom";
import { items } from './items';

const Directory = () => {
  return (
    <div>
      {
        items.map(el => (
          <Link to={`/${el.title}`}>{el.title}</Link>
        ))
      }
    </div>
  )
}

export default Directory;
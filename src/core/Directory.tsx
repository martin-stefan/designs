import React from "react";
import { Link } from "react-router-dom";
import { items } from './items';

const Directory = () => {
  return (
    <div className="directory">
      {
        items.map(el => (
          <div className="directory__item">
            <Link to={`/${el.title}`} key={el.title}>
              <p>{el.title}</p>
            </Link>
            <p>{el.date}</p>
            <p>{el.description}</p>
            {el.sourceUrl ? <a href={el.sourceUrl} target="_blank">Source Project</a> : ''}
          </div>
        ))
      }
    </div>
  )
}

export default Directory;
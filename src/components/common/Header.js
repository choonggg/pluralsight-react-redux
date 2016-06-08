import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return(
    <div className="nav">
      <IndexLink to="/" className="">Home</IndexLink>
      {" | "}
      <Link to="/courses" className="">The Courses</Link>
      {" | "}
      <Link to="about" className="">Lean More</Link>
    </div>
  );
};

export default Header;

import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return(
    <div className="nav">
      <IndexLink to="/" className="">Home</IndexLink>
      {" | "}
      <Link to="/courses" className="">The Courses</Link>
      {" | "}
      <Link to="about" className="">Lean More</Link>
      {loading && <LoadingDots interval={100} dots={50} />}
    </div>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;

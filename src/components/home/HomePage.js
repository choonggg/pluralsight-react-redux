import React from 'react';
import {Link} from 'react-router';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World react</h1>
        <Link to="about" className="btn btn-primary btn-lg">Lean More</Link>
      </div>
    )
  }
}

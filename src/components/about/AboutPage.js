import React from 'react';
import {Link} from 'react-router';

export default class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>About Page</h1>
        <Link to="/" className="btn btn-primary btn-lg">Lean More</Link>
      </div>
    )
  }
}

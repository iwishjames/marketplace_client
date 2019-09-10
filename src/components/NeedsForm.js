import React, {Component} from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

class NeedsForm extends Component {
  render() {
    return(
      <div>
        <p>
          <Link to="/">Go back</Link>
        </p>
        <h3>My Need</h3>
      </div>
    )
  };
}

export default NeedsForm;

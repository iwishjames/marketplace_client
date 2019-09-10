import React, {Component} from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

class OffersForm extends Component {
  render() {
    return(
      <div>
        <p>
          <Link to="/">Go back</Link>
        </p>
        <h3>My Offer</h3>
      </div>
    )
  };
}

export default OffersForm;

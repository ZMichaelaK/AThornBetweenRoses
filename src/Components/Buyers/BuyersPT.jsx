<<<<<<< HEAD
import PropTypes from 'prop-types'
<<<<<<< HEAD:src/Components/BuyersPT.jsx
import { pathToFileURL } from 'url';

function BuyersPT(props) {
    return (
        <div>
                            <h4>{props.FirstName} {props.LastName}</h4>
                            <p>{props.Address}</p>
                            <p>{props.Postcode}</p>
                            <p>{props.PhoneNumber}</p>

                        </div>
                   
        
=======
import Card from 'react-bootstrap/Card';
 
=======
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

>>>>>>> 03fde3190c9ced0a2ffed69a5c93d1e0374d0ec2
function BuyersPT(props) {
  return (
    <div className="container">
      <div className="row-xl">
        <div className="col-xl"></div>
          <div className="flex-wrap-properly"> </div>
            <div className="card">
              <div Card style={{ width: "18rem" }}>
                <div className="card-body">
                  <div className="card-text">
                    <h4 className="card-title">
                      {" "}
                      {props.FirstName} {props.LastName}
                    </h4>
                    <p>{props.Address}</p>
                    <p>{props.Postcode}</p>
                    <p>{props.PhoneNumber}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
>>>>>>> b77e1d21dadf479920ec2f02b53b5b638052604e:src/Components/Buyers/BuyersPT.jsx
    );
=======
    </div>
  );
>>>>>>> 03fde3190c9ced0a2ffed69a5c93d1e0374d0ec2
}
BuyersPT.propTypes = {
  FirstName: PropTypes.string.isRequired,
  LastName: PropTypes.string.isRequired,
  Address: PropTypes.string.isRequired,
  Postcode: PropTypes.string.isRequired,
  PhoneNumber: PropTypes.number.isRequired,
};

export default BuyersPT;

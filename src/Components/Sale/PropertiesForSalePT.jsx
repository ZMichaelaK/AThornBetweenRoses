import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import RS from "./RS.png"
import React from 'react';
import confetti from 'canvas-confetti';





function PropertiesForSalePT(props) {
        const navigate = useNavigate();
        const handleConfetti = () => {
            confetti({
            particleCount: 250,
            spread: 120,
            });
        }
    return (
        <Card className="col-sm-6 col-md-4 col-lg-3 m-auto">
        <div className="flex">
        <div className="card-body card-text">
        <h4 className="card-title"></h4>
        {" "}
                    
        <label htmlFor="pr"><h5>Premium Listing &nbsp;</h5></label>
                    <input
 
 
                        id="pl"
                        type="checkbox"
 
                    ></input>
                    <br></br>
                    <br></br><img
              src={RS}
              alt="RS"
              width="100%"
              height="15%"
              className="d-inline-block align-text-middle"/> 
              <br />
              <br />
                        <p>{"Price: £" +props.Price} </p>
                        <p> {"Type: " +props.Type}</p>
                        <p> {"Bedrooms: "+props.Bedrooms}</p>
                        <p> {"Bathrooms: " +props.Bathrooms}</p>
                        <p> {"Garden: " +props.Garden}</p>
                        <p> {"Address: " +props.Address}</p>
                        <p> {"Postcode: " +props.Postcode}</p>

                        <select>
                            <option>For Sale</option>
                            <option >Under Offer</option>
                            <option>Withdrawn</option>
                        
                        </select>&nbsp;
                        <br></br>
                        <br></br>

                        
                        <button onClick={()=> navigate("/PropertiesForSale/BookingSale/" + props.id)} type="Bookings" className="btn btn-success btn-sm"> Book a viewing </button>
                        
                        <div>
                            

                            <div>
                            <br></br>
                            
        <button className="btn btn-danger btn-md"onClick={handleConfetti}>SOLD</button>
    </div>
                        </div>

                    </div>
                    </div>
                    </Card>
    );
}



PropertiesForSalePT.propTypes = {
    Type: PropTypes.string.isRequired,
    Price: PropTypes.number.isRequired,
    Bedrooms: PropTypes.number.isRequired,
    Bathrooms: PropTypes.number.isRequired,
    Garden: PropTypes.string.isRequired,
    Address: PropTypes.string.isRequired,
    Postcode: PropTypes.string.isRequired,
}
export default PropertiesForSalePT;



import PropTypes from "prop-types";
import PropertiesForSale from './PropertiesForSale';
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'

function PropertiesForSalePT(props) {
    return (
        
                <div Card style={{ width: '10%' }}>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-text"></div>
                                <div className="card-title"></div>
                                <p>{"Price: £" + props.Price} </p>
                                <p> {"Type: " + props.Type}</p>
                                <p> {"Bedrooms: " + props.Bedrooms}</p>
                                <p> {"Bathrooms: " + props.Bathrooms}</p>
                                <p> {"Garden: " + props.Garden}</p>
                                <p> {"Address: " + props.Address}</p>
                                <p> {"Postcode: " + props.Postcode}</p>
                                <form>
                                    <select type="text"><option value="For Sale">For Sale</option>
                                        <option value="Under Offer">Under Offer</option>
                                        <option value="Sold">Sold</option>
                                        <option value="Withdrawn">Withdrawn</option>

                                    </select>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
     
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



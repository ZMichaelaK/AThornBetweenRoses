import { useEffect, useState } from "react";
import axios from "axios";
import PropertiesToLetPT from "./PropertiesToLetPT";

function GetLet() {
  const [letting, setLet] = useState([]);
  const [filtertyp, setFiltertyp] = useState("");
  const [filterrt, setFilterrt] = useState("");
  const [filterbds, setFilterbds] = useState("");
  const [filterbts, setFilterbts] = useState("");
  const [filtergds, setFiltergds] = useState("");
  const [filterads, setFilterads] = useState("");
  const [filterpcd, setFilterpcd] = useState("");

  useEffect(function () {
    axios
    // this is a get request from the server for new properties that have been added
      .get("http://localhost:3000/PropertiesToLet")
      .then((response) => {
        console.log("Response:", response);
        setLet(response.data);
        console.log("let:", letting);
      })
      .catch((err) => console.error(err));
  }, []);

  const letArray = [];
  for (const plet of letting) {
    if (filtertyp && !plet.Type.toLowerCase().includes(filtertyp.toLowerCase())) continue;
    if (filterrt && plet.Rent > parseInt(filterrt)) continue;
    if (filterbds && plet.Bedrooms < parseInt(filterbds)) continue;
    if (filterbts && plet.Bathrooms < parseInt(filterbts)) continue;
    if (filtergds && !plet.Garden.toLowerCase().includes(filtergds.toLowerCase())) continue;
    if (filterads && !plet.Address.toLowerCase().includes(filterads.toLowerCase())) continue;
    if (filterpcd && !plet.Postcode.toLowerCase().includes(filterpcd.toLowerCase())) continue;

    letArray.push(
      <PropertiesToLetPT
        key={plet.id}
        Type={plet.Type}
        Rent={plet.Rent}
        Bedrooms={plet.Bedrooms}
        Bathrooms={plet.Bathrooms}
        Garden={plet.Garden}
        Address={plet.Address}
        Postcode={plet.Postcode}
        id={plet.id}
      />
    );
  }

  return (
    <>
{/* this is the filter for the properties showing */}
      <div className="col"><form className="drop-menu">
        <h1>Filter Properties &nbsp;</h1>
        <label htmlFor="ty">Type</label>
        <input
          value={filtertyp}
          onChange={(event) => setFiltertyp(event.target.value)}
          id="ty"
          type="text"
          class="form-control"
        ></input>
        <label htmlFor="rt">Rent £</label>
        <input
          value={filterrt}
          onChange={(event) => setFilterrt(event.target.value)}
          id="pr"
          type="£"
          class="form-control"
        ></input>
        <label htmlFor="bd">Min Bedrooms</label>
        <input
          value={filterbds}
          onChange={(event) => setFilterbds(event.target.value)}
          id="bd"
          type="number"
          min={0}
          class="form-control"
        ></input>
        <label htmlFor="bt">Bathrooms</label>
        <input
          value={filterbts}
          onChange={(event) => setFilterbts(event.target.value)}
          id="bt"
          type="number"
          min={0}
          class="form-control"
        ></input>
        <label htmlFor="gn">Garden</label>
        <input
          value={filtergds}
          onChange={(event) => setFiltergds(event.target.value)}
          id="gn"
          type="text"
          class="form-control"
        ></input>
        <label htmlFor="ad">Address</label>
        <input
          value={filterads}
          onChange={(event) => setFilterads(event.target.value)}
          id="ad"
          type="text"
          class="form-control"
        ></input>
        <label htmlFor="pc">Postcode</label>
        <input
          value={filterpcd}
          onChange={(event) => setFilterpcd(event.target.value)}
          id="pc"
          type="text"
          class="form-control"
        ></input>
        <br />
        <button type="search" className="btn btn-danger btn-md">
          {" "}
          Clear{" "}
        </button>
      </form>
      </div>

      <h2> A list of properties to let </h2>
      <br />
      <br />
      <br />
      <div className="container-fluid">
        <div className="row">{letArray}</div>
        {/* this shows the propeties at the bottom of the page */}
      </div>
    </>
  );
}

export default GetLet;

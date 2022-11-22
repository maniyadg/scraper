import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useState } from 'react';

function App() {
  const [productlist,setproductlist] = useState([])
  const item = async () => {
    const itemlist = await axios.get("http://localhost:303/Products");
    setproductlist(itemlist.data)
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          {productlist.map((items) => {
            return (
              <div className="card border-dark mb-3">
                <div className="card-header">`${items.title}`</div>
                <div className="card-body text-dark">
                  <h5 className="card-title">Dark card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

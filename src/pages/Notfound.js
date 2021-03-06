import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

function Notfound() {
  return (
    <Layout>
      <div className="mi-about-area mi-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="notfound">
                <div className="notfound-inner text-center">
                  <h1>404</h1>
                  <h3>oops!!! Page not found!</h3>
                  <Link to="/" className="mi-button">
                    Back
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Notfound;
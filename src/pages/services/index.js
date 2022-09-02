import * as React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";

import * as styles from "./services.module.css";

const Services = () => (
  <Layout>
    <h1>Hi from the Services page</h1>
    <p>Welcome to Services page</p>
    <Link to='/'>Go back to the homepage</Link>
  </Layout>
);

export default Services;

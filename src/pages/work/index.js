import * as React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";
import * as styles from "./work.module.css";

const Work = () => (
  <Layout>
    <h1>Hi from the Work page</h1>
    <p>Welcome to Worrk page</p>
    <Link to='/'>Go back to the homepage</Link>
  </Layout>
);

export default Work;

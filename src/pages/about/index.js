import * as React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";
import * as styles from "./about.module.css";

const About = () => (
  <Layout>
    <div>
      <h1>Hi from the about page</h1>
      <p>Welcome to about page</p>
      <Link to='/'>Go back to the homepage</Link>
    </div>
  </Layout>
);

export default About;

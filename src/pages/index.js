import * as React from "react";
import { graphql, Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import Layout from "../components/Layout";
import * as styles from "./index.module.css";

const Home = ({ data }) => (
  <Layout>
    <BackgroundImage
      fluid={data.iguazu.childImageSharp.fluid}
      className='masthead'
    >
      <div className={styles.colorOverlay}>
        <div className={styles.content}>
          <div>
            <h1 className={styles.sveinssons}>Sveinssons </h1>
          </div>
          <div className={styles.services}>
            <div className={styles.box}>
              <Link className={styles.list} to='/services'>
                Web Developement
              </Link>
              <Link className={styles.list} to='/services'>
                Shopify Experts
              </Link>
              <Link className={styles.list} to='/services'>
                E-Commerce
              </Link>
            </div>
          </div>
          <button className='startButton'>hola</button>
        </div>
      </div>
    </BackgroundImage>
  </Layout>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export default Home;

export const query = graphql`
  query {
    iguazu: file(relativePath: { eq: "bg-iguazu.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;

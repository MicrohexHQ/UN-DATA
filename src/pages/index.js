import React from 'react';
import { shape, string } from 'prop-types';
// import { graphql } from 'gatsby';
import { Header, Layout } from '@undataforum/gatsby-theme-base';

// data
const Homepage = ({ location }) => (
  <Layout location={location}>
    <Header
      css={`
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
      `}
      transparent
    />
    <div>HOMEPAGE</div>
  </Layout>
);

Homepage.propTypes = {
  location: shape({ pathname: string.isRequired }).isRequired,
};

export default Homepage;

/*
export const query = graphql`
  query {
    hero: allImageSharp(filter: { original: { src: { regex: "/hero/" } } }) {
      nodes {
        id
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

    <Container maxWidth={9}>
      <Hero fluid={data.hero.nodes[0].fluid} mb={3} />
    </Container>
*/

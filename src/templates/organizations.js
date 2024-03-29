import React from "react";
import Link from "gatsby-link";
import { graphql } from "gatsby";
import Article from "../components/article/article";
import organizationsNav from "../pages/organizations/organizations-nav.yaml";

export default function Template({ data }) {
  const { markdownRemark } = data;
  return (
    <Article
      links={organizationsNav}
      path={markdownRemark.frontmatter.path}
      title={markdownRemark.frontmatter.title}
      description={markdownRemark.frontmatter.description}
      headings={markdownRemark.headings}
      docOnGithub={`${markdownRemark.frontmatter.id}.md`}
    >
      <h1>{markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </Article>
  );
}

export const pageQuery = graphql`
  query organizationsDocByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        id
        title
        description
      }
      headings(depth: h3) {
        value
      }
    }
  }
`;

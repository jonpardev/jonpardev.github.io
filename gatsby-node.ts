/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

import path from "path";
import { projects } from "./src/assets/content";
import type { GatsbyNode } from "gatsby";
import wrapWithProvider from './wrap-with-provider';

export const createPages: GatsbyNode["createPages"] = ({ actions }) => {
  const { createPage } = actions;
  Object.keys(projects).forEach(key => {
    createPage({
      path: `/project/${key}`,
      component: path.resolve("src/templates/details.tsx"),
      context: { node: projects[key] }
    });
  });
}

export const wrapRootElement = wrapWithProvider;
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

import './src/assets/styles/global.css';
import wrapWithProvider from './wrap-with-provider';
export const wrapRootElement = wrapWithProvider;

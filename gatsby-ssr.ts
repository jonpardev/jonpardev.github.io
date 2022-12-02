/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

import wrapWithProvider from './wrap-with-provider';
export const wrapRootElement = wrapWithProvider;
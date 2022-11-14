/** @jsx jsx */
import { Box, Flex, Link, jsx } from "theme-ui"

const Footer = () => {
  return (
    <Box as="footer" variant="footer">
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        <img width="30" height="30" src="https://img.lekoarts.de/gatsby/logo_v2_w30.png" alt="LekoArts Logo" />
        {` `}
        <Link
          aria-label="Link to the theme's GitHub repository"
          sx={{ ml: 2 }}
          href="https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-cara"
        >
          Theme
        </Link>
        <div sx={{ mx: 1 }}>by</div>
        {` `}
        <Link
          aria-label="Link to the theme author's website"
          href="https://www.lekoarts.de"
        >
          LekoArts
        </Link>
      </Flex>
    </Box>
  )
}

export default Footer

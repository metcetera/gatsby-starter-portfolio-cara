import { merge } from "theme-ui"
import { tailwind } from "@theme-ui/presets"

const theme = merge(tailwind, {
  config: {
    initialColorModeName: `dark`,
    // useColorSchemeMediaQuery: `system`,
  },
  colors: {
    text: '#1f5a91',
    heading: '#1f5a91',
    primary: tailwind.colors.orange[7],
    secondary: tailwind.colors.blue[6],
    background: `#FFFF00`,
    divider: tailwind.colors.gray[3],
    textMuted: tailwind.colors.gray[6],
    icon_brightest: tailwind.colors.gray[2],
    icon_darker: tailwind.colors.gray[3],
    icon_darkest: tailwind.colors.gray[4],
    icon_red: tailwind.colors.gray[3],
    icon_blue: tailwind.colors.gray[3],
    icon_orange: tailwind.colors.gray[3],
    icon_yellow: tailwind.colors.gray[3],
    icon_pink: tailwind.colors.gray[3],
    icon_purple: tailwind.colors.gray[3],
    icon_green: tailwind.colors.gray[3],
    modes: {
      light: {
        text: '#1f5a91',
        heading: '#1f5a91',
        primary: tailwind.colors.orange[7],
        secondary: tailwind.colors.blue[6],
        background: `#FFFF00`,
        divider: tailwind.colors.gray[3],
        textMuted: tailwind.colors.gray[6],
        icon_brightest: tailwind.colors.gray[2],
        icon_darker: tailwind.colors.gray[3],
        icon_darkest: tailwind.colors.gray[4],
        icon_red: tailwind.colors.gray[3],
        icon_blue: tailwind.colors.gray[3],
        icon_orange: tailwind.colors.gray[3],
        icon_yellow: tailwind.colors.gray[3],
        icon_pink: tailwind.colors.gray[3],
        icon_purple: tailwind.colors.gray[3],
        icon_green: tailwind.colors.gray[3],
      },
    },
  },
  breakpoints: [`400px`, `600px`, `900px`, `1200px`, `1600px`],
  footer: {
    textAlign: `center`,
    display: `block`,
    position: `absolute`,
    bottom: 0,
    color: `textMuted`,
    px: [2, 3],
    py: [3, 4],
  },
  styles: {
    root: {
      margin: 0,
      padding: 0,
      boxSizing: `border-box`,
      textRendering: `optimizeLegibility`,
      WebkitFontSmoothing: `antialiased`,
      MozOsxFontSmoothing: `grayscale`,
      color: `text`,
      backgroundColor: `background`,
      a: {
        color: `primary`,
        textDecoration: `none`,
        transition: `all 0.3s ease-in-out`,
        "&:hover": {
          color: `primary`,
          textDecoration: `none`,
        },
      },
    },
    p: {
      fontSize: [1, 2],
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
      color: `text`,
    },
    blockquote: {
      marginLeft: 0,
      p: {
        fontSize: [2, 3],
        fontWeight: `medium`,
        color: `heading`,
      },
    },
    h1: {
      fontSize: [6, 7, 8],
      mt: 2,
      mb: 3,
      textShadow: `rgba(255, 255, 255, 0.15) 0px 5px 35px`,
      letterSpacing: `wide`,
      color: `heading`,
    },
    h2: {
      fontSize: [4, 5, 6],
      mt: 2,
      mb: 2,
      color: `heading`,
    },
    h3: {
      fontSize: [3, 4, 5],
      mt: 3,
      color: `heading`,
    },
    h4: {
      fontSize: [2, 3, 4],
      color: `heading`,
    },
    h5: {
      fontSize: [1, 2, 3],
      color: `heading`,
    },
    h6: {
      fontSize: 1,
      mb: 2,
      color: `heading`,
    },
    spinner: {
      color: `#FFFF00`,
    },
  },
  layout: {
    container: {
      maxWidth: `5xl`,
    },
  },
  buttons: {
    toggle: {
      color: `background`,
      border: `none`,
      backgroundColor: `text`,
      cursor: `pointer`,
      alignSelf: `center`,
      px: 3,
      py: 2,
      ml: 3,
    },
  },
  texts: {
    bigger: {
      p: {
        fontSize: [2, 3, 4],
      },
    },
  },
})

export default theme


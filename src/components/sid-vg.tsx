/** @jsx jsx */
import { jsx, Box, Text } from "theme-ui"
import { tailwind } from "@theme-ui/presets"
import SidSVG from '../../static/slackney-circle.png';

type SVGProps = {
  stroke?: boolean
  color?: string | number | any
  width: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | string
  left: string
  top: string
}

const SidVG = ({ stroke = false, color = ``, width, left, top = '', showName = false, loading = false, days, email }) => {

  return days && (
    <Box 
      sx={{
        position: `absolute`,
        display: `block`,
        width: !loading ? width : 0,
        height: width,
        left: !loading ? left : 0,
        top: !loading ? top : 0,
        transform: loading ? 'rotateY(180deg) rotateX(180deg)' : '',
        transitionDuration: '1000ms',
        transitionProperty: 'all',
        // border: '1px solid lightgrey',
      }}
    >
      <img 
        src={SidSVG} 
        sx={{
          width: !loading ? width : 0,
          transitionDuration: '1000ms',
          transitionProperty: 'all',
        }}
      />
      <Box 
        sx={{
            display: !loading ? 'block' : 'none',
            width,
            maxwidth: width,
            fontSize: '14px',
            color: loading ? tailwind.colors.red[8] : tailwind.colors.gray[8],
            // position: `relative`,
            // display: `flex`,
            // transform: showName ? 'rotate(90deg)' : '',
            // bottom: -10 * width,
            textAlign: 'center',
            // wordBreak: 'break-word',
            lineHeight: '14px',
            mt: '-6px',
            // border: '1px solid lightgrey',
            transitionDuration: '3000ms',
            transitionProperty: 'all',
            }}
      >
        <strong>{days}</strong> day{days > 1 ? 's' : ''}
        <br />
        {showName && <Text sx={{}}>{email}</Text>}
      </Box>

    </Box>
  )
}

export default SidVG

/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import { tailwind } from "@theme-ui/presets"
import SidSVG from '../../static/slackney-circle.png';

type SVGProps = {
  stroke?: boolean
  color?: string | number | any
  width: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | string
  left: string
  top: string
}

const SidVG = ({ stroke = false, color = ``, width, left, top = '', days, email }) => (
  <Box 
    sx={{
      position: `absolute`,
      stroke: stroke ? `currentColor` : `none`,
      display: `block`,
      width,
      height: width,
      left,
      top,
      // border: '1px solid lightgrey',
    }}
  >
    <img src={SidSVG} 
          sx={{
            width,
          }}
      
     />
    <Box 
      sx={{
          width: '100%',
          fontSize: '12px',
          color: tailwind.colors.gray[5],
          // position: `relative`,
          // display: `flex`,
          // transform: 'rotate(-90deg)',
          // bottom: -10 * width,
          textAlign: 'center',
          // border: '1px solid lightgrey',
        }}
    >
      {days} day{days > 1 ? 's' : ''}
    </Box>

  </Box>
)

export default SidVG

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

const SidVG = ({ stroke = false, color = ``, width, left, top = '', showName = false, loading = false, days, email }) => {

  return (
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
            fontSize: '12px',
            color: loading ? tailwind.colors.red[5] : tailwind.colors.gray[5],
            // position: `relative`,
            // display: `flex`,
            // transform: 'rotate(-90deg)',
            // bottom: -10 * width,
            textAlign: 'center',
            wordBreak: 'break-word',
            // border: '1px solid lightgrey',
            transitionDuration: '3000ms',
            transitionProperty: 'all',
            }}
      >
        {days} day{days > 1 ? 's' : ''}
        <br />
        {showName && <span>{email}</span>}
      </Box>

    </Box>
  )
}

export default SidVG

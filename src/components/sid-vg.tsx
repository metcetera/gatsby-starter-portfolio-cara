/** @jsx jsx */
import { jsx, Box, Text } from "theme-ui"
import { tailwind } from "@theme-ui/presets"
import SidSVG from '../../static/slackney-circle.png';

// https://emoji.slack-edge.com/T025AMBA7/sidneysmile/91cbcaea3735152b.png

const SidVG = ({ stroke = false, color = ``, width, left, top = '', showName = false, loading = false, days, email }) => {

  const isOwnEstimate = localStorage.getItem('cheers-sidney-email') === email;

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
            border: isOwnEstimate ? '1px solid' : '',
          }}
      >
        <strong>{days}</strong> day{days > 1 ? 's' : ''}
        <br />
        {(showName || isOwnEstimate) && <Text >{isOwnEstimate ? 'YOU' : email}</Text>}
      </Box>

    </Box>
  )
}

export default SidVG

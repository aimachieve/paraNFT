// material
import { styled, useTheme } from '@material-ui/core/styles';
import { Stack, Container, Typography, Button, useMediaQuery } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  margin: theme.spacing(14, 0, 0, 0),
  background: 'url(/assets/para/camp.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain'
}));
// ----------------------------------------------------------------------

export default function LandingMint() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <RootStyle id="mint">
      <Stack spacing={5} alignItems="center" justifyContent={'center'} sx={{
        height: { xs: '200px', md: '700px' },
      }}>
        <MotionInView variants={varFadeInUp}>
          <Typography sx={{
            fontSize: { xs: '25px', md: '65px' },
            letterSpacing: '-1px',
            color: '#ffffff',
            fontFamily: "'Michroma', sans-serif",
            fontStyle: 'italic',
            fontWeight: 'bold'
          }}>
            JOIN THE <span style={{ color: '#d6e618' }}>PREPPERS</span>
          </Typography>
        </MotionInView>
        <MotionInView variants={varFadeInUp}>
          <Stack direction="row" spacing={3}>
            <Button
              sx={{
                width: { xs: '150px', md: '393px' },
                height: { xs: '30px', md: '78px' },
                fontSize: { xs: '18px', md: '45px' },
                borderRadius: '20px',
                filter: `drop-shadow(0px 10px 30px rgba(2,3,2,0.94))`,
                backgroundImage: `linear-gradient(0deg, #8e9b07 0%, #c3d216 100%)`,
                border: `4px solid #f1f1f1`,
                letterSpacing: '-1px',
                lineHeight: '713px',
                color: "#000000",
                fontStyle: 'italic',
                fontWeight: 'bold',
                fontFamily: "'Michroma', sans-serif",
                "&:hover": {
                  color: 'white'
                }
              }}
            >
              MINT
            </Button>
            <Button
              sx={{
                width: { xs: '150px', md: '393px' },
                height: { xs: '30px', md: '78px' },
                fontSize: { xs: '18px', md: '45px' },
                borderRadius: '20px',
                filter: `drop-shadow(0px 10px 30px rgba(2,3,2,0.94))`,
                backgroundImage: `linear-gradient(0deg, #8e9b07 0%, #c3d216 100%)`,
                border: `4px solid #f1f1f1`,
                letterSpacing: '-1px',
                lineHeight: '713px',
                color: "#000000",
                fontFamily: "'Michroma', sans-serif",
                fontStyle: 'italic',
                fontWeight: 'bold',
                "&:hover": {
                  color: 'white'
                }
              }}
            >
              DISCORD
            </Button>
          </Stack>
        </MotionInView>
      </Stack>
    </RootStyle >
  );
}

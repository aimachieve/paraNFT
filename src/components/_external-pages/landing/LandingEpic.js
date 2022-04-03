// material
import { styled, useTheme } from '@material-ui/core/styles';
import { Container, Typography, Stack, useMediaQuery, Grid, Button } from '@material-ui/core';
import { varFadeInUp, MotionInView } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  backgroundImage: 'url(/assets/para/winter.jpg)',
  // backgroundColor: '#091c52',
  color: '#ffffff',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'left',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  }
}));
// ----------------------------------------------------------------------

export default function LandingAdvanced() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            <Grid
              container
              justifyContent={{ xs: 'center', md: 'space-around' }}
              sx={{ textAlign: { xs: 'center', md: 'left' } }}
            >
              <Grid item xs={12} md={8}>
                <MotionInView variants={varFadeInUp}>
                  <Stack justifyContent={'center'} >
                    <Typography
                      sx={{
                        fontSize: '65px',
                        letterSpacing: '-1px',
                        color: '#cddd17',
                        fontFamily: "'Michroma', sans-serif",
                        textAlign: 'left',
                        mt: 15,
                        fontStyle: 'italic',
                        fontWeight: 'bold'
                      }}
                    >
                      EPIC
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '16px',
                        letterSpacing: '0px',
                        lineHeight: '27px',
                        color: '#ffffff',
                        fontWeight: '300',
                        fontFamily: "Roboto",
                      }}
                    >
                      After completing the riggers of advanced training and the ever-constant evading of banjo picking that could never seem to drown out the squealing pigs; the preppers move on to full integration back into the dying society they had left not so long ago. But blending in does not always come so easy; as the Preppers will soon discover their unique set of skills is not usually a welcome addition to high society’s delusions of grandeur. The preppers are now left with the Epic task of fighting in the silent shadows. Surviving in this Pre-apocalyptic world is what legends are made of.
                    </Typography>
                  </Stack>
                </MotionInView>
              </Grid>
              <Grid item xs={12} md={4}>
                <img src="/assets/para/nurse.png" alt="nurse" style={{ height: '100%' }} />
              </Grid>
            </Grid>
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle >
  );
}

// material
import { styled, useTheme } from '@material-ui/core/styles';
import { Stack, Container, Grid, Button, useMediaQuery } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  margin: theme.spacing(14, 0, 0, 0),
  background: 'url(/assets/para/city.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain'
}));
// ----------------------------------------------------------------------

export default function LandingPreppers() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Grid item xs={6} md={6}>
            <MotionInView variants={varFadeInUp}>
              <Stack spacing={{xs: 1, md: 10}} alignItems="center" justifyContent={'center'} sx={{marginTop: '20%'}}>
                <img src="/assets/para/preppers_logo.png" alt='preppers_logo' />
                <Button  id="preppers"
                  sx={{
                    width: {xs: '150px', md: '393px'},
                    height: {xs: '30px', md: '78px'},
                    fontSize: {xs: '20px', md: '45px'},
                    borderRadius: '20px',
                    filter: `drop-shadow(0px 10px 30px rgba(2,3,2,0.94))`,
                    backgroundImage: `linear-gradient(0deg, #8e9b07 0%, #c3d216 100%)`,
                    border: `4px solid #f1f1f1`,
                    letterSpacing: '-1px',
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
              </Stack>
            </MotionInView>
          </Grid>
          <Grid item xs={6} md={6}>
            <img src="/assets/para/prepper_one.png" alt="prepper_one" style={{ height: '80%' }} />
          </Grid>
        </Grid>
      </Container>
    </RootStyle >
  );
}

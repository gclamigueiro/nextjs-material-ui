import Button from '@material-ui/core/Button';
import {Link} from '../routes'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import MainLayout from '../components/layout/MainLayout';

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  cardContent: {
    flexGrow: 1,
  }
}));


function Index({tiers}) {
  const classes = useStyles();

  return (
    <MainLayout title = "home page">

      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">

           <Grid container spacing={4}   alignItems="center" >
             
           <Grid item xs={12} sm={6}>
            <Typography component="h1" variant="h2"  color="textPrimary" gutterBottom>
              Some Title
            </Typography>
            <Typography variant="h5" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="flex-start">
                <Grid item>
                <Link route='about' prefetch>
                  <Button variant="contained" color="primary">
                    About
                  </Button>
                 </Link>
                </Grid>
                <Grid item>
                <Link route='content'  params={{ id: 2 }} >
                  <Button variant="outlined" color="primary">
                    Content page
                  </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
            </Grid>
            
            <Grid item xs={12} sm={6} >
            <Typography variant="h5" align='center' color="textSecondary" paragraph>
              here you can put something else
              </Typography>
            </Grid>
            
            </Grid>
          
          </Container>
        </div>
         {/* End hero unit */}
        <Container className={classes.cardGrid} maxWidth="md">
         
        <Typography id="serviceSection"  component="h2" variant="h2" align='center'  color="textPrimary" gutterBottom>
              Services
        </Typography>
       
        <Grid container spacing={2} alignItems="flex-end">
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mo
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map(line => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        </Container>
      </main>

    </MainLayout>
  );
}


Index.getInitialProps = async ({ query,res }) => {
 
  const tiers = [
    {
      title: 'Free',
      price: '0',
      description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
      buttonText: 'Sign up for free',
      buttonVariant: 'outlined',
    },
    {
      title: 'Pro',
      subheader: 'Most popular',
      price: '15',
      description: [
        '20 users included',
        '10 GB of storage',
        'Help center access',
        'Priority email support',
      ],
      buttonText: 'Get started',
      buttonVariant: 'contained',
    },
    {
      title: 'Enterprise',
      price: '30',
      description: [
        '50 users included',
        '30 GB of storage',
        'Help center access',
        'Phone & email support',
      ],
      buttonText: 'Contact us',
      buttonVariant: 'outlined',
    },
  ];

   return {
    tiers : tiers
   };
 };

 export default Index

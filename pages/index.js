
import Button from '@material-ui/core/Button';
import {Link} from '../routes'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

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
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
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


          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
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

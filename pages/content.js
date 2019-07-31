import MainLayout from '../components/layout/MainLayout';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Fragment } from 'react';
import Container from '@material-ui/core/Container';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    position: 'absolute',
    top: 0,
    left: 0
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function Page({ name, titles, current }) {
  
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [currentContent, SetCurrentContent] = React.useState(current);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  // cuando se presione un title o subtitle en el sidebar
  // se debe actualizar el contenido
  function getContent(id)
  {
    // supuestamente con el id recupero el nuevo contenido de mi api
    let ncontent = {
      id: id,
      name: 'Content ' + id,
      text: 'Text ' + id,
    }

    SetCurrentContent(ncontent)
  }


  return (
    <MainLayout title="content page">
      <div className={classes.root}>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{ paper: classes.drawerPaper }}
        >
          <div className={classes.drawerHeader}>
            {name}

            <IconButton onClick={handleDrawerClose}>
              {<ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />

          <List>
            {titles.map((title, index) => (
              <Fragment key={title.id}>
                {/* primero pongo el titulo */}
                <ListItem button onClick={(e) => getContent(title.id, e)}>
                  {/*<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>*/}
                  <ListItemText primary={title.name} />
                </ListItem>

                {title.subtitles.map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}

                <Divider />
              </Fragment>
            ))}
          </List>
        </Drawer>

        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>

            <Container>
            <Typography variant="h5"  paragraph align='center'>
              {currentContent.name}
            </Typography>
            </Container>
          </div>

          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
            Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
            gravida rutrum quisque non tellus. Convallis convallis tellus id
            interdum velit laoreet id donec ultrices. Odio morbi quis commodo
            odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum
            est ultricies integer quis. Cursus euismod quis viverra nibh cras.
            Metus vulputate eu scelerisque felis imperdiet proin fermentum
            leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt
            lobortis feugiat vivamus at augue. At augue eget arcu dictum
            varius duis at consectetur lorem. Velit sed ullamcorper morbi
            tincidunt. Lorem donec massa sapien faucibus et molestie ac.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Ornare
            suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
            volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
            Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
            ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
            aliquam sem et tortor. Habitant morbi tristique senectus et.
            Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
            aenean euismod elementum nisi quis eleifend. Commodo viverra
            maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
            aliquam ultrices sagittis orci a.
          </Typography>
        </main>
      </div>
    </MainLayout>
  );
}

Page.getInitialProps = async ({ req }) => {
 // const res = await fetch('https://api.github.com/repos/developit/preact')
  // const json = await res.json()
  return {
    name: "Content",
    titles: [
      {
        id: 1,
        name: "Title 1",
        subtitles: ["Subtitle 1", "Subtitle 2", "Subtitle 3"]
      },
      {
        id: 2,
        name: "Title 2",
        subtitles: ["Subtitle 1", "Subtitle 2", "Subtitle 3"]
      },
      {
        id: 3,
        name: "Title 3",
        subtitles: ["Subtitle 1", "Subtitle 2", "Subtitle 3"]
      },
      {
        id: 4,
        name: "Title 4",
        subtitles: ["Subtitle 1", "Subtitle 2", "Subtitle 3"]
      },
      {
        id: 5,
        name: "Title 5",
        subtitles: ["Subtitle 1", "Subtitle 2", "Subtitle 3"]
      }
    ],
    current: {
      id: 1,
      name: "Content 1",
      text: "Some text"
    }
  };
};



export default Page

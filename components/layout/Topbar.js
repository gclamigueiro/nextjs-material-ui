import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import Hidden from "@material-ui/core/Hidden";
import NextLink from "next/link";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    cursor: 'pointer'
  }
}));

/* Menù que se visualiza en mòviles */
const MobileMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <IconButton
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <NextLink href="/about" prefetch as="nosotros">
          <MenuItem onClick={handleClose}>Nosotros</MenuItem>
        </NextLink>
        <MenuItem onClick={handleClose}>Servicios</MenuItem>
        <MenuItem onClick={handleClose}>Registrarse</MenuItem>
        <MenuItem onClick={handleClose}>Login</MenuItem>
      </Menu>
    </div>
  );
};

export default function Topbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <NextLink href="/" prefetch>
            <Typography variant="h6" className={classes.title}>
              Site Name
            </Typography>
          </NextLink>

          <Hidden xsDown>
            <NextLink href="/about" prefetch as="nosotros">
              <Button color="inherit">Nosotros</Button>
            </NextLink>
            <Button color="inherit">Servicios</Button>
             <i className='vseparator'></i>
            <Button color="inherit">Registrarse</Button>
            <Button color="inherit">Login</Button>
          </Hidden>

          <Hidden smUp>{MobileMenu()}</Hidden>
        </Toolbar>
      </AppBar>


      <style jsx>{`
        .vseparator {
          border-right: 2px solid white;
          padding:  15px 0px ;
          margin:   0px 15px 0px 25px  ;
        }
      `}</style>


    </div>
  );
}
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
import {Link} from '../../routes'
import { Link as RLink, animateScroll as scroll } from "react-scroll";
import { useRouter } from 'next/router';

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

/* Menú que se visualiza en móviles */
const MobileMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

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
        <Link route='about' prefetch>
          <MenuItem onClick={handleClose}>About</MenuItem>
        </Link>

   
        {router.pathname == "/" ? (
              <RLink
                to="serviceSection"
                smooth={true}
                offset={-10}
                duration={500}
              >
                <MenuItem onClick={handleClose}>Services</MenuItem>
              </RLink>
            ) : (
              <Link href="/#serviceSection" prefetch>
                <MenuItem onClick={handleClose}>Services</MenuItem>
              </Link>
            )
            }
       
        <Link route='register' prefetch>
        <MenuItem onClick={handleClose}>Sign up</MenuItem>
        </Link>
        <Link route='login' prefetch>
        <MenuItem onClick={handleClose}>Sign in</MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default function Topbar() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link route='home' prefetch>
            <Typography variant="h6" className={classes.title}>
              Site Name
            </Typography>
          </Link>

          <Hidden xsDown>
            <Link route='about' prefetch>
              <Button color="inherit">About</Button>
            </Link>

            {router.pathname == "/" ? (
              <RLink
                to="serviceSection"
                smooth={true}
                offset={-10}
                duration={500}
              >
                <Button color="inherit">Services</Button>
              </RLink>
            ) : (
              <Link href="/#serviceSection" prefetch>
                <Button color="inherit">Services</Button>
              </Link>
            )}
            <i className="vseparator" />

            <Link route='register' prefetch>
              <Button color="inherit">Sign up</Button>
            </Link>

            <Link route='login' prefetch>
              <Button color="inherit">Sign in</Button>
            </Link>
          </Hidden>

          <Hidden smUp>{MobileMenu()}</Hidden>
        </Toolbar>
      </AppBar>

      <style jsx>{`
        .vseparator {
          border-right: 2px solid white;
          padding: 15px 0px;
          margin: 0px 15px 0px 25px;
        }
      `}</style>
    </div>
  );
}

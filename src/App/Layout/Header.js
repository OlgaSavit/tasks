import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@material-ui/core/ListItemText";
import {Grid} from "@mui/material";

const Header=({showBtn,onToggleMenu})=> {

    return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        {showBtn && <IconButton
                             onClick={() => onToggleMenu()}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                        >
                            <MenuIcon/>
                        </IconButton>}
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            {'Profile'}
                        </Typography>
                        <Grid sx={{width:'100px'  }}>
                            <ListItemButton sx={{justifyContent:'center' }}  component="a" href="signIn">
                                Login
                            </ListItemButton>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>

    );
}
export default Header;
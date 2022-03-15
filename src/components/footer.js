import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import { NavLink } from "react-router-dom";
import { Helmet } from 'react-helmet';

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
});


const Footer = () => {
    return (
        <React.Fragment className="footer">
            <Helmet>
                <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
                <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Neonderthaw&display=swap" rel="stylesheet"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap" rel="stylesheet"></link>
            </Helmet>
            <div className="footer">
                <AppBar color="inherit" position="fixed" sx={{ top: 'auto', bottom: 0 }}>
                    <div className='icon-container'>
                        <a href="https://github.com/groverbraam" target="_blank"><ion-icon id="logo-github" name="logo-github"></ion-icon></a>
                        <a href="https://www.linkedin.com/in/christophermaleakethompson/" target="_blank"><ion-icon id="logo-linkedin" name="logo-linkedin"></ion-icon></a>
                        <a href="mailto:christophermaleakethompson@gmail.com"><ion-icon name="mail-outline"></ion-icon></a>
                        <a><ion-icon id="dayNight-outline" name="moon-outline"></ion-icon></a>
                    </div>
                </AppBar>
            </div >
        </React.Fragment >
    );
}
export default Footer;
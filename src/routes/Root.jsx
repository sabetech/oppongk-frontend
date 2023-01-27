import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "../styles/home.css";
import AppBar  from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import MenuList from '../resource/MenuItems.json';
import MenuItems from '../components/MenuItems';
import { Link, Outlet } from 'react-router-dom'


export default function Root() {

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <TopBarInfo />    
            <MainMenuBar />
            
            <Outlet />
        </div>
    );
}


function TopBarInfo() {
    return (
        <div className='topbar'>
            <Typography sx={{fontSize: 12}}>Time & date</Typography>
            <Typography sx={{fontSize: 12}}>Oppong Kyekyeku LTD</Typography>
            <Typography sx={{fontSize: 12}}>Time & date</Typography>
        </div>
    );
}

function MainMenuBar() {
    return (
        <Box className='app-menu-bar'>
        <AppBar position="static" sx={{backgroundColor: 'aliceblue', width: '100%'}}>
        <Container>
          <Toolbar > 
            <Typography sx={{ color: 'black' }}>
              Oppong Kyekyeku POS
            </Typography>

            <Grid container sx={{ justifyContent:'flex-end', marginRight: '10%' }} spacing={0.2}>
                <MenuItems fontSize={12} imgWidth={32} />
            </Grid>

          </Toolbar>
        </Container>
        </AppBar>
      </Box>
    );
}

function MainContent() {
    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            position: 'absolute', 
            top: '20%',
            margin: 'auto', 
            width:'100%' 
            }}>
            <h4>Welcome to Oppong Kyekyeku POS, click a module below to get started.</h4>
            <Grid >
                <MenuItems />
            </Grid>
        </div>
    );
}

function Footer() {
    return (
        <div style={{ backgroundColor: 'grey', height: '100px' }}>
           Oppong Kyekyeku LTD. 2023
        </div>
    );
}
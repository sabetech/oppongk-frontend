import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "../styles/home.css";
import AppBar  from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import MenuList from '../resource/MenuItems.json';
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
            <Typography>Time & date</Typography>
            <Typography>Time & date</Typography>
            <Typography>Time & date</Typography>
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

function MenuItems({fontSize, imgWidth}) {
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            {
                MenuList.main_menu.map(item => <MenuItem key={item.title} icon={item.icon} title={item.title} fontSize={fontSize} imgWidth={imgWidth} />)
            }
        </div>
    )
}

function MenuItem({icon, title, fontSize, imgWidth}) {
    return(
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            marginRight: 10,
            marginLeft: 10 
            }}>
          
            <img src={`app_icons/${icon}.png`} width={imgWidth} />
            <Typography sx={{color: 'grey', fontSize: fontSize}}>{title}</Typography>
            
        </div>
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
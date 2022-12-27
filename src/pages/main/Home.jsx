import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "../../styles/home.css";
import AppBar  from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import MenuList from '../../resource/MenuItems.json'

export default function Home() {

    return (
        <>
            <TopBarInfo />    
            <MainMenuBar />
        </>
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
        <AppBar position="static" sx={{backgroundColor: 'aliceblue'}}>
        <Container>
          <Toolbar > 
            <Typography sx={{ color: 'black' }}>
              Oppong Kyekyeku POS
            </Typography>

            <Grid container sx={{ justifyContent:'flex-end', marginRight: '10%' }} spacing={0.2}>
                <MenuItems />
            </Grid>

          </Toolbar>
        </Container>
        </AppBar>
      </Box>
    );
}

function MenuItems() {
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            {
                MenuList.main_menu.map(item => <MenuItem icon={item.icon} title={item.title} />)
            }
        </div>
    )
}

function MenuItem({icon, title}) {
    return(
        // <Grid item sm={1} sx={{ flexDirection: 'column', justifyContent: 'center',marginRight: 1 }}>
        //     <img src={`app_icons/${icon}.png`} width={32} />
        //     <Typography sx={{color: 'grey', fontSize: 14}}>{title}</Typography>
        // </Grid>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '5%' }}>
            <img src={`app_icons/${icon}.png`} width={32} />
            <Typography sx={{color: 'grey', fontSize: 14}}>{title}</Typography>
        </div>
    );
}
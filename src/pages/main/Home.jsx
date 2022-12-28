import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MenuItems from '../../components/MenuItems';


export default function Home() {

    return (     
        <Container >
            <MainContent />
        </Container>
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
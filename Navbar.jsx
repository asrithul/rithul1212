import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (

    <Box sx={{FlexGrow:1}}>
        <AppBar position='static'>
            <Toolbar>

                <Typography variant="h6"component="div"sx={{FlexGrow:1}}>
                    Movies
                </Typography>

                <Button><Link to='/Movie1'style={{color:"white"}}>Movies</Link></Button>

                <Button><Link to='/Addmovie'style={{color:"white"}}></Link>addmovies</Button>
            </Toolbar>
        </AppBar>
    </Box>
    <div>
      
    </div>
  )
}

export default Navbar

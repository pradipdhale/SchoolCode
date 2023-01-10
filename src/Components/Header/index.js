import { Box, styled, AppBar, Toolbar } from '@mui/material'
import React from 'react'
import LOGO from '../../Assets/logo.png'
import  AccountCircleIcon from '@mui/icons-material/AccountCircle';

const StyledBox = styled(Toolbar)`
  margin-left: 35px;
  margin-top: 10px;
`

const Img = styled('img')`
  height: 35px;
`

const StyledDiv = styled(Box)`
  width: 35%;
  height: 50px;
  margin-left: 10px;
`

const StyledDiv2 = styled(Box)`
  width: 20%;
  height: 50px;
  margin-left: 100px;
`

const NavBar = () => {
  return (
    <AppBar style={{ backgroundColor: 'white' }}>
      <StyledBox>
        <Img src={LOGO} /> 
        <StyledDiv style={{ backgroundColor: '#edf3f4' }}></StyledDiv>
        <StyledDiv2 style={{ backgroundColor: '#edf3f4' }}></StyledDiv2>
        <AccountCircleIcon />
      </StyledBox>
      
    </AppBar> 
  )
}

export default NavBar

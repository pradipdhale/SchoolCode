import { Box, styled, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'

const StyledBox = styled(Box)`
  width: 320px;
  height: 500px;
`
const StyledTypoBox = styled(Box)`
  width: 300px;
  height: 500px;
  border: 2px solid #a5a7a6;
  padding: 10px 17px;
`
const StyledButton = styled(Box)`
  background-color: #014c6d;
  border: none;
  color: white;
  height: 40px;
  width: inherit;
  font-size: 20px;
  margin: 4px 1px;
  cursor: pointer;
`

const StyledButton2 = styled(Box)`
  background-color: #28708c;
  border: none;
  color: white;
  height: 40px;
  width: inherit;
  font-size: 20px;
  margin: 4px 1px;
  cursor: pointer;
`

const StyledButton3 = styled(Box)`
  background-color: #76afb5;
  border: none;
  color: white;
  height: 40px;
  width: inherit;
  font-size: 20px;
  margin: 4px 1px;
  cursor: pointer;
`

const StyledArrowCircleLeftIcon = styled(ArrowCircleLeftIcon)`
  margin-top: 220px;
  margin-left: 30px;
`

const StyledArrowCircleRightIcon = styled(ArrowCircleRightIcon)`
  // margin-top: 250px;
  margin-left: 12px;
`

const SchoolShedule = () => {
  const [enrolled, setEnrolled] = useState([])

  const [books, setBooks] = useState(['gfdjdss'])

  const [inclasses, setInClasses] = useState(['hsadghga'])

  let enrolledValues = [
    'Phoenix Newton',
    'Raees Mayers',
    'Elysia Thornton',
    'Aarav Mcmillan',
    'Jana Sims',
    'Lukas Shannon',
    'Rowan Garner',
    'Travis Shelton',
    'Larrissa Barker',
  ]

  let booksValue = [];
  let inclassValue = []
 
  function swipeData(enrolledValues,booksValue){
    let swipeValue = enrolledValues.pop()
    console.log(swipeValue);
    console.log(enrolledValues);
    setBooks([...booksValue,swipeValue])
 }

  useEffect(() => {
    setEnrolled(enrolledValues);
    setBooks(booksValue);
  }, [enrolledValues,booksValue])
  return (
    <Box style={{ display: 'flex' }}>
      <StyledBox style={{ marginLeft: 60 }}>
        <Box>
          <Typography> Enrolled with schoolcode </Typography>
          <StyledTypoBox>
            {enrolled.map((enroll) => 
              <StyledButton>{enroll}</StyledButton>
            )}
          </StyledTypoBox>
        </Box>
      </StyledBox>
      <Box style={{ display: 'block' }}>
        <StyledArrowCircleLeftIcon />
        <br />
        <StyledArrowCircleRightIcon style={{ marginLeft: 32 }} onClick={()=>swipeData(enrolledValues,booksValue)} />
      </Box>
      <StyledBox style={{ marginLeft: 10 }}>
        <Box>
          <Typography> Book for Class </Typography>
          <StyledTypoBox>
          {books.map((book) => 
              <StyledButton2>{book}</StyledButton2>
            )}
          </StyledTypoBox>
        </Box>
      </StyledBox>

      <Box style={{ display: 'block' }}>
        <StyledArrowCircleLeftIcon />
        <br />
        <StyledArrowCircleRightIcon style={{ marginLeft: 32 }} />
      </Box>

      <StyledBox style={{ marginLeft: 10 }}>
        <Box>
          <Typography> In Class </Typography>
          <StyledTypoBox>
          {inclasses.map((inclass) => 
              <StyledButton3>{inclass}</StyledButton3>
            )}
          </StyledTypoBox>
        </Box>
      </StyledBox>
    </Box>
  )
}

export default SchoolShedule

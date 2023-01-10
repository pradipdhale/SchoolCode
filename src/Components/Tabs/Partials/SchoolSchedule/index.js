import { Box, Button, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
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
const StyledMovingBox = styled(Button)`
  background-color: #014c6d;
  border: none;
  color: white;
  height: 40px;
  width: inherit;
  font-size: 20px;
  margin: 4px 1px;
  cursor: pointer;
`

const StyledMovingBox2 = styled(Button)`
  background-color: #28708c;
  border: none;
  color: white;
  height: 40px;
  width: inherit;
  font-size: 20px;
  margin: 4px 1px;
  cursor: pointer;
`

const StyledMovingBox3 = styled(Button)`
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


  const [enrolled, setEnrolled] = useState([...enrolledValues])

  const [books, setBooks] = useState([])

  const [inclasses, setInClasses] = useState([])


 
  function swipeData(
    data1, //from
    data2, //to
    data1a, //setfrom
    data2a //setTo
  ) {
    if (data1.length > 0) {
      let swipeValue = data1.shift();
      data1a(data1);
      data2a([...data2, swipeValue]);
      console.log("swipeValue", swipeValue);
      console.log("enrolled", data1);
      console.log("books", data2);
    }
  }
  return (
    <Box style={{ display: "flex" }}>
      <StyledBox style={{ marginLeft: 60 }}>
        <Box>
          <Typography> Enrolled with schoolcode </Typography>
          <StyledTypoBox>
            {enrolled.map((enroll) => (
              <StyledMovingBox>{enroll}</StyledMovingBox>
            ))}
          </StyledTypoBox>
        </Box>
      </StyledBox>
      <Box style={{ display: "block" }}>
        <StyledArrowCircleLeftIcon
          onClick={() => swipeData(books, enrolled, setBooks, setEnrolled)}
        />
        <br />
        <StyledArrowCircleRightIcon
          style={{ marginLeft: 32 }}
          onClick={() => swipeData(enrolled, books, setEnrolled, setBooks)}
        />
      </Box>
      <StyledBox style={{ marginLeft: 10 }}>
        <Box>
          <Typography> Book for Class </Typography>
          <StyledTypoBox>
            {books.map((book) => (
              <StyledMovingBox2>{book}</StyledMovingBox2>
            ))}
          </StyledTypoBox>
        </Box>
      </StyledBox>

      <Box style={{ display: "block" }}>
        <StyledArrowCircleLeftIcon
          onClick={() => swipeData(inclasses, books, setInClasses, setBooks)}
        />
        <br />
        <StyledArrowCircleRightIcon
          style={{ marginLeft: 32 }}
          onClick={() => swipeData(books, inclasses, setBooks, setInClasses)}
        />
      </Box>

      <StyledBox style={{ marginLeft: 10 }}>
        <Box>
          <Typography> In Class </Typography>
          <StyledTypoBox>
            {inclasses.map((inclass) => (
              <StyledMovingBox3>{inclass}</StyledMovingBox3>
            ))}
          </StyledTypoBox>
        </Box>
      </StyledBox>
    </Box>
  )
}

export default SchoolShedule

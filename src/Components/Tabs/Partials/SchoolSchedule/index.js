import { Box, Button, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const StyledBox = styled(Box)`
  width: 320px;
  height: 500px;
`;
const StyledTypoBox = styled(Box)`
  width: 300px;
  height: 500px;
  border: 2px solid #a5a7a6;
  padding: 10px 17px;
`;
const StyledMovingBox = styled(Button)`
  background-color: #014c6d;
  color: white;
  height: 40px;
  width: inherit;
  font-size: 20px;
  margin: 4px 1px;
  cursor: pointer;
`;

const StyledMovingBox2 = styled(Button)`
  background-color: #28708c;
  border: none;
  color: white;
  height: 40px;
  width: inherit;
  font-size: 20px;
  margin: 4px 1px;
  cursor: pointer;
`;

const StyledMovingBox3 = styled(Button)`
  background-color: #76afb5;
  border: none;
  color: white;
  height: 40px;
  width: inherit;
  font-size: 20px;
  margin: 4px 1px;
  cursor: pointer;
`;

const StyledArrowCircleLeftIcon = styled(ArrowCircleLeftIcon)`
  margin-top: 220px;
  margin-left: 30px;
`;

const StyledArrowCircleRightIcon = styled(ArrowCircleRightIcon)`
  // margin-top: 250px;
  margin-left: 12px;
`;

const SchoolShedule = () => {
  let enrolledValues = [
    { id: "1", name: "Phoenix Newton", selected: false },
    { id: "2", name: "Raees Mayers", selected: false },
    { id: "3", name: "Elysia Thornton", selected: false },
    { id: "4", name: "Aarav Mcmillan", selected: false },
    { id: "5", name: "Jana Sims", selected: false },
    { id: "6", name: "Lukas Shannon", selected: false },
    { id: "7", name: "Travis Shelton", selected: false },
    { id: "8", name: "Larrissa Barker", selected: false },
  ];

  const [enrolled, setEnrolled] = useState([...enrolledValues]);

  const [books, setBooks] = useState([]);

  const [inclasses, setInClasses] = useState([]);

  const ClickedEnroll = (e) => {
    // max 1 selected
    if (!e.target.classList.contains("selected")) {
      const selectedCount = enrolled.filter((enroll) => enroll.selected).length;
      if (selectedCount === 1) {
        return;
      }
    }

    setEnrolled(
      enrolled.map((enroll) =>
        enroll.id === e.target.getAttribute("data-id")
          ? { ...enroll, selected: !enroll.selected }
          : enroll
      )
    );
  };

  const ClickedInclasses = (e) => {
    // max 1 selected
    if (!e.target.classList.contains("selected")) {
      const selectedCount = inclasses.filter(
        (enroll) => enroll.selected
      ).length;
      if (selectedCount === 1) {
        return;
      }
    }

    setInClasses(
      inclasses.map((enroll) =>
        enroll.id === e.target.getAttribute("data-id")
          ? { ...enroll, selected: !enroll.selected }
          : enroll
      )
    );
  };

  const ClickedBooks = (e) => {
    // max 1 selected
    if (!e.target.classList.contains("selected")) {
      const selectedCount = books.filter((enroll) => enroll.selected).length;
      if (selectedCount === 1) {
        return;
      }
    }

    setBooks(
      books.map((enroll) =>
        enroll.id === e.target.getAttribute("data-id")
          ? { ...enroll, selected: !enroll.selected }
          : enroll
      )
    );
  };

  function swipeData(
    data, //from
    data2, //to
    setData, //setfrom
    setData2 //setTo
  ) {
    let constArr = [];
    data.map((enroll) => {
      if (enroll.selected) {
        enroll.selected = false;
        setData2([...data2, { ...enroll }]);
      } else {
        constArr = [...constArr, { ...enroll }];
      }
      setData([...constArr]);
    }
    );
  }
  return (
    <Box style={{ display: "flex" }}>
      <StyledBox style={{ marginLeft: 60 }}>
        <Box>
          <Typography> Enrolled with schoolcode </Typography>
          <StyledTypoBox>
            {enrolled.map((enroll) => (
              <StyledMovingBox
                value={enroll.id}
                data-id={enroll.id}
                key={enroll.id}
                className={enroll.selected && "selected"}
                onClick={ClickedEnroll}
              >
                {enroll.name}
              </StyledMovingBox>
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
          onClick={() =>
            swipeData(
              enrolled, //from
              books, //to
              setEnrolled, //setfrom
              setBooks //setTo
            )
          }
        />
      </Box>
      <StyledBox style={{ marginLeft: 10 }}>
        <Box>
          <Typography> Book for Class </Typography>
          <StyledTypoBox>
            {books.map((book) => (
              <StyledMovingBox2
                value={book.id}
                data-id={book.id}
                key={book.id}
                className={book.selected && "selected"}
                onClick={ClickedBooks}
              >
                {book.name}
              </StyledMovingBox2>
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
              <StyledMovingBox3
                value={inclass.id}
                data-id={inclass.id}
                key={inclass.id}
                className={inclass.selected && "selected"}
                onClick={ClickedInclasses}
              >
                {inclass.name}
              </StyledMovingBox3>
            ))}
          </StyledTypoBox>
        </Box>
      </StyledBox>
    </Box>
  );
};

export default SchoolShedule;

import { Button, Typography, Paper } from "@mui/material";
import backGroundimage from "../assets/cisv-bg.png";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

const BackGroundDiv = styled("div")({
  backgroundImage: `url(${backGroundimage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backdropFilter: "blur(10px)",
});

const StyledPaper = styled(Paper)({
  width: "50%",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  margin: "0 auto",
  backgroundColor: "rgba(255, 255, 255, 0.3)",
});

const MainPageView = () => {
  return (
    <BackGroundDiv>
      <StyledPaper elevation={24}>
        <Typography variant="h3" align="center">
          Bienvenidos a CISV Barcelona
        </Typography>
        <div>
          <Link to="/login">
            <Button variant="contained"> Log in</Button>
          </Link>
          <Link to="/signup">
            <Button variant="contained"> Sign up</Button>
          </Link>
        </div>
      </StyledPaper>
    </BackGroundDiv>
  );
};

export default MainPageView;

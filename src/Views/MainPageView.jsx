import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const MainPageView = () => {
  return (
    <div>
      <Typography variant="h4">MainPageView</Typography>

      <Link to="/login">
        <Button variant="outlined"> Log in</Button>
      </Link>
      <Link to="/signup">
        <Button variant="outlined"> Sign up</Button>
      </Link>
    </div>
  );
};

export default MainPageView;

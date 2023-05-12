import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// import { SearchBar } from "./";

import { logo } from "../utils/Constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack 
    direction="row" 
    alignItems="center"
    p={2}
    sx={{ 
      position:  "sticky", 
      background: '#000', 
      top: 0,
      justifyContent: "space-between"
    }}>

    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>

    <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          YOU-TUBE<span style={{ color: "#FC1503" }}> CLONE 2.0</span>
    </Typography>
    
    {/* Adding searchbar component */}
    <SearchBar />

  </Stack>
);

export default Navbar;

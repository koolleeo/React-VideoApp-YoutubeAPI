import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

function Navbar() {
  return (

    // flexbox for MUI - one dimension
  <Stack 
      direction="row" 
      alignItems="center" 
      p={2} 
      sx={{ 
            position:  "sticky", 
            background: '#000', 
            top: 0, 
            justifyContent: "space-between" 
          }}
    >
    
{/* take user to home whenever the logo is clicked */}

  <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
  </Link>

{/* add search bar component */}

  <SearchBar />
  
  </Stack>
  )
  };

export default Navbar;
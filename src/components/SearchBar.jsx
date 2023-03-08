import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {

// set up state for searchTerm
const [searchTerm, setSearchTerm] = useState('');

// initiate useNavigate hook
const navigate = useNavigate();

// on submit event handler
const onhandleSubmit = (event) => {

    event.preventDefault();

    if (searchTerm) {

      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (

// paper MUI component - essentially just a white background container DIV with elevation

    <Paper
      component='form'
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >

      <input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

{/* add search icon button */}

      <IconButton 
            type='submit' 
            sx={{ p: '10px', color: 'red' }} 
            aria-label='search'>

{/* add search icon */}

        <SearchIcon />

      </IconButton>

    </Paper>

  );
};

export default SearchBar;

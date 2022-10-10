import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import {TextField, InputBase} from '@mui/material'
const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        pl: 2,
        border: "1px solid #e3e3e3",

        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <InputBase  
       placeholder="Search..."
        value=""
        onChange={() => {}}
        sx={{
          border: "none",
          outline: "none"
        }}
        className="search-bar" />
      
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;

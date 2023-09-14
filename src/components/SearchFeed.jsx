import { React, useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import {Videos} from "./";

import  { fetchFromAPI } from '../utils/fetchFromAPI'
import { useParams } from "react-router-dom";


const SearchFeed = () => {

  const [videos,setVideos]=useState([]);
  const {searchTerm}=useParams();
  
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>setVideos(data.items))
  },[searchTerm]);
  return (
    <Box p={2} sx={{overflow:'auto',height:'90vh',flex:2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:'white',textAlign:'center'}}>
          Search result for:  <span style={{color:'#F31503'}}>{searchTerm}</span> videos
        </Typography>

        <Box sx={{ml:'8%'}}>
          <Videos videos={videos}/>
        </Box>
      </Box>
  );
};

export default SearchFeed;

import React from 'react'
import {Link} from 'react-router-dom'
import {Box,Typography,CardContent,CardMedia} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({channelDetail,marginTop}) => {
  return (
    <Box sx={{boxShadow:'none',borderRadius:'20px',display:'flex',justifyContent:'center',alignItems:'center',width:{xs:'200px',md:'220px'},margin:'auto',marginTop,}}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',textAlign:'center',color:'#fff'}}>
            <CardMedia
                image={channelDetail?.snippet?.thumbnails?.high?.url||demoProfilePicture}
                alt={channelDetail?.snippet?.title}
                sx={{borderRadius:'50%',height:'140px',width:'140px',mb:2,border:'1px solid #e3e3e3'}}
            />
            <Typography variant='h6'>
                {channelDetail?.snippet?.title}
                <CheckCircle sx={{fontSize:14,color:'gray',ml:'5px'}}/>
            </Typography>
            {channelDetail?.statistics?.subscriberCount &&(
                <Typography sx={{fontSize:'15px',fontWeight:500,color:'gray'}}>
                    {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
                </Typography>
            )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard

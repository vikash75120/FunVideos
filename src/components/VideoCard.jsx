import React from 'react'
import {Link} from 'react-router-dom'
import {Typography,Card,CardContent,CardMedia} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl,demoVideoUrl,demoChannelUrl,demoChannelTitle } from '../utils/constants'

const VideoCard = ({video:{id:{videoId},snippet}}) => {
    
  return (
    <card sx={{width:{md:'320px',xs:'100%'}, boxShadow:'none', borderRadius:'none'}}>
      <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
        <CardMedia 
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{width:358,height:180}}
        />
      </Link>
      <CardContent />
    </card>
  )
}

export default VideoCard

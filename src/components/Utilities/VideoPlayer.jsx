"use client"

import YouTube from "react-youtube"

const VideoPlayer = ({youtubeId}) => {

    const option = {
        width : "250",
        height : "150"
    }

    return (
        <div className="py-5">
            <YouTube 
            videoId={youtubeId} 
            opts={option} 
            onReady={(event) => event.target.pauseVideo} 
            />
        </div>
    )
}

export default VideoPlayer
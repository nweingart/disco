import React, { useState, useEffect } from 'react'
import { getRecommendedTracks } from "../../../spotify/SpotifyAuth";
import Grid from "@material-ui/core/Grid";
import TracksCard from "../../../components/common/TracksCard";

const RecommendedTracks = () => {
  const [recommendedTracks, setRecommendedTracks] = useState(null)

  useEffect(() => {
    const TopRecommendations = async () => {
      const { data } = await getRecommendedTracks()

      setRecommendedTracks(data)
    }
    TopRecommendations()
  })

  console.log(recommendedTracks)

  return (
    <Grid container>
      {recommendedTracks?.map((track) => {
        return (
          <Grid item xs={12} md={4} lg={3}>
            <TracksCard name={track.name} artist={track.artists[0].name} cardImageUrl={track.album.images[0].url} dialogueImageUrl={track.album.images[1].url} popularity={track.popularity}/>
          </Grid>
        );
      })}
    </Grid>
  )
}

export default RecommendedTracks
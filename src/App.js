import React, {useState, useEffect} from 'react';
import './App.css';
import Map from "./components/Map/Map"
import Airtable from "airtable"
import styled from "styled-components"
import TargetList from "./components/TargetList"

const base = new Airtable({ apiKey: 'keyOvvhUnOpma7wQk' }).base(`appldMpv9yJNhFW5C`)

let markers = []




const App = ({classNAme}) => {

  const zoomPlace = ( focusLat, focusLng) => {
    let center = {
      lat: focusLat,
      lng: focusLng
    }
    let zoom = 15
    setZoom(zoom)
    setCenter(center)
  }

  //STATE
  const [zoom, setZoom] = useState(10)
  const [center, setCenter] = useState(
    {lat:51.51600, lng:-0.14707}     
  )
  const [activeMarker, setActiveMarker] = useState({})
  const [locations, setLocations] = useState([])
  const [selectedPlace, setSelectedPlace] = useState({})
  const [showInfoWindow, setShowInfoWIndow] = useState(false)

  //FUNCTIONS

  const onTargetClick = ( id ) => {

  }

  const clickMarker = (props, marker) => {
    zoomPlace(props.position.lat, props.position.lng)
    setActiveMarker(marker)
    setSelectedPlace(props)
    setShowInfoWIndow(true)
    
}

  const onMarkerCreated = (marker) =>{
    if(marker !== null){
      markers.push(marker)
    }
  }
  

  useEffect(()=>{
    base(`advan-targets`).select({view: `Grid view`})
    .eachPage(
      (records, fetchNextPage) => {
        setLocations(records)
      }
    )
  },[])

console.log(selectedPlace)
  return (
    <>
    <div className={classNAme}>
     <div className="map">
      <Map
      zoom={zoom}
      initialCenter={center}
      center={center}
      locations={locations}
      onMarkerCreated={onMarkerCreated}
      onMarkerClick={clickMarker}
      onMarker={activeMarker}
      onVisible={showInfoWindow}
      selectedPlace={selectedPlace.title}
      />
      </div>
    </div>
    <div className="targetList">
    <TargetList 
      targetList={locations}
      targetClick={()=> onTargetClick(locations.id)}
    />
  </div>
  </>
  );
}

export const StyledApp = styled(App)`
disply: grid;
grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
.map {
width: 50vw;
}
`



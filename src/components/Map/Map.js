import React from "react"
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react"

const MapContainer = ({zoom, center, google, locations, onMarkerCreated, onMarker, onMarkerClick, onInfoWindowClose, onVisible,selectedPlace}) => {
    console.log(google)
    return(
        <Map
            google={google}
            initialZoom={zoom}
            zoom={zoom}
            initialCenter={center}
            center={center}

        >
            {
            locations.map(
                (location,index) => {
            index+=1
                return (
                    
                    <Marker
                        key={location.id}
                        id={location.id}
                        label={index.toString()}
                        title={location.fields.name}
                        position={{
                        lat: location.fields.lat,
                        lng: location.fields.lng
                        }}
                        ref={onMarkerCreated}
                        onClick={(props, marker)=> onMarkerClick(props, marker)}
                        >
                            
                    </Marker>
                    
                )        
            }
        )
    }
<InfoWindow
            marker= {onMarker}
            onClose= {onInfoWindowClose}
            visible= {onVisible}
        >
            <h4>{selectedPlace}</h4>
        </InfoWindow>
        
        </Map>
    )}

export default GoogleApiWrapper({
    apiKey: `AIzaSyBvAE5_gXdbRBaC25SNezqG8kFkMpdZ4K4`
})(MapContainer)
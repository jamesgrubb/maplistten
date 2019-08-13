import React from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

export class Container extends React.Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>;
    }
    return <div>Map will go here</div>;
  }
}
const style = {
  width: "50vw",
  height: "75vh",
  marginLeft: "auto",
  marginRight: "auto"
};
const MapContainer = ({
  zoom,
  center,
  google,
  locations,
  onMarkerCreated,
  onMarker,
  onMarkerClick,
  onInfoWindowClose,
  onVisible,
  selectedPlace
}) => {
  console.log(google);
  return (
    <div style={{ gridColumn: "1fr" }}>
      <Map
        google={google}
        initialZoom={zoom}
        zoom={zoom}
        initialCenter={center}
        center={center}
        // style={style}
      >
        {locations.map((location, index) => {
          index += 1;
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
              onClick={(props, marker) => onMarkerClick(props, marker)}
            />
          );
        })}
        <InfoWindow
          marker={onMarker}
          onClose={onInfoWindowClose}
          visible={onVisible}
        >
          <h4>{selectedPlace}</h4>
        </InfoWindow>
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY
})(MapContainer);

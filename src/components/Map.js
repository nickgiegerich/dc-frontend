import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker,Polygon } from "react-google-maps"

const coords = [
        { lat: 42.6027, lng: -114.3644 },
        { lat: 42.5931, lng: -114.3644 },
        { lat: 42.5950, lng: -114.3699 },
        { lat: 42.5989, lng: -114.3699 },
        { lat: 42.5989, lng: -114.3779 },
        { lat: 42.5989, lng: -114.3848 },
        { lat: 42.6027, lng: -114.3849},
   ];

const reversedCoords = coords.map( ll => {
    return { lat: ll.lng, lng: ll.lat }
});


const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDtuNfZkyohcnZDw1674DDc6vauAQRP090",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100%` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap defaultZoom={13.5} defaultCenter={{ lat: 42.6031, lng: -114.3751}} mapTypeId="satellite" className="map">
        {props.isMarkerShown ? <Marker position={{ lat: 42.6031, lng: -114.3751 }} icon={{ url: '/logos/devils_logo_sm.png', scaleedSize: new window.google.maps.Size(35,35)}} /> : null}
        <Polygon
            path={coords}
            key={1}
            options={{
                fillColor: "#000",
                fillOpacity: 0.2,
                strokeColor: "#FFF",
                strokeOpacity: 1,
                strokeWeight: 2,
                draggable: false,
                zIndex: 3,
                strokePattern: 'solid'
            }} />
    </GoogleMap>
)

export default MyMapComponent;
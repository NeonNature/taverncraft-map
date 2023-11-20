import { ImageOverlay, MapContainer, Polygon, Tooltip } from 'react-leaflet'
import { CRS, LatLngBoundsExpression, LatLngExpression } from 'leaflet'
import './App.css'

const bounds: LatLngBoundsExpression = [
  [0, 0],
  [950, 1700],
]

const shiftx1 = 550
const shifty1 = -340

const polygonCoordinates: LatLngExpression[] = [
  [210 + shiftx1, 713 + shifty1],
  [263 + shiftx1, 667 + shifty1],
  [209 + shiftx1, 543 + shifty1],
  [117 + shiftx1, 611 + shifty1],
]

const shiftx2 = 450
const shifty2 = 1100

const polygon2Coordinates: LatLngExpression[] = [
  [295 + shiftx2, 170 + shifty2],
  [367 + shiftx2, 139 + shifty2],
  [350 + shiftx2, 310 + shifty2],
  [260 + shiftx2, 330 + shifty2],
]

function App() {
  return (
    <>
      <MapContainer crs={CRS.Simple} maxBounds={bounds} bounds={bounds}>
        <ImageOverlay bounds={bounds} url={'/map.png'} />
        <Polygon positions={polygonCoordinates} color="transparent">
          <Tooltip sticky>Click me to open Google</Tooltip>
        </Polygon>
        <Polygon positions={polygon2Coordinates} color="transparent">
          <Tooltip
            sticky
            eventHandlers={{
              click: () => {
                window.open('https://www.google.com', '_blank', 'noreferrer')
              },
            }}
          >
            Click me to open Google
          </Tooltip>
        </Polygon>
      </MapContainer>
    </>
  )
}

export default App

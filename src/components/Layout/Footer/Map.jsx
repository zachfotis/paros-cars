import { MapContainer, Marker, TileLayer } from 'react-leaflet';

function Map() {
  const position = [37.086501130968465, 25.151480873967124];

  return (
    <div className="w-[350px] flex flex-col justify-stretch items-start gap-5 px-5 laptop:w-full">
      <h1 className="font-[400] text-2xl">Map</h1>
      <div className="w-full h-[150px] shadow-lg rounded-lg overflow-hidden">
        <MapContainer center={position} zoom={14} scrollWheelZoom={true} style={{ width: '100%', height: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} />
        </MapContainer>
      </div>
    </div>
  );
}
export default Map;

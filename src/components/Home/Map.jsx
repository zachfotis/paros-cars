import { MapContainer, Marker, TileLayer } from 'react-leaflet';

function Map() {
  const position = [37.086501130968465, 25.151480873967124];

  return (
    <section className="w-full max-w-[1280px] my-[150px] z-0 px-5 mx-auto tablet:pb-5">
      <div className="w-full flex flex-col justify-start items-start gap-14">
        <h1 className="w-full text-center text-4xl font-[500] text-darkBlue">Our Location</h1>
        <div className="w-full h-[400px] shadow-lg rounded-lg overflow-hidden">
          <MapContainer center={position} zoom={16} scrollWheelZoom={false} style={{ width: '100%', height: '100%' }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} />
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
export default Map;

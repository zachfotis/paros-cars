import CarsImage from '../../assets/images/cars.png';

function Gallery() {
  return (
    <section className="w-full max-w-[1280px] mt-20 px-5 mx-auto tablet:pb-5">
      <img src={CarsImage} alt="cars" />
    </section>
  );
}
export default Gallery;

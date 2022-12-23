import { TiTick } from 'react-icons/ti';

function RentTermsItem({ item }) {
  return (
    <div className="w-full flex justify-start items-start gap-5">
      <TiTick className="text-2xl text-darkBlue" />
      <div className="w-full flex flex-col">
        <h1 className="w-full text-left text-xl text-darkBlue">{item.title}</h1>
        <p className="w-full text-lg text-left text-gray-500 tablet:text-justify  ">{item.text}</p>
      </div>
    </div>
  );
}
export default RentTermsItem;

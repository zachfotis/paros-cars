import { Link } from 'react-router-dom';

const Item = ({ data, title }) => {
  return (
    <div className="w-fit max-w-[250px] flex flex-col justify-stretch items-start gap-5 px-5 tablet:w-full">
      <h1 className="font-[400] text-2xl">{title}</h1>
      <ul className="flex flex-col justify-start items-start gap-3">
        {data.map((item) =>
          item.type === 'link' ? (
            <Link
              to={item?.url && item.url}
              key={item.field1}
              className="flex justify-start items-start gap-2 cursor-pointer"
            >
              {item?.field1 && <p className="min-w-[70px] text-gray-200">{item.field1}</p>}
              {item?.field2 && <p className="min-w-[70px] text-gray-400 hover:text-yellow">{item.field2}</p>}
            </Link>
          ) : (
            <a
              key={item.field1}
              className="flex justify-start items-start gap-2 cursor-pointer"
              href={item?.url && item.url}
            >
              {item?.field1 && <p className="min-w-[100px] text-gray-200">{item.field1}</p>}
              {item?.field2 && <p className="min-w-[100px] text-gray-400 hover:text-yellow">{item.field2}</p>}
            </a>
          )
        )}
      </ul>
    </div>
  );
};
export default Item;

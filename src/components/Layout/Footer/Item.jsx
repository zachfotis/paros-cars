const Item = ({ data, title }) => {
  return (
    <div className="w-fit max-w-[250px] flex flex-col justify-stretch items-start gap-5 px-5 laptop:w-full">
      <h1 className="font-[400] text-2xl">{title}</h1>
      <ul className="flex flex-col justify-start items-start gap-2">
        {data.map((data) => (
          <li key={data.field1} className="flex justify-start items-start gap-2">
            {data?.field1 && <p className="min-w-[70px] text-gray-200">{data.field1}</p>}
            {data?.field2 && (
              <a
                className="text-gray-400 hover:text-yellow duration-300 cursor-pointer leading-6"
                href={data?.url && data.url}
              >
                {data.field2}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Item;
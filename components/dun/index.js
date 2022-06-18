// Энэ функц нь менежирт харагдах рюутнуудийн мэмдээллийн пүнгийн функц
export default function Dun(props) {
  return (
    <div className="mx-44 my-28">
      <div className="text-4xl font-medium pb-4">Дүн</div>
      <div className="border-solid border-2 flex justify-center w-full"></div>
      <div className="flex justify-between">
        <div className="text-2xl  ">
          <h1 className="font-normal">
            Сонсох: <span className="pl-2">94</span>%
          </h1>
          <h1 className="font-normal">
            Унших: <span className="pl-2">99</span>%
          </h1>
          <h1 className="font-normal">
            Бичих: <span className="pl-2">84</span>%
          </h1>
          <h1 className="font-normal">
            Ярих: <span className="pl-2">96</span>%
          </h1>
        </div>
        <div className="text-red-500 text-3xl flex items-end">
          <span>-A</span>%<span>93.25</span>
        </div>
      </div>
      <div className="pb-44"></div>
    </div>
  );
}

import Button from "../button";

export default function Tulbur(props) {
  return (
    <div className=" mx-48 my-28 m-auto">
      <div>
        <div className="flex justify-between">
          <h1 className="text-3xl uppercase">Төлбөр</h1>
          <Button
            linkButton="/"
            color="#E28025"
            textColor="white"
            ButtonName="Төлбөр хийх"
          />
        </div>
        <div className="flex justify-center">
          <div className="w-72 h-72 border-solid border-2">
            <h1 className=" text-2xl font-normal text-center mt-10 ">Төлcөн</h1>
            <div className="text-5xl flex justify-center h-full items-center text-red-500">
              160,000<span>төг</span>
            </div>
          </div>
          <div className="w-72 h-72 border-solid border-2">
            <h1 className=" text-2xl font-normal text-center mt-10 ">
              Үлдэгдэл Төлбөр
            </h1>
            <div className="text-5xl flex justify-center h-full items-center text-red-500">
              20,000<span>төг</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Энэ функц нь менежирт харагдах ирц бүртгэлийн функц
export default function IrtsBurtgel(props) {


  return (
    <div className="">
      <div className="flex flex-col space-y-4 justify-center items-center w-64 h-64 rounded-3xl text-white" style={{background: props.background}}>
        <div className="text-5xl ">{props.IrtsToo}</div>
        <div className="text-5xl uppercase ">{props.Irts}</div>
      </div>
    </div>
  );
}

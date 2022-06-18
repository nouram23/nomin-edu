export default function cover(props) {
  return (
    <div className=" relative overflow-hidden">
      <div className="h-[500px]  w-11/12" style={{ background: props.color, opacity: props.opacity }}>
        <p className="text-3xl font-medium absolute bottom-20 left-52">
          {props.title}
        </p>
      </div>
      <img
        className="h-[600px] -right-14   -top-12 absolute "
        src={props.img}
      />
    </div>
  );
}

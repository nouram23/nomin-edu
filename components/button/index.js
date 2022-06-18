import { IoIosAdd } from "react-icons/io";
import Link from "next/link";

export default function Button(props) {
  return (
    <Link href={props.linkButton}>
      <a
        className="flex items-center ml-8 py-2 px-4 rounded-full"
        style={{ background: props.color, color: props.textColor }}
      >
        <IoIosAdd className="text-2xl mr-1" />
        {props.ButtonName}
      </a>
    </Link>
  );
}

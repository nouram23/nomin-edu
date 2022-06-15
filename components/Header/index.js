import Head from "next/head";
import Link from "next/link";
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosAdd } from "react-icons/io";
// ----------Энд header хэсэг хийгдэж байна------------
const logo = "Nomin-Edu";
const help = "Тусламж";
const login = "Нэвтрэх";
const addStudent = "Сурагч нэмэх";
export default function Header() {
  return (
    <div className="  h-20 bg-[#0083BF] grid content-center ">
      <div className="mx-56 flex ">
        <div className=" font-medium text-2xl text-white ">{logo}</div>{" "}
        <form className="">
          <button></button>
          <input
            className="ml-24 w-80 h-8 rounded-3xl"
            type="text"
            id="search"
            name="search"
            required
          />
        </form>
        <button className=" ml-14 py-1 px-6 bg-[#339CCC] rounded-full text-white">
          {help}
        </button>
        <button className="flex text-white ml-8 items-center">
          <BsFillPersonFill className="text-2xl mr-2" /> {login}
        </button>
        <button className="flex bg-[#E28025] text-white ml-8 py-2 px-4 rounded-full">
          <IoIosAdd className="text-2xl mr-1" />
          {addStudent}
        </button>
      </div>
    </div>
  );
}

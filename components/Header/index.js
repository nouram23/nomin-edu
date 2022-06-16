import Head from "next/head";
import Link from "next/link";
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosAdd } from "react-icons/io";
import { Select } from "antd";
const { Option, OptGroup } = Select;

// ----------Энд header хэсэг хийгдэж байна------------
const logo = "Nomin-Edu";
const help = "Тусламж";
const login = "Нэвтрэх";
const addStudent = "Сурагч нэмэх";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
export default function Header() {
  return (
    <div className="  h-20 bg-[#0083BF] flex justify-center items-center  ">
      <div className="mx-56 flex ">
        <Link href="/">
          <a className=" font-medium text-2xl text-white ">{logo}</a>
        </Link>
        <form className="">
          <Select
            className="ml-10 mt-1 text-slate-500"
            showSearch
            defaultValue="Хайх утгаа оруулна уу..."
            placeholder="Search to Select"
            style={{
              width: 300,
            }}
            onChange={handleChange}
          >
            <OptGroup label="Manager">
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
            </OptGroup>
            <OptGroup label="Engineer">
              <Option value="Yiminghe">yiminghe</Option>
            </OptGroup>
          </Select>
        </form>
        <button className=" ml-14 py-1 px-6 bg-[#339CCC] rounded-full text-white">
          {help}
        </button>
        <button className="flex text-white ml-8 items-center">
          <BsFillPersonFill className="text-2xl mr-2" /> {login}
        </button>
        <Link href="/register-student">
          <a className="flex bg-[#E28025] text-white ml-8 py-2 px-4 rounded-full">
            <IoIosAdd className="text-2xl mr-1" />
            {addStudent}
          </a>
        </Link>
      </div>
    </div>
  );
}

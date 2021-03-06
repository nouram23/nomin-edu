import Head from "next/head";
import Link from "next/link";
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosAdd } from "react-icons/io";
import { Select } from "antd";
import Button from "../button";
const { Option, OptGroup } = Select;

// ----------Энд header хэсэг хийгдэж байна------------

// --menu хэсгийг хувьсагчинд утга оноож өгсөн--
const logo = "Nomin-Edu";
const help = "Тусламж";
const login = "Нэвтрэх";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
export default function Header(props) {
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
            <OptGroup label="Англи хэл">
              <Option value="1">Анхан шат</Option>
              <Option value="2">Дунд шат</Option>
              <Option value="3">Ахисан шат</Option>
              <Option value="4">Гүнзгий шат</Option>
              <Option value="5"> IELTS</Option>
              <Option value="6"> TOEFL</Option>
            </OptGroup>
            <OptGroup label="Орос хэл">
              <Option value=" 7">Анхан шат</Option>
              <Option value="8">Дунд шат</Option>
              <Option value="9">Ахисан дунд шат</Option>
            </OptGroup>
            <OptGroup label="Солонгос хэл">
              <Option value=" 10">Анхан шат</Option>
              <Option value="11">Дунд шат</Option>
              <Option value="12">Ахисан дунд шат</Option>
            </OptGroup>
          </Select>
        </form>
        <button className=" ml-14 py-1 px-6 bg-[#339CCC] rounded-full text-white">
          {help}
        </button>
        <button className="flex text-white ml-8 items-center">
          <BsFillPersonFill className="text-2xl mr-2" /> {login}
        </button>
        <Button
          linkButton="/register-student"
          color="#E28025"
          textColor="white"
          ButtonName="Сурагч хасах"
        />
      </div>
    </div>
  );
}

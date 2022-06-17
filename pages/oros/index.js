import { Card } from "antd";
import Layout from "../../components/layout";
import { TeamOutlined } from "@ant-design/icons";

export default function Oros() {
  const information = [
    {
      teacher: "Anna",
      class: " Анхан шат",
      studentsNumber: "15",
      timeTable: "10:00-11:30",
    },
    {
      teacher: "aaaa",
      class: " Анхан шат",
      studentsNumber: "15",
      timeTable: "10:00-11:30",
    },
    {
      teacher: "bbbb",
      class: " Анхан шат",
      studentsNumber: "15",
      timeTable: "10:00-11:30",
    },
  ];

  return (
    <Layout className="flex justify-center items-center ">
      <div className=" relative overflow-hidden">
        <div className="h-[500px] bg-[#25FC43]/30  w-11/12">
          <p className="text-3xl font-medium absolute bottom-20 left-52">
            Орос хэл
          </p>
        </div>
        <img
          className="h-[600px] -right-14   -top-12 absolute "
          src="/assets/img/or.png"
        />
      </div>
      {information.map((e, i) => (
        <Card key={i} className="mx-auto w-1/2 my-5 rounded-2xl border-2">
          <div className="flex justify-between h-24">
            <div className="flex items-center space-x-4">
              {" "}
              <img className="h-full" src="/assets/img/teacher.png" />
              <div>
                {" "}
                <p className="text-2xl font-semibold mb-2">Багш: {e.teacher}</p>
                <p className="">{e.class}</p>
              </div>
            </div>
            <div className="my-auto">
              <p>
                <TeamOutlined /> {e.studentsNumber} сурагч
              </p>
              <p>{e.timeTable}</p>
            </div>
          </div>
        </Card>
      ))}
    </Layout>
  );
}

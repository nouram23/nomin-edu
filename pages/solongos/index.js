import { Card } from "antd";
import Layout from "../../components/layout";
import { TeamOutlined } from "@ant-design/icons";
import Cover from "../../components/cover";

export default function Solongos() {
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
      <Cover
        title="Солонгос хэл"
        img="/assets/img/so.png"
        color="#B9EAFF"
        opacity="0.7"
      />
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

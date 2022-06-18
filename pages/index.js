import Layout from "../components/layout";
import Link from "next/link";
import { Card } from "antd";

export default function Home() {
  const NuurCardData = [
    {
      zurag: "/assets/img/nuur_english.png",
      language: "Англи хэл",
      linkItem: "/english",
    },
    {
      zurag: "/assets/img/nuur_oros.png",
      language: "Орос хэл",
      linkItem: "/oros",
    },
    {
      zurag: "/assets/img/nuur_solongos.png",
      language: "Солонгос хэл",
      linkItem: "/solongos",
    },
  ];

  return (
    <Layout>
      {/* Нүүр хэсэг хэлний ангируу сонгон шилжих */}
      <div className="flex justify-around mt-28">
        {NuurCardData.map((e, i) => (
          <div className="flex">
            <div key={i} className="w-64 h-64 border rounded-2xl ">
              <div className="">
                <img className="h-56 w-64 flex justify-center " src={e.zurag} />
              </div>
              <Link key={i} href={e.linkItem}>
                <div className="">
                  <a className="text-2xl px-4">{e.language}</a>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

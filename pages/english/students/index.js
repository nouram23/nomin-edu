import Layout from "../../../components/layout";
import Cover from "../../../components/cover";
import Tulbur from "../../../components/tulbur";
import IrtsBurtgel from "../../../components/irtsBurtgel";
import Dun from "../../../components/dun";
export default function Students(params) {
  return (
    <Layout>
      <Cover
        title="Англи хэл"
        img="/assets/img/el.png"
        color="#FFAB6D"
        opacity="0.7"
      />
      <Tulbur />
      {/* ирц бүртгэлийн функц ирсэн тас чөлөө гэсэн 3-н карт */}
      <div className="flex mx-44 justify-around">
        <IrtsBurtgel background="#4DC439" IrtsToo="15" Irts="ирсэн" />
        <IrtsBurtgel background="#FF0000" IrtsToo="2" Irts="тас" />
        <IrtsBurtgel background="#0083BF" IrtsToo="1" Irts="чөлөө" />
      </div>
     <Dun/>
    </Layout>
  );
}

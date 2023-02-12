import SectionTitle from "@/components/SectionTitle";
import Head from "next/head";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div>
      <Head>
        <title>Skills - Ashik Portfolio</title>
      </Head>
      <div className="container">
        <SectionTitle title="Skills" />
      </div>
    </div>
  );
};

export default Skills;

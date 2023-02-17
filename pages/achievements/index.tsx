import SectionTitle from "@/components/SectionTitle";
import Head from "next/head";

type Props = {};

const AchievementPage = (props: Props) => {
  return (
    <div>
      <Head>
        <title>Achievements</title>
      </Head>
      <div className="container">
        <SectionTitle title="Achievements" />
      </div>
    </div>
  );
};

export default AchievementPage;

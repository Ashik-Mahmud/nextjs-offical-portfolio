import AchievementCard from "@/components/achievement/achievementCard";
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
        <div className="achievements-container mt-5 ">
          <AchievementCard />
        </div>
      </div>
    </div>
  );
};

export default AchievementPage;

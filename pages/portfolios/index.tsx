import SectionTitle from "@/components/SectionTitle";
import Head from "next/head";

type Props = {};

const Portfolios = (props: Props) => {
  return (
    <div>
      <Head>
        <title>Portfolios - Ashik App</title>
      </Head>
      <div className="container p-2">
        <SectionTitle title="Portfolios" />
      </div>
    </div>
  );
};

export default Portfolios;

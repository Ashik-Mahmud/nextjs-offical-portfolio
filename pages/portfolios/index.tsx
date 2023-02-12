import Card from "@/components/Portfolios/Card";
import SectionTitle from "@/components/SectionTitle";
import Head from "next/head";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
type Props = {};

const Portfolios = (props: Props) => {
  return (
    <div>
      <Head>
        <title>Portfolios - Ashik App</title>
      </Head>
      <div className="container p-2">
        <SectionTitle title="Portfolios" />

        <div className="portfolio-content my-5">
          <Tabs>
            <TabList className={"border-0"}>
              <Tab selectedClassName="text-blue-500 font-bold border-0">
                <span className="portfolio-tab-title">All</span>
              </Tab>
              <Tab selectedClassName="text-blue-500 font-bold">
                <span className="portfolio-tab-title">Backend</span>
              </Tab>
              <Tab selectedClassName="text-blue-500 font-bold">
                <span className="portfolio-tab-title">Frontend</span>
              </Tab>
              <Tab selectedClassName="text-blue-500 font-bold">
                <span className="portfolio-tab-title">Full Stack</span>
              </Tab>
            </TabList>

            <TabPanel>
              <div className="content py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="content py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <Card />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="content py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <Card />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="content py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <Card />
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Portfolios;

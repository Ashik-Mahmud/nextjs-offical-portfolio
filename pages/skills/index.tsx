import SectionTitle from "@/components/SectionTitle";
import Head from "next/head";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Line, Circle, ProgressProps } from "rc-progress";
import SkillBar from "@/components/Skills/SkillBar";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div>
      <Head>
        <title>Skills - Ashik Portfolio</title>
      </Head>
      <div className="container">
        <SectionTitle title="Skills" />

        <div className="skills-content font-amiri grid grid-cols-4 gap-5 mt-5">
          {/* frontend */}
          <div
            className="border p-5 shadow-sm rounded
          "
          >
            <h3 className="text-xl mb-3 font-medium">
              <span className="text-green-500">Frontend</span> Development
            </h3>
            <div className="flex flex-wrap gap-4">
              <SkillBar />
              <SkillBar />
              <SkillBar />
            </div>
          </div>
          {/* backend */}
          <div
            className="border p-5 shadow-sm rounded
          "
          >
            <h3 className="text-xl mb-3 font-medium">
              <span className="text-green-500">Backend</span> Development
            </h3>
            <div className="flex flex-wrap gap-4">
              <SkillBar />
              <SkillBar />
              <SkillBar />
            </div>
          </div>
          {/* database */}
          <div
            className="border p-5 shadow-sm rounded
          "
          >
            <h3 className="text-xl mb-3 font-medium">
              <span className="text-green-500">Database</span> Management
            </h3>
            <div className="flex flex-wrap gap-4">
              <SkillBar />
              <SkillBar />
              <SkillBar />
            </div>
          </div>

          {/* others */}
          <div
            className="border p-5 shadow-sm rounded
          "
          >
            <h3 className="text-xl mb-3 font-medium">
              <span className="text-green-500">Others</span> Skills
            </h3>
            <div className="flex flex-wrap gap-4">
              <SkillBar />
              <SkillBar />
              <SkillBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

"use client";
import Image from "next/image";
import { projectsData } from "../datas/projects.datas";
import { GithubProject } from "../types";
import { Card, CardFooter } from "./ui/card";

const Project = ({ githubProjects }: { githubProjects: GithubProject[] }) => {
  const highlightedProjects = githubProjects
    ?.map((ghbProject) => {
      const projectFound = projectsData.find(
        (project) => ghbProject.name === project.name,
      );
      if (!projectFound) {
        return null;
      }
      return {
        ...projectFound,
        createdAt: projectFound.createdAt,
        description: projectFound.description,
        url: projectFound.url,
      };
    })
    .filter((project) => project !== null);

  console.log(highlightedProjects);
  return (
    <div id="projects" className="px-20 mb-40">
      <h1 className="font-extrabold text-6xl ">
        Projects
        <span className="text-[#85a9cc] font-extrabold text-7xl">.</span>
      </h1>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 py-6 gap-6 items-center">
        {highlightedProjects.map((project) => (
          <div
            key={project.name}
            className="flex flex-col gap-3 justify-center"
          >
            <Card>
              <Image
                src="/defaultImage.jpg"
                alt={project.name}
                width={120}
                height={120}
                className="w-full object-cover "
              />
              <CardFooter className="text-black">{project.url} </CardFooter>
            </Card>
            <h4 className="font-semibold text-2xl">{project.name} </h4>
            <h5 className="font-normal text-xl">{project.description} </h5>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Project;

import { GithubProject } from "../types";

export const projectsData: GithubProject[] = [
  {
    name: "Reference-Excellence",
    description: "Site web vitrine pour particulier poseur de parquet",
    createdAt: "2025-05-29T19:04:20Z",
    url: "",
    image: "",
    tags: [""],
  },
  {
    name: "scrapper-gomind",
    description:
      "Système qui permet de récupérer les offres d'emplois dans l'IT et envoie des mails sous forme d'excel",
    createdAt: new Date().toLocaleDateString(),
    url: "",
  },
];
export const projectNames = projectsData.map((project) => project.name);

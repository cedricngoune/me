import { About } from "../components/About";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import Project from "../components/Project";
import { fetchGithubProjects } from "../datas/projectsGit";
import { projectNames } from "../datas/projects.datas";

export default async function Home() {
  const projects = await fetchGithubProjects(projectNames);
  return (
    <main className="min-h-screen bg-background font-[poppins]">
      <Header />
      <Hero />
      <Project githubProjects={projects} />
      <About />

      {/* <Footer />  */}
    </main>
  );
}

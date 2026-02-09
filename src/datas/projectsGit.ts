export const fetchGithubProjects = async (repoNames: string[]) => {
  const projects = await Promise.all(
    repoNames.map(async (repoName) => {
      try {
        const response = await fetch(
          `${process.env.GITHUB_API_URL}/${repoName}`,
        );
        if (response.ok) {
          const data = await response.json();
          return {
            name: repoName,
            description: data.description as string,
            createdAt: data.created_at as string,
            url: data.url as string,
          };
        }
        return null;
      } catch (error: unknown) {
        console.error(`Error fetching ${repoName}:`, error);
        return null;
      }
    }),
  );
  return projects.filter((project) => project !== null);
};

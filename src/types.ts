export type IconProps = {
  width?: number;
  height?: number;
  title?: string;
};

export type GithubProject = {
  name: string;
  description: string;
  url: string;
  createdAt: string;
  image?: string;
  tags?: string[];
};

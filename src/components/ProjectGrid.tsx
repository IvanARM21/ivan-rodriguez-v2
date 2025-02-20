import { projects } from "../data/projects";
import { ProjectItem } from "./ProjectItem";

export const ProjectGrid = () => {
  return (
    <ul className="flex flex-col gap-15 mt-20">
      {projects.map((project, projectIndex) => (
        <ProjectItem
          key={project.title}
          project={project}
          projectIndex={projectIndex}
        />
      ))}
    </ul>
  );
};

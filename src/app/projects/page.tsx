import FeaturedProjects from "../_components/featuredProjects/FeaturedProjects";

export default function Projects() {
  return (
    <div className="w-full flex-1 flex-row gap-4 mt-8 flex">
      <div className="flex-1 flex-col flex gap-4 overflow-hidden">
        <div className="bg-chrome rounded-3xl flex-1">
          <FeaturedProjects />
        </div>
      </div>
    </div>
  );
}

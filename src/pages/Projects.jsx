import { Separator } from "@/components/ui/separator";

const Projects = () => {
  return (
    <section
      className="flex h-auto w-full min-w-0 flex-col gap-3"
      id="projects"
    >
      <div className="flex w-fit flex-col gap-1">
        <h3>Projects</h3>
        <Separator className="!h-1 !w-full rounded !bg-primary" />
      </div>

      <div className="flex justify-center">
        <div className="flex h-4 w-fit items-center justify-center rounded-xl border bg-primary px-1 py-2">
          <small className="text-[10px]">Coming Soon.</small>
        </div>
      </div>

      <div className="flex min-w-0 justify-center">
        <p className="max-w-3xl text-center">
          We're preparing to showcase our installation projects and technology
          solutions. Stay tuned for updates as we continue building reliable and
          professional solutions for our clients.
        </p>
      </div>
    </section>
  );
};

export default Projects;

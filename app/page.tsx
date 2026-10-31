import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Expertise } from "@/components/sections/expertise";
import { Projects } from "@/components/sections/projects";
import { Workflow } from "@/components/sections/workflow";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { getProjects } from "@/lib/sanity";
export const revalidate = 60;
export default async function Page() {
  const projects = await getProjects();
  return (<><Nav /><main><Hero projects={projects} /><About /><Expertise /><Projects items={projects} /><Workflow /><Experience /><Contact /></main><Footer /></>);
}

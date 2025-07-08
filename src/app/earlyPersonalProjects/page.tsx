import FilterableProjectTable from "./FilterableProjectTable";
import projects from "./projectsAPI";

export default function Home() {
  return (
    <> 
    <main className="flex flex-col items-center justify-between p-24 pb-30">
      <div className="flex flex-col items-center justify-between pt-16">
        <FilterableProjectTable projects={projects} />
      </div>
    </main>
    </>
  );
}

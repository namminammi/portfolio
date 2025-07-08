interface ProjectProps {
  name: string;
  link: string;
  desc: Array<string>;
}

export const ProjectCard: React.FC<ProjectProps> = ({ name, link, desc }) => {
  return (
    <a
      href={link}
      className="group rounded-lg border border-transparent px-5 py-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h3 className="mb-3 text-2xl font-semibold">
        {name}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        </span>
      </h3>
      <ul className="">
        {desc.map((item, index) => {
          return (
            <li className="text-left pb-2" key={index}>
              <p>{item}</p> </li>
          )
        })}
      </ul>
    </a>
  )
}

export default function ProjectCardList({ list }: { list: Array<ProjectProps> }) {
  return (
    <>
      {list.map((item, index) => {
        return (
          <ProjectCard key={index} name={item.name} link={item.link} desc={item.desc} />
        )
      })}
    </>
  )
}
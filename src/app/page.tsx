import ProjectCardList from "./ProjectCards/ProjectCards";
import { GREETING, RECENT_CLIENT_WORKS, SPEAKING_ENGAGEMENTS, ADDITIONAL_WORKS } from "./data/constants";
import { homeProjectList, conferenceList, otherWorkList } from "./ProjectCards/homeProjectAPI";

export default function Home() {
  return (
    <>
      <main className="flex flex-col  py-44 lg:py-42 ">
        <div className="flex flex-col items-center justify-between font-semibold px-6 items-center text-lg">
          <p className="animate-pulse">{GREETING}</p>
        </div>
        <div className="px-6">

          <div className="text-2xl font-semibold top-20 flex  justify-left px-6 pt-8">
            <h2>● {RECENT_CLIENT_WORKS} ●</h2>
          </div>

          <div className="w-full pt-4 mb-8 lg:mb-4 grid text-center lg:grid-cols-4 ">
            <ProjectCardList list={homeProjectList} />
          </div>

          <div className="text-2xl font-semibold top-20 flex  justify-left px-6 pt-8">
            <h2>● {SPEAKING_ENGAGEMENTS} ●</h2>
          </div>
          <div className="w-full pt-4 mb-8 lg:mb-4 grid text-center lg:grid-cols-4 ">
            <ProjectCardList list={conferenceList} />
          </div>

          <div className="text-2xl font-semibold top-20 flex  justify-left px-6 pt-8">
            <h2>● {ADDITIONAL_WORKS} ●</h2>
          </div>
          <div className="w-full pt-4 mb-8 lg:mb-4 grid text-center lg:grid-cols-4 ">
            <ProjectCardList list={otherWorkList} />
          </div>

        </div>
      </main>
    </>
  );
}

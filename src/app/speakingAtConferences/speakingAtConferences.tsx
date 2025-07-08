import ProjectCardList from "../ProjectCards/ProjectCards";
import { conferenceList } from './conferenceAPI';
import { SPEAKING_ENGAGEMENTS } from "../data/constants";

export default function speakingAtConferences() {
    return (
        <main className="flex flex-col  py-4 lg:py-4 ">

            <div className="px-6">
                <div className="text-2xl font-semibold top-20 flex  justify-left px-6 pt-8">
                    <h2>● {SPEAKING_ENGAGEMENTS} ●</h2>
                </div>

                <div className="w-full pt-4 mb-8 lg:mb-4 grid text-center lg:grid-cols-2 ">
                    <ProjectCardList list={conferenceList} />
                </div>

            </div>
        </main>
    );
}
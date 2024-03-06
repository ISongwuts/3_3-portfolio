import ScrollArea from "./scroll-area"
import { skillData } from "../data/skills"

const SkillCard = () => {
  return (
    <div className="xl:col-span-1 max-xl:col-span-10 border-2 shadow-md p-5 flex flex-col gap-3 items-center justify-center">
        <span className="text-2xl font-bold">Skills</span>
        <ScrollArea>
            <ul className="flex xl:flex-col gap-3 justify-center items-center">
                {
                    skillData.map((data, index) => (
                        <li key={index} className=" border-2 rounded-md hover:border-black">
                            <img width={75} src={data.icon} alt={data.label}/>
                        </li>
                    ))
                }
            </ul>
        </ScrollArea>
    </div>
  )
}

export default SkillCard
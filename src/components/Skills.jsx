import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiMysql,SiExpress,SiJenkins } from "react-icons/si";
const Skills = () => {

    const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" /> },
    { name: "React", icon: <FaReact className="text-cyan-400 text-5xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
    { name: "Expres.js", icon:<SiExpress className="text-gray-400 text-5xl"/>},
    { name: "Python", icon:<FaPython className="text-yellow-400 text-5xl"/>},
    { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-5xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400 text-5xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500 text-5xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-white text-5xl" /> },
    { name: "Jenkins", icon: <SiJenkins className="text-red-500 text-5xl" /> },
    ]
    return(
        <div className="py-12 px-6">
            <h2 className="text-3xl text-blue-500 font-bold text-center mb-10">
                Technical Skills
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 text-center ">
                {skills.map((s,index)=>(
                    <div className="flex flex-col items-center p-4 rounded-lg hover:scale-105 transition" key={index}>
                        <div className="text-4xl mb-2">
                            {s.icon}
                        </div>
                        <p className="text-sm text-blue-500">{s.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Skills;
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase, FaGitAlt } from "react-icons/fa";


export default function Skills() {
    const skills = [
        { name: "Python", icon: <FaPython className="text-blue-500 text-4xl" /> },
        { name: "Core Java", icon: <FaJava className="text-red-500 text-4xl" /> },
        { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-4xl" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl" /> },
        { name: "React.js", icon: <FaReact className="text-blue-400 text-4xl" /> },
        { name: "MySQL", icon: <FaDatabase className="text-gray-700 text-4xl" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-600 text-4xl" /> },

    ];

    return (
        <section id="skills" className="px-10 w-full my-40 max-w-5xl mx-auto">
            <h2 className="text-center text-6xl text-emerald-500 font-bold">
                My Skills...
            </h2>
            <div className="mt-10 flex gap-5 justify-center flex-wrap mx-auto max-w-xl">
                {skills.map((skill, index) => (
                    <div key={index} className="cursor-pointer px-12 py-10 rounded bg-emerald-200 text-lg 
                                                flex flex-col items-center justify-center font-bold hover:shadow-xl">
                        {skill.icon}
                        <span className="mt-2">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

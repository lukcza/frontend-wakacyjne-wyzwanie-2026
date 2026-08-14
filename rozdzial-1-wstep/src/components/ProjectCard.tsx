import { useState } from "react";

interface Technology {
    id: string;
    name: string;
}

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: Technology[];
}

export default function ProjectCard({ title, description, technologies }: ProjectCardProps) {
    const [status, setStatus] = useState<string>("W trakcie");
    const toggleStatus = () => setStatus(prevStatus => prevStatus === "W trakcie" ? "Ukończony" : "W trakcie");
    return (
        <div className="flex flex-col justify-center items-center border border-gray-200 rounded-lg p-16 shadow-sm">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-gray-600">{description}</p>
            <ul>
                {technologies.map((tech) => (
                    <li key={tech.id}>{tech.name}</li>
                ))}
            </ul>
            <button
                className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600"
                onClick={toggleStatus}>
                Status: {status} {status === "W trakcie" ? "🔄" : "✅"}
            </button>
        </div>
    );
}




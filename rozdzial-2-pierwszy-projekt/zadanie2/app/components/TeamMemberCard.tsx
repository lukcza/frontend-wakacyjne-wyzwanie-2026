interface TeamMemberCardProps {
    name: string;
    role: string;
    bio: string;
    skills: string[];
}

export default function TeamMemberCard({ name, role, bio, skills }: TeamMemberCardProps) {
    const initials = name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);

    return (
        <div className="bg-white rounded-2xl shadow-lg p-5 flex flex-col gap-4 w-full sm:p-6 sm:gap-5 md:flex-row md:items-start md:gap-6 lg:p-8 lg:max-w-2xl max-w-sm sm:max-w-xl">
            <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 text-xl font-bold mx-auto sm:w-20 sm:h-20 sm:text-2xl md:mx-0 lg:w-24 lg:h-24 lg:text-3xl">
                {initials}
            </div>
            <div className="flex flex-col gap-3 flex-1 text-center md:text-left">
                <div>
                    <h2 className="text-lg font-bold text-gray-900 sm:text-xl lg:text-2xl">{name}</h2>
                    <p className="text-sm font-medium text-indigo-600 mt-0.5 lg:text-base">{role}</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed lg:text-base">{bio}</p>
                <ul className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {skills.map((skill) => (
                        <li
                            key={skill}
                            className="bg-indigo-50 text-indigo-700 text-xs font-medium px-3 py-1 rounded-full border border-indigo-200 lg:text-sm"
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

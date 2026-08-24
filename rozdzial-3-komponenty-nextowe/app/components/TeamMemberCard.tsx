import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600"],
});

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  skills: string[];
}

export default function TeamMemberCard({ name, role, bio, skills }: TeamMemberCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 flex flex-col gap-4 w-full sm:p-6 sm:gap-5 md:flex-row md:items-start md:gap-6 lg:p-8 lg:max-w-2xl max-w-sm sm:max-w-xl">
      <Image
        src="/avatar.jpg"
        alt={name}
        width={96}
        height={96}
        className="rounded-full object-cover w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto md:mx-0 shrink-0"
      />
      <div className="flex flex-col gap-3 flex-1 text-center md:text-left">
        <div>
          <h2 className="text-lg font-bold text-gray-900 sm:text-xl lg:text-2xl">{name}</h2>
          <p className={`${montserrat.className} text-sm font-medium text-indigo-600 mt-0.5 lg:text-base`}>
            {role}
          </p>
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
        <div className="pt-2">
          <Link
            href="https://solvro.pwr.edu.pl/pl/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Dowiedz się więcej
          </Link>
        </div>
      </div>
    </div>
  );
}

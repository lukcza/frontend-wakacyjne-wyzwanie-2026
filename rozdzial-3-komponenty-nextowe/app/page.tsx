import Script from "next/script";
import TeamMemberCard from "./components/TeamMemberCard";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <TeamMemberCard
        name="Jan Kowalski"
        role="Frontend Developer"
        bio="Pasjonat UI/UX i nowoczesnych technologii webowych. Uwielbiam budować responsywne interfejsy z dbałością o szczegóły."
        skills={["React", "TypeScript", "Next.js", "Tailwind CSS", "Git"]}
      />
      <Script id="welcome-alert" strategy="afterInteractive">
        {`alert("Witaj na stronie!");`}
      </Script>
    </main>
  );
}

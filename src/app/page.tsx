import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-4 py-6">
      <div className="flex justify-end pb-4">
        <ThemeToggle />
      </div>

      {/* 와이어프레임의 둥근 프레임 */}
      <section className="flex flex-1 flex-col items-center rounded-3xl border-2 border-stone-800 bg-white px-6 py-10 dark:border-stone-300 dark:bg-stone-900">
        <ProfileHeader {...profile} />

        <ul className="mt-10 flex w-full flex-col gap-4">
          {links.map((link) => (
            <li key={link.id}>
              <LinkCard {...link} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

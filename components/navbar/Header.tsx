import AnnouncementBar from "@/components/navbar/AnnouncementBar";
import Navbar from "@/components/navbar/Navbar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_1px_0_0_rgba(0,0,0,0.06)]">
      <AnnouncementBar />
      <Navbar />
    </header>
  );
}

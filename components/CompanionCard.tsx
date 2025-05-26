import Image from "next/image";
import Link from "next/link";

interface CompanionCardProps {
    id: string;
    name: string;
    topic: string;
    subject: string;
    duration: number;
    color: string;
}

const CompanionCard = ({ id, name, topic, subject, duration, color}: CompanionCardProps) => {
  return (
    <article className="companion-card overflow-hidden" style={{ backgroundColor: color}}>
        <div className="flex justify-between items-center">
            <div className="subject-badge">{subject}</div>
            <button className="companion-bookmark">
                <Image src="/icons/bookmark.svg" alt="bookmark" width={12.5} height={15} />
            </button>
        </div>
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-sm">{topic}</p>
        <div className="flex items-center gap-2">
            <Image src="/icons/clock.svg" alt="clock" width={13.5} height={13.5} />
            <p className="text-sm">{duration} min</p>
        </div>
        <Link href={`/companion/${id}`} className="w-full">
            <button className="btn-primary w-full justify-center">Launch Lesson</button>
        </Link>
    </article>
  )
}
export default CompanionCard
import type { Friend } from "@/types";
import { BookOpen02, CalendarPlus02, LinkExternal01 } from "@scottylabs/corgi";


interface FriendProps {
    friend: Friend
}

export default function FriendCard({ friend }: FriendProps) {
    return (
        <div className="flex gap-4 flex-col border border-bg-brandNeutral-secondary-pressed p-5 rounded-md shadow-md bg-bg-neutral-primary hover:bg-bg-brandNeutral-subtle-pressed transition bg-white text-fg-neutral-primary">
            <div className="flex items-center gap-4">
                <div className="bg-gray-300 w-12 h-12 rounded-full" />
                <div className="flex flex-col items-center text-[#232323]">
                    <div className="text-lg font-bold">{friend.name}</div>
                    <h2 className="text-lg font-medium">{friend.department}</h2>
                </div>
            </div>
            <div className="flex gap-2">
                <CalendarPlus02 />Schedule<LinkExternal01 className="cursor-pointer text-fg-brandNeutral-primary hover:text-fg-brand-secondary" />
            </div>
                <div className="flex gap-2">
                <BookOpen02 />Shared Courses:
            </div>
            <div className="flex gap-1">
                {friend.sharedCourses.map((course) => (
                    <div
                        key={course.code}
                        className="rounded bg-bg-disabled-brandNeutral inline-block py-1 px-2 text-center cursor-pointer"
                        title={course.title}
                    >
                        <strong>{course.code}</strong> {course.title}
                    </div>
                ))}
            </div>
        </div>
    );
}
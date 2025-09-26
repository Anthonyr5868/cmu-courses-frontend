import { Calendar, Clock, Coins03, LinkExternal01 } from "@scottylabs/corgi";

export interface Course {
    code: string;
    title: string;
    department: string;
    units: number;
    fce: number;
    instructors: string[];
    time?: string;
    section?: string;
}

interface CourseProps {
    course: Course
}

export default function CourseCard({ course }: CourseProps) {
    return (
        <div className="border border-bg-brandNeutral-secondary-pressed p-5 rounded-md shadow-md bg-bg-neutral-primary hover:bg-bg-brandNeutral-subtle-pressed transition">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center text-fg-brandNeutral-primary">
                    <div className="text-lg font-bold mr-2">{course.code}</div>
                    <h2 className="text-lg font-medium">{course.title}</h2>
                </div>
                <LinkExternal01 className="cursor-pointer text-fg-brandNeutral-primary mt-[-4px] hover:text-fg-brand-secondary" />
            </div>
            <div className="flex items-center justify-start md:justify-between gap-2">
                <p className="text-sm text-fg-brandNeutral-primary">{course.department}</p>
                <div className="flex gap-1">
                    {course.instructors.map((instructor) => (
                        <div 
                            key={instructor}
                            className="rounded-full bg-bg-brandNeutral-secondary-pressed inline-block p-1 h-8 w-8 text-center text-white cursor-pointer"
                            title={instructor}
                        >
                            {instructor.charAt(0)}
                        </div>
                    ))}
                </div>
            </div>
            {(course.time && course.section) && (
                <div className="mt-2 text-fg-brandNeutral-primary justify-start md:justify-between gap-2">
                    <span className="flex items-center justify-center text-sm">{course.time}</span>
                    <span className="flex items-center justify-center text-sm"><Calendar /> {course.section}</span>
                </div>
            )}
            <div className="mt-2 text-fg-brandNeutral-primary flex gap-2 font-semibold">
                <span className="flex items-center justify-center text-sm pr-2 border-r-2 border-bg-brandNeutral-secondary-hover"><Coins03 className="h-5" /> Units: {course.units}</span>
                <span className="flex items-center justify-center text-sm"><Clock className="h-5" /> {course.fce} hrs/week</span>
            </div>
        </div>
    );
}
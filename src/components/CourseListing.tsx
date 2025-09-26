import type { Course } from "@/types";
import CourseCard from "./CourseCard";

interface CourseCardProps {
    courses: Course[];
}

export default function CourseListing({ courses }: CourseCardProps) {
    return (

            <div className="flex-1 overflow-y-auto bg-bg-brandNeutral-secondary-enabled p-4">
                <div className="grid grid-cols-2 gap-8">
                    {courses.map((course) => (
                        <CourseCard key={course.code} course={course} />
                    ))}
                </div>
            </div>
    )
}
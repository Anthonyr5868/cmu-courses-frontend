
import { ChevronDown } from '@scottylabs/corgi';
import type { Course } from './CourseCard';
import CourseCard from './CourseCard';

interface SavedCoursesProps {
    courses: Course[];
}

const DEPARTMENTS = ['48XXX Architecture', '60XXX Art', '18 Electrical & Computer Engineering'];
const LEVELS = ['0XX-2XX', '3XX-4XX', '5XX-6XX', '7XX-9XX'];

export default function SavedCourses({ courses }: SavedCoursesProps) {
    return (
        <div className="flex flex-col">
            {/* Fixed header and filters */}
            <div className="p-6 bg-white">
                <h1 className="text-2xl font-semibold text-gray-900 mb-6">Saved Courses</h1>

                <div className="flex gap-4 mb-6">
                    <div className="relative">
                        <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-w-[150px]">
                            <option value="">Department</option>
                            {DEPARTMENTS.map((dept) => (
                                <option key={dept} value={dept}>{dept}</option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>

                    <div className="relative">
                        <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-w-[150px]">
                            <option value="">Course Level</option>
                            {LEVELS.map((level) => (
                                <option key={level} value={level}>{level}</option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                </div>
            </div>
            
            <div className="flex-1 overflow-y-auto bg-bg-brandNeutral-secondary-enabled p-4">
                <div className="grid grid-cols-2 gap-8">
                    {courses.map((course) => (
                        <CourseCard key={course.code} course={course} />
                    ))}
                </div>
            </div>
        </div>
    );
}
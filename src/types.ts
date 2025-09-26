
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

export interface Schedule {
    name: string;
    semester: string;
    units: number;
    fce: number;
    courses: Course[];
}

export interface Friend {
    name: string;
    department: string;
    sharedCourses: Course[];
}
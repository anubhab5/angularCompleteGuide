import { Course } from "../app/models/course";

export const COURSES: Course[] = [
    {
        id: 1,
        courseName: "Angular Core Deep Dive",
        iconUrl: '../../assets/images/angular.png',
        longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
        lessonsCount: 10
    },
    {
        id: 2,
        courseName: "RxJs In Practice Course",
        iconUrl: '',
        longDescription: "Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples",
        category: 'BEGINNER',
        lessonsCount: 10
    }

];
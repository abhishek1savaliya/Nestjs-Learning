import { JobType } from "./constants/jobs.constants";


export class createJobDTO {
    company: string;
    title: string;
    email: string;
    type?: JobType;
    experience: number;
    salary: number;
    tags?: string[];
    isActivate?: boolean;
}
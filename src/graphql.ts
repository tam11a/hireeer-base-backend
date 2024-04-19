
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum JobPublishStatus {
    draft = "draft",
    published = "published",
    archived = "archived"
}

export class CreateJobInput {
    label: string;
    about_job?: Nullable<string>;
    key_responsibilities?: Nullable<Nullable<string>[]>;
    education?: Nullable<string>;
    preferred_qualifications?: Nullable<Nullable<string>[]>;
    skills?: Nullable<Nullable<number>[]>;
    job_type?: Nullable<Nullable<number>[]>;
    work_type?: Nullable<Nullable<number>[]>;
    show_organization_details?: Nullable<boolean>;
    publish_status?: Nullable<JobPublishStatus>;
    receive_application_from?: Nullable<DateTime>;
    receive_application_to?: Nullable<DateTime>;
}

export class UpdateJobInput {
    id: number;
    label?: Nullable<string>;
    about_job?: Nullable<string>;
    key_responsibilities?: Nullable<Nullable<string>[]>;
    education?: Nullable<string>;
    preferred_qualifications?: Nullable<Nullable<string>[]>;
    skills?: Nullable<Nullable<number>[]>;
    job_type?: Nullable<Nullable<number>[]>;
    work_type?: Nullable<Nullable<number>[]>;
    show_organization_details?: Nullable<boolean>;
    publish_status?: Nullable<JobPublishStatus>;
    receive_application_from?: Nullable<DateTime>;
    receive_application_to?: Nullable<DateTime>;
}

export class Paging {
    first?: Nullable<number>;
    last?: Nullable<number>;
    after?: Nullable<ConnectionCursor>;
    before?: Nullable<ConnectionCursor>;
}

export class CreateJobtypeInput {
    label: string;
}

export class UpdateJobtypeInput {
    id: number;
    label: string;
}

export class CreateSkillInput {
    label: string;
}

export class UpdateSkillInput {
    id: number;
    label: string;
}

export class CreateWorktypeInput {
    label: string;
}

export class UpdateWorktypeInput {
    id: number;
    label: string;
}

export class Job {
    id: number;
    label: string;
    about_job?: Nullable<string>;
    key_responsibilities?: Nullable<Nullable<string>[]>;
    education?: Nullable<string>;
    preferred_qualifications?: Nullable<Nullable<string>[]>;
    skills: Nullable<Skill>[];
    job_type: Nullable<Jobtype>[];
    work_type: Nullable<Worktype>[];
    show_organization_details?: Nullable<boolean>;
    publish_status?: Nullable<JobPublishStatus>;
    receive_application_from?: Nullable<DateTime>;
    receive_application_to?: Nullable<DateTime>;
    created_at: DateTime;
    updated_at: DateTime;
}

export class PageInfo {
    hasNextPage?: Nullable<boolean>;
    hasPreviousPage?: Nullable<boolean>;
    startCursor?: Nullable<ConnectionCursor>;
    endCursor?: Nullable<ConnectionCursor>;
}

export class JobConnection {
    pageInfo: PageInfo;
    edges: Nullable<JobEdge>[];
}

export class JobEdge {
    cursor: ConnectionCursor;
    node: Job;
}

export abstract class IQuery {
    abstract jobs(paging?: Nullable<Paging>): JobConnection | Promise<JobConnection>;

    abstract job(id: number): Nullable<Job> | Promise<Nullable<Job>>;

    abstract jobtypes(paging?: Nullable<Paging>): JobtypeConnection | Promise<JobtypeConnection>;

    abstract jobtype(id: number): Nullable<Jobtype> | Promise<Nullable<Jobtype>>;

    abstract skills(paging?: Nullable<Paging>): SkillConnection | Promise<SkillConnection>;

    abstract skill(id: number): Nullable<Skill> | Promise<Nullable<Skill>>;

    abstract worktypes(paging?: Nullable<Paging>): WorktypeConnection | Promise<WorktypeConnection>;

    abstract worktype(id: number): Nullable<Worktype> | Promise<Nullable<Worktype>>;
}

export abstract class IMutation {
    abstract createJob(createJobInput: CreateJobInput): Job | Promise<Job>;

    abstract updateJob(updateJobInput: UpdateJobInput): Job | Promise<Job>;

    abstract removeJob(id: number): Nullable<Job> | Promise<Nullable<Job>>;

    abstract createJobtype(createJobtypeInput: CreateJobtypeInput): Jobtype | Promise<Jobtype>;

    abstract updateJobtype(updateJobtypeInput: UpdateJobtypeInput): Jobtype | Promise<Jobtype>;

    abstract removeJobtype(id: number): Nullable<Jobtype> | Promise<Nullable<Jobtype>>;

    abstract createSkill(createSkillInput: CreateSkillInput): Skill | Promise<Skill>;

    abstract updateSkill(updateSkillInput: UpdateSkillInput): Skill | Promise<Skill>;

    abstract removeSkill(id: number): Nullable<Skill> | Promise<Nullable<Skill>>;

    abstract createWorktype(createWorktypeInput: CreateWorktypeInput): Worktype | Promise<Worktype>;

    abstract updateWorktype(updateWorktypeInput: UpdateWorktypeInput): Worktype | Promise<Worktype>;

    abstract removeWorktype(id: number): Nullable<Worktype> | Promise<Nullable<Worktype>>;
}

export class Jobtype {
    id: number;
    label: string;
    jobs: Nullable<Job>[];
    created_at: DateTime;
    updated_at: DateTime;
}

export class JobtypeConnection {
    pageInfo: PageInfo;
    edges: Nullable<JobtypeEdge>[];
}

export class JobtypeEdge {
    node: Jobtype;
    cursor: ConnectionCursor;
}

export class Skill {
    id: number;
    label: string;
    jobs: Nullable<Job>[];
    created_at: DateTime;
    updated_at: DateTime;
}

export class SkillConnection {
    pageInfo: PageInfo;
    edges: Nullable<SkillEdge>[];
}

export class SkillEdge {
    node: Skill;
    cursor: ConnectionCursor;
}

export class Worktype {
    id: number;
    label: string;
    jobs: Nullable<Job>[];
    created_at: DateTime;
    updated_at: DateTime;
}

export class WorktypeConnection {
    pageInfo: PageInfo;
    edges: Nullable<WorktypeEdge>[];
}

export class WorktypeEdge {
    node: Worktype;
    cursor: ConnectionCursor;
}

export type DateTime = any;
export type ConnectionCursor = any;
type Nullable<T> = T | null;

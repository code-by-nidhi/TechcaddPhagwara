import type { BaseEntity, Course } from '../../types'
import { createHttpResource } from '../http/resource'

export type CourseCreate = Omit<Course, keyof BaseEntity>
export type CourseUpdate = Partial<CourseCreate>

/**
 * Live against the Express API.
 *
 * This note used to say the other resources were still on the localStorage
 * mock, "until their endpoints are built". They all are: every resource in
 * this folder goes through `createHttpResource` now, and nothing imports the
 * mock except the two dev helpers re-exported from `api/index.ts`.
 */
export const coursesApi = createHttpResource<Course, CourseCreate, CourseUpdate>('/courses')

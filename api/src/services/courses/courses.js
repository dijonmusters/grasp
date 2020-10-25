import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const courses = () => {
  return db.course.findMany()
}

export const course = ({ id }) => {
  return db.course.findOne({
    where: { id },
  })
}

export const createCourse = ({ input }) => {
  requireAuth({ role: 'instructor' })
  return db.course.create({
    data: input,
  })
}

export const updateCourse = ({ id, input }) => {
  requireAuth({ role: 'instructor' })
  return db.course.update({
    data: input,
    where: { id },
  })
}

export const deleteCourse = ({ id }) => {
  requireAuth({ role: 'instructor' })
  return db.course.delete({
    where: { id },
  })
}

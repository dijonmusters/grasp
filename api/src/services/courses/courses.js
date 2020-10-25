import { db } from 'src/lib/db'

export const courses = () => {
  return db.course.findMany()
}

export const course = ({ id }) => {
  return db.course.findOne({
    where: { id },
  })
}

export const createCourse = ({ input }) => {
  return db.course.create({
    data: input,
  })
}

export const updateCourse = ({ id, input }) => {
  return db.course.update({
    data: input,
    where: { id },
  })
}

export const deleteCourse = ({ id }) => {
  return db.course.delete({
    where: { id },
  })
}

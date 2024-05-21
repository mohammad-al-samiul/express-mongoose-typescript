import { Student } from './student.interface'
import { StudentModel } from './student.model'

const createStudentIntoDb = async (student: Student) => {
  const result = await StudentModel.create(student)
  return result
}

const getStudentsIntoDb = async () => {
  const result = await StudentModel.find({})
  return result
}

const getSingleStudent = async (id: string) => {
  const result = await StudentModel.findOne({ id })
  return result
}

export const StudentServices = {
  createStudentIntoDb,
  getStudentsIntoDb,
  getSingleStudent,
}

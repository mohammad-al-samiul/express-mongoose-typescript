export type UserName = {
  firstName: string
  middleName: string
  lastName: string
}

export type Guardian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNo: string
  motherName: string
  motherOccupation: string
  montherContactNo: string
}

export type LocalGuardian = {
  name: string
  occupation: string
  contactNo: string
  address: string
}

export type Student = {
  id: string
  name: UserName
  gender: 'male' | 'famale'
  dateOfBirth: string
  email: string
  contactNo: string
  emergencyContactNo: string
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  presentAddress: string
  permanentAddress: string
  guardian: Guardian
  localguardian: LocalGuardian
  profileImg?: string
  isActive: 'active' | 'blocked'
}

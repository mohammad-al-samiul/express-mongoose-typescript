import { z } from 'zod'

// Define the Zod schema for UserName
const userNameValidationSchema = z.object({
  firstName: z.string().min(1, 'First Name is required'),
  middleName: z.string().optional(),
  lastName: z.string().min(1, 'Last Name is required'),
})

// Define the Zod schema for Guardian
const guardianValidationSchema = z.object({
  fatherName: z.string().min(1, 'Father Name is required'),
  fatherOccupation: z.string().min(1, 'Father Occupation is required'),
  fatherContactNo: z.string().min(1, 'Father Contact Number is required'),
  motherName: z.string().min(1, 'Mother Name is required'),
  motherOccupation: z.string().min(1, 'Mother Occupation is required'),
  montherContactNo: z.string().min(1, 'Mother Contact Number is required'),
})

// Define the Zod schema for LocalGuardian
const localGuardianValidationSchema = z.object({
  name: z.string().min(1, 'Local Guardian Name is required'),
  occupation: z.string().min(1, 'Local Guardian Occupation is required'),
  contactNo: z.string().min(1, 'Local Guardian Contact Number is required'),
  address: z.string().min(1, 'Local Guardian Address is required'),
})

// Define the Zod schema for Student
const studentValidationSchema = z.object({
  id: z.string().min(1, 'ID is required'),
  name: userNameValidationSchema,
  gender: z.enum(['male', 'female', 'other'], {
    message: 'Invalid gender value. Allowed values are male, female, other.',
  }),
  dateOfBirth: z.string().min(1, 'Date of Birth is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email format'),
  contactNo: z.string().min(1, 'Contact Number is required'),
  emergencyContactNo: z.string().min(1, 'Emergency Contact Number is required'),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  presentAddress: z.string().min(1, 'Present Address is required'),
  permanentAddress: z.string().min(1, 'Permanent Address is required'),
  guardian: guardianValidationSchema.optional(), // Assuming guardian might be optional
  localguardian: localGuardianValidationSchema.optional(), // Assuming localguardian might be optional
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'blocked']).default('active'),
})

export default studentValidationSchema

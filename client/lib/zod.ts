import { z } from 'zod'

export const signInSchema = z.object({
  username: z
    .string({ required_error: 'El campo es requerido' })
    .min(1, 'El campo es requerido')
    .min(6, 'El nombre de usuario debe tener mas de 6 caracteres')
    .regex(/^\S*$/, 'No se permiten espacios en blanco'),
  password: z
    .string({ required_error: 'El campo es requerido' })
    .min(1, 'El campo es requerido')
    .min(8, 'La contraseña debe tener más de 8 caracteres')
    .max(32, {
      message: 'El contraseña debe tener menos 32 caracteres'
    })
})

export const signUpSchema = z.object({
  username: z
    .string({ required_error: 'El campo es requerido' })
    .min(1, 'El campo es requerido')
    .min(4, 'El campo debe tener más de 4 caracteres'),
  email: z
    .string({ required_error: 'El campo es requerido' })
    .min(1, 'El campo es requerido')
    .email('Correo electrónico no válido'),
  password: z
    .string({ required_error: 'El campo es requerido' })
    .min(1, 'El campo es requerido')
    .min(3, 'La contraseña debe tener más de 8 caracteres')
    .max(32, {
      message: 'El contraseña debe tener menos 32 caracteres'
    })
})

export const createCarSchema = z.object({
  brand: z.string(),
  model: z.string(),
  year: z.number(),
  color: z.string(),
  capacity: z.string(),
  transmission: z.string(),
  fuel: z.string(),
  vehicleType: z.string(),
  price: z.number()
})

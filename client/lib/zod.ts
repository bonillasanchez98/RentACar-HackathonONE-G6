import { z } from 'zod'

export const signInSchema = z.object({
  email: z
    .string({ required_error: 'El campo es requerido' })
    .min(1, 'El campo es requerido')
    .email('Correo electrónico no válido'),
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
    .min(8, 'La contraseña debe tener más de 8 caracteres')
    .max(32, {
      message: 'El contraseña debe tener menos 32 caracteres'
    })
})

import vine from '@vinejs/vine'

export const createUser = vine.compile(
  vine.object({
    fullName: vine.string(),
    email: vine.string(),
    password: vine.string().trim().minLength(8),
  })
)

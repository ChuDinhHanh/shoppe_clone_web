import { ResponseApi } from './untils.type'
import { User } from './user.type'

export type AuthResponse = ResponseApi<{
  access_token: string
  expires: string
  user: User
}>

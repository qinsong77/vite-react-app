/**
 * Generated by orval v7.1.0 🍺
 * Do not edit manually.
 * Swagger Petstore - OpenAPI 3.0
 * This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
Swagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!
You can now help us improve the API whether it's by making changes to the definition itself or to the code.
That way, with time, we can improve the API in general, and expose some of the new features in OAS3.

Some useful links:
- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
 * OpenAPI spec version: 1.0.19
 */
import { createRequest } from '../axios/index'
import type {
  ApiResponse,
  FindPetsByStatusParams,
  FindPetsByTagsParams,
  GetInventory200,
  LoginUserParams,
  Order,
  Pet,
  UpdatePetWithFormParams,
  UploadFileParams,
  User,
} from './model'

/**
 * Update an existing pet by Id
 * @summary Update an existing pet
 */
export const updatePet = (pet: Pet) => {
  return createRequest<Pet>({
    url: `/api/v3/pet`,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    data: pet,
  })
}

/**
 * Add a new pet to the store
 * @summary Add a new pet to the store
 */
export const addPet = (pet: Pet) => {
  return createRequest<Pet>({
    url: `/api/v3/pet`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: pet,
  })
}

/**
 * Multiple status values can be provided with comma separated strings
 * @summary Finds Pets by status
 */
export const findPetsByStatus = (params?: FindPetsByStatusParams) => {
  return createRequest<Pet[]>({
    url: `/api/v3/pet/findByStatus`,
    method: 'GET',
    params,
  })
}

/**
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * @summary Finds Pets by tags
 */
export const findPetsByTags = (params?: FindPetsByTagsParams) => {
  return createRequest<Pet[]>({
    url: `/api/v3/pet/findByTags`,
    method: 'GET',
    params,
  })
}

/**
 * Returns a single pet
 * @summary Find pet by ID
 */
export const getPetById = (petId: number) => {
  return createRequest<Pet>({ url: `/api/v3/pet/${petId}`, method: 'GET' })
}

/**
 * @summary Updates a pet in the store with form data
 */
export const updatePetWithForm = (
  petId: number,
  params?: UpdatePetWithFormParams
) => {
  return createRequest<unknown>({
    url: `/api/v3/pet/${petId}`,
    method: 'POST',
    params,
  })
}

/**
 * @summary Deletes a pet
 */
export const deletePet = (petId: number) => {
  return createRequest<unknown>({
    url: `/api/v3/pet/${petId}`,
    method: 'DELETE',
  })
}

/**
 * @summary uploads an image
 */
export const uploadFile = (
  petId: number,
  uploadFileBody: Blob,
  params?: UploadFileParams
) => {
  return createRequest<ApiResponse>({
    url: `/api/v3/pet/${petId}/uploadImage`,
    method: 'POST',
    headers: { 'Content-Type': 'application/octet-stream' },
    data: uploadFileBody,
    params,
  })
}

/**
 * Returns a map of status codes to quantities
 * @summary Returns pet inventories by status
 */
export const getInventory = () => {
  return createRequest<GetInventory200>({
    url: `/api/v3/store/inventory`,
    method: 'GET',
  })
}

/**
 * Place a new order in the store
 * @summary Place an order for a pet
 */
export const placeOrder = (order: Order) => {
  return createRequest<Order>({
    url: `/api/v3/store/order`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: order,
  })
}

/**
 * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
 * @summary Find purchase order by ID
 */
export const getOrderById = (orderId: number) => {
  return createRequest<Order>({
    url: `/api/v3/store/order/${orderId}`,
    method: 'GET',
  })
}

/**
 * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
 * @summary Delete purchase order by ID
 */
export const deleteOrder = (orderId: number) => {
  return createRequest<unknown>({
    url: `/api/v3/store/order/${orderId}`,
    method: 'DELETE',
  })
}

/**
 * This can only be done by the logged in user.
 * @summary Create user
 */
export const createUser = (user: User) => {
  return createRequest<User>({
    url: `/api/v3/user`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: user,
  })
}

/**
 * Creates list of users with given input array
 * @summary Creates list of users with given input array
 */
export const createUsersWithListInput = (user: User[]) => {
  return createRequest<User>({
    url: `/api/v3/user/createWithList`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: user,
  })
}

/**
 * @summary Logs user into the system
 */
export const loginUser = (params?: LoginUserParams) => {
  return createRequest<string>({
    url: `/api/v3/user/login`,
    method: 'GET',
    params,
  })
}

/**
 * @summary Logs out current logged in user session
 */
export const logoutUser = () => {
  return createRequest<void>({ url: `/api/v3/user/logout`, method: 'GET' })
}

/**
 * @summary Get user by user name
 */
export const getUserByName = (username: string) => {
  return createRequest<User>({ url: `/api/v3/user/${username}`, method: 'GET' })
}

/**
 * This can only be done by the logged in user.
 * @summary Update user
 */
export const updateUser = (username: string, user: User) => {
  return createRequest<void>({
    url: `/api/v3/user/${username}`,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    data: user,
  })
}

/**
 * This can only be done by the logged in user.
 * @summary Delete user
 */
export const deleteUser = (username: string) => {
  return createRequest<unknown>({
    url: `/api/v3/user/${username}`,
    method: 'DELETE',
  })
}

export type UpdatePetResult = NonNullable<Awaited<ReturnType<typeof updatePet>>>
export type AddPetResult = NonNullable<Awaited<ReturnType<typeof addPet>>>
export type FindPetsByStatusResult = NonNullable<
  Awaited<ReturnType<typeof findPetsByStatus>>
>
export type FindPetsByTagsResult = NonNullable<
  Awaited<ReturnType<typeof findPetsByTags>>
>
export type GetPetByIdResult = NonNullable<
  Awaited<ReturnType<typeof getPetById>>
>
export type UpdatePetWithFormResult = NonNullable<
  Awaited<ReturnType<typeof updatePetWithForm>>
>
export type DeletePetResult = NonNullable<Awaited<ReturnType<typeof deletePet>>>
export type UploadFileResult = NonNullable<
  Awaited<ReturnType<typeof uploadFile>>
>
export type GetInventoryResult = NonNullable<
  Awaited<ReturnType<typeof getInventory>>
>
export type PlaceOrderResult = NonNullable<
  Awaited<ReturnType<typeof placeOrder>>
>
export type GetOrderByIdResult = NonNullable<
  Awaited<ReturnType<typeof getOrderById>>
>
export type DeleteOrderResult = NonNullable<
  Awaited<ReturnType<typeof deleteOrder>>
>
export type CreateUserResult = NonNullable<
  Awaited<ReturnType<typeof createUser>>
>
export type CreateUsersWithListInputResult = NonNullable<
  Awaited<ReturnType<typeof createUsersWithListInput>>
>
export type LoginUserResult = NonNullable<Awaited<ReturnType<typeof loginUser>>>
export type LogoutUserResult = NonNullable<
  Awaited<ReturnType<typeof logoutUser>>
>
export type GetUserByNameResult = NonNullable<
  Awaited<ReturnType<typeof getUserByName>>
>
export type UpdateUserResult = NonNullable<
  Awaited<ReturnType<typeof updateUser>>
>
export type DeleteUserResult = NonNullable<
  Awaited<ReturnType<typeof deleteUser>>
>

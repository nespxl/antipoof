export default interface formRegistration {
    name: string
    mail: string
    password: string
    passwordConfirm: string
}

export interface IItemUser {
    avatar: string
    email: string
    first_name: string
    last_name: string
    id?: number
    like?: boolean
}

export interface IPaginationArray {
    active?: boolean
    page?: number
}

import dbConnection from '../utils/database'
import User from '../models/user'

export const listUsers = async () => {
    await dbConnection()
    const users = await User.find()
    return users
}

export const createUser = async (user) => {
    await dbConnection()
    const createdUser = await User.create(user)
    return createUser
}

export const deleteUser = async (id) => {
    await dbConnection()
    await User.findByIdAndDelete(id)
}

export const updateUser = async (id, body) => {
    await dbConnection()
    await User.findByIdAndUpdate(id, body)
}
import { Document } from 'mongoose'

export interface Todo extends Document {
    name: string
    description: string
    completed: boolean
}
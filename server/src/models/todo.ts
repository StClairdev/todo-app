import { Todo } from './../types/todo';
import { model, Schema } from 'mongoose'

const todoSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    completed: {
        type: Boolean,
        required: true
    }

}, { timestamps: true })


export default model<Todo>('Todo', todoSchema)
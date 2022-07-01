import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://localhost:4000"

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
      `${baseUrl}/todo`
    )
    return todos
  } catch (error) {
    throw new Error()
  }
}

export const addTodo = async (
    formData: Todo
): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const todo: Omit<Todo, "_id"> = {
            name: formData.name,
            description: formData.description,
            completed: false,
        }
        const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
            `${baseUrl}/todo`,
            todo
        )
        return saveTodo
    }  catch (error) {
       throw new Error()
    }
}

export const updateTodo = async (
    todo:Todo
): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const todoUpdate: Pick<Todo, "completed"> = {
            completed: true,
        }
        const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
            `${baseUrl}/todo/${todo._id}`,
            todoUpdate
        )
        return updatedTodo
    } catch (error) {
       throw error 
    }
}

export const deleteTodo = async (
    _id: string
): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
            `${baseUrl}/todo/${_id}`
        )
        return deletedTodo
    } catch (error) {
       throw error 
    }
}
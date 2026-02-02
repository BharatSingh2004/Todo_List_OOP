import { ToDoModel } from "../schema/todo.schema";
export class ToDoService{
    async getTask(){
        const task = ToDoModel.find();
        return task;
    };
    createTask(){

    };
    updateTask(){

    };
    deleteTask(){

    };
}
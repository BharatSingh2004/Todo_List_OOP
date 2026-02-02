import { Schema , model } from "mongoose"


const ToDoSchema = new Schema({title:String});

export const ToDoModel = model("task",ToDoSchema);
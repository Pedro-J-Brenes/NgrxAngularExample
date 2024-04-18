import { TaskModel } from "src/app/models/task.model";

export const TaskState: TaskModel= {
    list:[],
    taskObject: {
        id:0,
        title:'',
        completed:false,
        userId:0
    },
    errormessage:''
}
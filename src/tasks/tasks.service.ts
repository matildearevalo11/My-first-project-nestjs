import { Injectable, HttpCode, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/createTask.dto';
import { UpdateTaskDto } from './dto/updateTask.dto';

@Injectable()
export class TasksService {

    private tasks = [];

    getTasks(){
        return this.tasks;
    }

    getTask(id: number){
        const taskFound = this.tasks.find(task => task.id === id)
        if(!taskFound){
            return new NotFoundException(`Task with id ${id} not found.`)
        }
    }

    createTask(task: CreateTaskDto){
        console.log(task)
        this.tasks.push({
            ...task, id: this.tasks.length +1,
        });
        return task;
    }

    updateTask(task: UpdateTaskDto){
        console.log(task)
        return 'Actualizando tarea'
    }

    updateTaskStatus(){
        return 'Actualizando tarea'
    }

    deleteTask(){
        return 'Eliminando tarea'
    }


}

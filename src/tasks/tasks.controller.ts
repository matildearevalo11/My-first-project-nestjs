import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/createTask.dto';
import { UpdateTaskDto } from './dto/updateTask.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('/tasks')
@ApiTags('tasks')
export class TaskController {

    constructor(private tasksService: TasksService){
        this.tasksService = tasksService;
    }

    @Get()
    getAllTasks(@Query() query: any){
        console.log(query)
        return this.tasksService.getTasks();
    }

    @Get('/:id')
    getTask(@Param('id') id: string){
        return this.tasksService.getTask(parseInt(id));
    }

    @Post()
    createTask(@Body() task: CreateTaskDto){
        return this.tasksService.createTask(task);
    }

    @Patch() 
    updateTaskStatus(){
        return this.tasksService.updateTaskStatus();
    }

    @Put()
    updateTask(@Body() task: UpdateTaskDto){
        return this.tasksService.updateTask(task);
    }

    @Delete()
    deleteTask(){
        return this.tasksService.deleteTask();
    }

}
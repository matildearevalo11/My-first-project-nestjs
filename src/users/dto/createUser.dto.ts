import { IsEmail, IsNotEmpty, IsNumber, IsPositive, IsString, Max } from "class-validator";

export class CreateUserDto{

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string;
    
    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @Max(100)
    @IsPositive()
    age: number;
}
import {  IsIn, IsString } from 'class-validator';
const statusValues = ['Todo' , 'In progress' , 'Ready']
export class CreateReservationValidator {
  @IsString()
  public name: string;

  @IsString()
  public store: string;


  @IsIn( [...statusValues])
  public status: 'Todo' | 'In progress' | 'Ready';
}


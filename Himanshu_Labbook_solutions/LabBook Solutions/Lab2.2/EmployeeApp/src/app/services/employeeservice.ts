import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable()
export class EmployeeService{

 store=[
   new Employee(2,'xyz',10000,"JAVA"),
   new Employee(1,'himanshu',20000,"Angular"),
   new Employee(5,'anushka',15000,"Js"),
   new Employee(4,'shivam',10000,"Java"),
   new Employee(3,'aditya',20000,"Angular")
];   
 
 

  fetchAllEmployees(): Employee[]{
      return this.store;
  }


}
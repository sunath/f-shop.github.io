import { useAnimation } from "@angular/animations";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ValidationErrors ,AsyncValidator, AbstractControl, Validator} from "@angular/forms";
import { map, Observable, of, take } from "rxjs";
import { UserService } from "src/app/services/user.service";



@Injectable()
export default class EmailUniqueValidator implements AsyncValidator{

    constructor(private userService:UserService){}


    validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
       
        return new Promise((resole,reject) => {

           this.userService.isEmailUnique(control.value).then(e => {
               const data = e as any;
                resole(data.isValid ? null : {"notUnique":true})
           })
        })
        
    }




   

}
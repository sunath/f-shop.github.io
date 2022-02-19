import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import UserCreateModel from '../models/user-create-model';
import { firstValueFrom, map, take } from 'rxjs';
import UserLoginModel from '../models/user-login-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  serverUrl:string = "http://127.0.0.1:8000/user/"

  constructor(private http:HttpClient) { }

  async createUser(user:UserCreateModel){
    const subcription = this.http.post(this.serverUrl,user)
    const result = await firstValueFrom(subcription)
    console.log(result)
    return result
  }

   async isUserNameUnique(username:string){
    const subcription = this.http.post(this.serverUrl+"uni/username",{username:username})
    const data = await firstValueFrom(subcription)
    return data

  }

  async isEmailUnique(email:string){
    const subcription = this.http.post(this.serverUrl+"uni/email",{email:email})
    const data = await firstValueFrom(subcription)
    return data
  }


  async loginUser(user:UserLoginModel){
    const subcription = this.http.post(this.serverUrl+"login",user)
    const data = await firstValueFrom(subcription)
    return data
  }


  async isPasswordUnique(password:string){
    const subcription = this.http.post(this.serverUrl+"uni/password",{password:password})
    const data = await firstValueFrom(subcription)
    return data
  }
}

import { Component, OnInit } from '@angular/core';
import { Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword} from '@angular/fire/auth';
import { Router } from '@angular/router';

import {addDoc,Firestore,collection} from '@angular/fire/firestore'
import { getDocs } from '@firebase/firestore';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  
  public data:any=[]

  
  setLoginVis=true;
  constructor(public firestore:Firestore, public router: Router) {
    this.getData();
   }

  ngOnInit(): void {
  }
  handleSignup(formVal:any)
  {
    // const dbInstance=collection(this.firestore,'JeLmMap')
    // for  (let user of this.putData)
    // {
    //   addDoc(dbInstance,user).then(()=> console.log("Data Sent")).catch((err)=>alert(err.message))
      
    // }
    alert("Login Data added")
  }
  getData()
  {
    const dbInstance=collection(this.firestore,'UserLoginJELM')
    getDocs(dbInstance)
    .then( (response)=>
    {
      this.data=[...response.docs.map(
        (item)=>{return {
          ...item.data(),id:item.id} 
        }
      )]
    })
  }
  handleLogin(formVal:any)
  {
    console.log(formVal)
    console.log(this.data)
    for  (let user of this.data)
    {

      console.log(user.Pass+" "+user.JE)
      if (formVal.email==user.JE && formVal.password==user.Pass)
      {
        alert("Login Successful!")
        if(user.IsJE=="YES")
        {
          this.router.navigate(['JE']);
        }
        else
        {
          this.router.navigate(['LineMan']);
        }
      }
    }
  }
}

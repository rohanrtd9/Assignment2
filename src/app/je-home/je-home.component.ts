import { Component, OnInit } from '@angular/core';
import {addDoc,Firestore,collection, query, where,deleteDoc, doc} from '@angular/fire/firestore'
import { getDocs } from '@firebase/firestore';


@Component({
  selector: 'app-je-home',
  templateUrl: './je-home.component.html',
  styleUrls: ['./je-home.component.css']
})
export class JeHomeComponent implements OnInit {

  JE="ABC"
  public lMan:any=[]

  public lManNotJe:any=[]
 
  public lManName:any=[]
  showWorkAssign=true
  showMapping=false
  constructor(public firestore:Firestore, ) { 
    this.getData()
  }

  ngOnInit(): void {
  }

  showAssignWork()
  {
    this.showWorkAssign=true;
    this.showMapping=false;
  }
  showAllocatedWork()
  {
    this.showWorkAssign=false;
    this.showMapping=false;
  }
  showMappingChange()
  {
    this.showMapping=true;
    this.showWorkAssign=false;
  }
  putWork(value:any)
  {
   
    const dbInstance=collection(this.firestore,'AssignTasks')
      addDoc(dbInstance,value).then(()=> console.log("Data Sent")).catch((err)=>alert(err.message))
  
    
  }
  putMapJeLm(value:any)
  {
   let arr={"Je Name":this.JE,"Line Man":value.linemanAdd}
    const dbInstance=collection(this.firestore,'JeLmMap')
      addDoc(dbInstance,arr).then(()=> {
        alert("Data Added");
        this.getData();
      }).catch((err)=>alert(err.message))
    
    
  }
  deleteMapJeLm(value:any)
  {
    console.log(value)
    const delInstance=doc(this.firestore,'JeLmMap',value.lineman)
    
    deleteDoc(delInstance)
    .then(()=>
    {
      alert("Data deleted");
      this.getData();
    }).catch((err)=>
    {
      alert(err.message);
      
    })

  }
  refresh(): void {
    window.location.reload();
}
  getData()
  {
    
    const dbInstance=collection(this.firestore,'JeLmMap')
    const q = query(dbInstance, where("Je Name", "==", this.JE));
    getDocs(q)
    .then( (response)=>
    {
      this.lMan=[...response.docs.map(
        (item)=>{
          return {
          ...item.data(),id:item.id} 
         
        }
      )]
    })
    getDocs(dbInstance)
    .then( (response)=>
    {
      this.lManNotJe=[...response.docs.map(
        (item)=>{
          return {
          ...item.data(),id:item.id} 
         
        }
      )]
    })
    
  }

   getElem(val:any[]): any[]
  {
    let arr=[]
    for (let ekem of val)
    {
      arr.push(ekem["Line Man"])
    }
    this.lManName=arr;
    return arr;
    
  }
  
}

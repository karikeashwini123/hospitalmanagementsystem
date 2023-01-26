import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl:'./doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {
  doctorArray:any[]=[];
isResultLoaded=false;
isUpdateFormActive=false;
doctorFname:string="";
address:string="";
mobile:Number=0;
designation:string="";
gender:string="";
currentdoctorID="";
constructor(private http:HttpClient)
{
  this.getAllDoctor();
}
getAllDoctor()
{
  this.http.get("http://localhost:8084/api/v1/doctor/getAllDoctor")
  .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData);
        this.doctorArray = resultData;
    });
}
register()
{
  let bodyData={
    "doctorFname":this.doctorFname,"address":this.address,"mobile":this.mobile,"designation":this.designation,"gender":this.gender
  };
  this.http.post("http://localhost:8084/api/v1/doctor/save",bodyData,{responseType:'text'}).subscribe((resultData: any)=>
  {
console.log(resultData);
alert("doctor registered successfully");
this.getAllDoctor();
this.doctorFname="";
this.address="";
this.mobile=0;
this.designation="";
this.gender="";
  });
}
setUpdate(data:any)
{
  this.doctorFname=data.doctorFname;
  this.address=data.address;
  this.mobile=data.mobile;
  this.designation=data.designation;
  this.gender=data.gender;
  this.currentdoctorID=data.currentdoctorID;
}
save()
  {
    if(this.currentdoctorID == '')
    {
        this.register();
    }
      else
      {
       this.updateRecords();
      }      
  }

updateRecords()
{
  let bodyData={
    "doctorid":this.currentdoctorID,"doctorFname":this.doctorFname,"address":this.address,"mobile":this.mobile,"designation":this.designation,"gender":this.gender
  };
  this.http.post("http://localhost:8084/api/v1/doctor/update",bodyData,{responseType:'text'}).subscribe((resultData: any)=>
{
  console.log(resultData);
  alert("Details updated successfully");
  this.getAllDoctor();
  this.doctorFname="";
  this.address="";
  this.mobile=0;
  this.designation="";
  this.gender="";
});
}
  setDelete(data: any)
  {
    
    
    this.http.delete("http://localhost:8084/api/v1/doctor/deletedoctor"+ "/"+ data.doctorid,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("doctor Deleted")
        this.getAllDoctor();
 
        this.doctorFname="";
        this.address="";
        this.mobile=0;
        this.designation="";
        this.gender="";      });
    }
  
  }




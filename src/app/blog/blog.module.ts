import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";



const blogRoutes:Routes=  [
  {path:'', }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      RouterModule.forChild(blogRoutes)
  ],
  providers:[],
})
export class BlogModule { }

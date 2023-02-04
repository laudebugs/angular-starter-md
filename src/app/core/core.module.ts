import { NgModule } from "@angular/core";
import { MaterialModule } from "./material.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [MaterialModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class CoreModule{}

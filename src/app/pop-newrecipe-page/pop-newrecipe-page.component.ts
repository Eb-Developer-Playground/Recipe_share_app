import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-newrecipe-page',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,MatInputModule, MatFormFieldModule,MatCardModule],
  templateUrl: './pop-newrecipe-page.component.html',
  styleUrl: './pop-newrecipe-page.component.scss'
})
export class PopNewrecipePageComponent implements OnInit {

  //floatLabelControl = new FormControl('auto' as FloatLabelType);
  newRecipeForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,public dialogRef: MatDialogRef<PopNewrecipePageComponent>) {}

  ngOnInit(): void {
    this.newRecipeForm = this.formBuilder.group({
      title: ['',Validators.required],
      category: [''],
      ingredients: [''],
      instruction: [''],
      recipimgurl: ['']
    })
  }
  
  Add() { 
  alert("add")
  console.log(this.newRecipeForm);
  const title=this.newRecipeForm.get('title')?.value;
  console.log(title);
  }

  close(){
    this.dialogRef.close();
  }
}

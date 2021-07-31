import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lessons13',
    templateUrl: './lessons13.component.html',
    styleUrls: ['./lessons13.component.css']
})
export class Lessons13Component implements OnInit {

    arrInform: Array<any> = [];
    email !: string;
    login !: string;
    password !: string;
    edit_index !: number;
    isEdit = false;

    constructor() { }

    ngOnInit(): void {
    }
    Clear(): void{
        this.email ='';
        this.login ='';
        this.password ='';
    }

    Add_Btn(): void {
        let newUser: Array<string> = [this.login , this.password ,this.email ];
        this.arrInform.push(newUser);
        this.Clear();
    }

    Edit_Btn(): void {
        let newUser: Array<string> = [this.login , this.password ,this.email ];
        this.arrInform.splice(this.edit_index,1,newUser);
        this.isEdit = false;
        this.Clear();
    }

    Delete_User(index: number): void {
        this.arrInform.splice( index, 1 );
    }

    Edit_User(index: number):void{
        let copy: any = this.arrInform[index];
        this.login = copy[0];
        this.password = copy[1];
        this.email = copy[2];
        this.edit_index = index;
        this.isEdit = true;
    }

}
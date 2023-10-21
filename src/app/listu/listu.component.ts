import { Component , OnInit} from '@angular/core';

import { UserService } from '../user.service';
@Component({
  selector: 'app-listu',
  templateUrl: './listu.component.html',
  styleUrls: ['./listu.component.scss']
})
export class ListuComponent implements OnInit{
  constructor(private userService:UserService ){}

  users!: any[];

  attributeToCheck: string = 'accountCategory'; // Attribut par défaut
  numberOfUsersByAttribute: { [key: string]: number } = {};
  ngOnInit() {
    this.users = this.userService.getAllUsers();
    this.calculateNumberOfUsersByAttribute();
  }

  calculateNumberOfUsersByAttribute() {
    const attributes = this.users.map(user => user[this.attributeToCheck]);
    const uniqueAttributes = [...new Set(attributes)];

    for (const attr of uniqueAttributes) {
      this.numberOfUsersByAttribute[attr] = this.userService.fetchNbInList(this.users, this.attributeToCheck, attr);
    }
  }
  calculateNumberOfUsers() {
    const attributes = this.users.map(user => user[this.attributeToCheck]);
    const uniqueAttributes = [...new Set(attributes)];

    for (const attr of uniqueAttributes) {
      this.numberOfUsersByAttribute[attr] = this.userService.fetchNbInList(this.users, this.attributeToCheck, attr);
    }

    // Afficher les résultats dans la console
    console.log(this.numberOfUsersByAttribute);
  }
  // listUsers:User[]=[
  //   {
  //     idCustomer: 1,
  //     firstName: "Mila",
  //     lastName: " Kunis",
  //     birthDate: "1999-06-30",
  //     accountCategory: "Admin",
  //     email: "mila@kunis.com",
  //     password: "test",
  //     picture: "https://bootdey.com/img/Content/avatar/avatar3.png",
  //     profession: "Software Engineer"
  //     },
  //     {
  //     idCustomer: 2,
  //     firstName: "George",
  //     lastName: "Clooney",
  //     birthDate: "1999-06-30",
  //     accountCategory: "Customer",
  //     email: "marlon@brando.com",
  //     password: "test",
  //     picture: "https://bootdey.com/img/Content/avatar/avatar2.png",
  //     profession: "Software Engineer"
  //     },
  //     {
  //     idCustomer: 3,
  //     firstName: "George",
  //     lastName: "Clooney",
  //     birthDate: "1999-06-30",
  //     accountCategory: "Customer",
  //     email: "marlon@brando.com",
  //     password: "test",
  //     picture: "https://bootdey.com/img/Content/avatar/avatar1.png",
  //     profession: "Software Engineer"
  // },
  // {
  // idCustomer: 4,
  // firstName: "Ryan",
  // lastName: "Gossling",
  // birthDate:"1999-06-30",
  // accountCategory: "Golden",
  // email: "Ryan@nicholson.com",
  // password: "test",
  // picture: "https://bootdey.com/img/Content/avatar/avatar4.png",
  // profession: "Software Engineer"
  // },
  // {
  // idCustomer: 5,
  // firstName: "Robert",
  // lastName: "Downey",
  // birthDate: "1999-06-30",
  // accountCategory: "Blocked Account",
  // email: "robert@nicholson.com",
  // password: "test",
  // picture: "https://bootdey.com/img/Content/avatar/avatar5.png",
  // profession: "Software Engineer"
  // }
  // ];
  // removeElementFromTab(index:any){
  //   this.listUsers.splice(index,1);
  // }
}

  

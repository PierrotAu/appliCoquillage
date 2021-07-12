import { Component } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items: Observable<any[]>;
  firebaseText: string;
  constructor(
    public firestore: AngularFirestore
    
  ) {
 
    this.items = this.firestore.collection("items").valueChanges();

  }

  addFirestore() {
    this.firestore.collection('items').add({
        text: this.firebaseText
      });
  }	
  

}


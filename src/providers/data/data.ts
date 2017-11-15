import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  private speakersListRef: AngularFirestoreCollection<speaker>;
  speakerList: Observable<[speaker]>;
  lists: any;

  constructor(private afs:AngularFirestore) {
    this.speakersListRef = this.afs.collection('Speakers');
    this.speakerList = this.speakersListRef.valueChanges();
  }

}

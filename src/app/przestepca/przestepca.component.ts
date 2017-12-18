import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Przestepca {
  Imie: string;
  Nazwisko: string;
  PESEL: string;
}

interface PrzestepcaId extends Przestepca {
  id: string;
}


@Component({
  selector: 'app-przestepca',
  templateUrl: './przestepca.component.html',
  styleUrls: ['./przestepca.component.css']
})
export class PrzestepcaComponent implements OnInit {

  przestepcyCol: AngularFirestoreCollection<Przestepca>;
  przestepcy: any;
  imie: string;
  nazwisko: string;
  przestepcaDoc: AngularFirestoreDocument<Przestepca>;
  przestepca: Observable<Przestepca>;

  constructor(private afs: AngularFirestore) {
  }

  ngOnInit() {
    this.przestepcyCol = this.afs.collection('Przestepca');
    this.przestepcy = this.przestepcyCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Przestepca;
          const id = a.payload.doc.id;
          return {id, data};
        });
      });
  }

  addPrzestepca() {
    this.afs.collection('Przestepca').add({'Imie': this.imie, 'Nazwisko': this.nazwisko});
  }

  getPrzestepca(przestepcaId) {
    this.przestepcaDoc = this.afs.doc('Przestepca/' + przestepcaId);
    this.przestepca = this.przestepcaDoc.valueChanges();
  }

  deletePrzestepca(przestepcaId) {
    this.afs.doc('Przestepca/' + przestepcaId).delete();
  }
}

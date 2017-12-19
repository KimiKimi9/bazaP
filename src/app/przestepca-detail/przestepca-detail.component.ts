import { Component, OnInit, Input } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Przestepca, PrzestepcaId} from '../Przestepca';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-przestepca-detail',
  templateUrl: './przestepca-detail.component.html',
  styleUrls: ['./przestepca-detail.component.css']
})
export class PrzestepcaDetailComponent implements OnInit {
  @Input() przId: any;
  przestepcaDoc: AngularFirestoreDocument<Przestepca>;
  przestepca: Observable<Przestepca>;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.przestepcaDoc = this.afs.doc('Przestepca/' + this.przId);
    this.przestepca = this.przestepcaDoc.valueChanges();
  }

}

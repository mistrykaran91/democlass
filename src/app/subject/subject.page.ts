import { Component} from '@angular/core';
import { Router } from '@angular/router';

import { IonItemSliding } from '@ionic/angular';
import { Subject } from '../interfaces/subject.interface';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.page.html',
  styleUrls: ['./subject.page.scss']
})
export class SubjectPage {
  subjects: Subject[];

  constructor(private subjectService: SubjectService, private router: Router) {}

  ionViewWillEnter() {
    this.subjectService.subjects$.subscribe(subjects => {
      this.subjects = subjects;
    });
  }

  onEdit(subjectId: number, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(['/', 'subject', 'edit', subjectId]);
  }
}

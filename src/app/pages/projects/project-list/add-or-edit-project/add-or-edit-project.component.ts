import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {LoadingController, ModalController} from '@ionic/angular';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-or-edit-project',
  templateUrl: './add-or-edit-project.component.html',
  styleUrls: ['./add-or-edit-project.component.scss'],
})
export class AddOrEditProjectComponent implements OnInit {

  @ViewChild('projectForm') projectForm: NgForm;

  @Input() isNew = true;

  constructor(
    public modalController: ModalController,
    public loadingController: LoadingController,
  ) {
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    console.log(this.projectForm);
  }

  async saveProject() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true,
    });
  }

}

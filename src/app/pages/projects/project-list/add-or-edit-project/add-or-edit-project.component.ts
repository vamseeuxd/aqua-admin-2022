import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {LoadingController, ModalController, ToastController} from '@ionic/angular';
import {NgForm} from '@angular/forms';
import {addDoc, collection, doc, Firestore, updateDoc} from '@angular/fire/firestore';

@Component({
  selector: 'app-add-or-edit-project',
  templateUrl: './add-or-edit-project.component.html',
  styleUrls: ['./add-or-edit-project.component.scss'],
})
export class AddOrEditProjectComponent implements OnInit {

  @ViewChild('projectForm') projectForm: NgForm;

  @Input() isNew = true;
  @Input() data: any;

  constructor(
    public modalController: ModalController,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public firestore: Firestore,
  ) {
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    if (this.isNew === false) {
      this.projectForm.resetForm(this.data);
    }
    // console.log(this.projectForm);
  }

  async saveProject(projectForm: NgForm) {
    if (this.isNew) {
      await this.addProject(projectForm);
    } else {
      await this.updateProject(projectForm);
    }
  }


  async updateProject(projectForm: NgForm): Promise<any> {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      spinner: 'bubbles',
    });
    await loading.present();
    try {
      const docRef = doc(this.firestore, `projects/${this.data.id}`);
      await updateDoc(docRef, projectForm.value);
      await loading.dismiss();
      const toast = await this.toastController.create({
        message: 'Project Updated Successfully',
        duration: 2000
      });
      await toast.present();
      projectForm.resetForm({});
      await this.modalController.dismiss();
    } catch (e) {

      const toast = await this.toastController.create({
        message: 'Technical Error while Updating the Project',
        duration: 2000
      });
      await toast.present();
      await loading.dismiss();
    }
  }

  async addProject(projectForm: NgForm): Promise<any> {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();
    try {
      await addDoc(collection(this.firestore, 'projects'), projectForm.value);
      projectForm.resetForm({});
      await this.modalController.dismiss();
      await loading.dismiss();
    } catch (e) {
      const toast = await this.toastController.create({
        message: 'Technical Error while Adding the Project',
        duration: 2000
      });
      await toast.present();
      await loading.dismiss();
    }
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

}

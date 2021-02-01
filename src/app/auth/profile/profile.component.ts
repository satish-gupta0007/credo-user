import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, Platform, AlertController } from '@ionic/angular';
import { ChangePasswordComponent } from '../change-password/change-password.component';
// import { Keyboard } from '@ionic-native/keyboard/ngx';
// import { AuthService } from '../../../shared/auth/auth.service';
// import { MainService } from 'src/shared/main/main.service';
// import { constants } from 'src/shared/constants';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  // isIos:any = false;
  // schoolName:any;
  // schoolEmail:any;
  // schoolContact:any;
  // schoolAddress:any;
  // schoolImage:any;
  // appVersion: any;
  constructor(    
    // public navCtrl: NavController,
    // public modelCtrl: ModalController,
    // public plt  : Platform,
    // public Keyboard: Keyboard,
    // public alrtCtrl : AlertController,
    // public auth : AuthService,
    // public mainService : MainService
    ) {
    //     if (this.plt.is('ios')) {
    //       this.isIos = true;
    //     }
    // this.fetchSchoolDetails();
     }

  ngOnInit() {
    // this.appVersion = this.mainService.appVersion
  }

  // onBackClick() {
  //   this.navCtrl.back();
  // }

  // async openChangePassword() {
  //   const modal = await this.modelCtrl.create({
  //     component: ChangePasswordComponent
  //   });
  //   await modal.present();
  // }

  // async logoutClick() {
  //   const alert = await this.alrtCtrl.create({
  //     // header: 'Focus',
  //     message: 'Are you sure you want to logout?',
  //     cssClass: 'logout-alert',
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         cssClass: 'cancel-btn',
  //         handler: () => {
  //           return false;
  //         }
  //       }, {
  //         text: 'Logout',
  //         cssClass: 'ok-btn',
  //         handler: () => {
  //           this.auth.logout();
  //           this.navCtrl.navigateRoot(['/auth/login'])
  //         }
  //       }
  //     ]
  //   });
  //   await alert.present();
    
  // }

  // fetchSchoolDetails() {
  //   const userData = this.auth.getUser();
  //   this.schoolName = userData.SchoolName;
  //   this.schoolEmail = userData.Email;
  //   this.schoolContact = userData.SchoolNumber;
  //   this.schoolAddress = userData.Address;
  //   this.schoolImage = userData.SchoolImage ? constants.IMAGE_URL + userData.SchoolImage : '';
  // }

  // onEnter(e){
  //   this.Keyboard.hide();
  // }

}

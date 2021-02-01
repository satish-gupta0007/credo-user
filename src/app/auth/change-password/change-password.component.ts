import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavController, Platform } from '@ionic/angular';
// import { Keyboard } from '@ionic-native/keyboard/ngx';
// import { APIconstants } from 'src/shared/constants';
// import { HttpService } from 'src/shared/http/http.service';
// import { MainService } from 'src/shared/main/main.service';
// import { AuthService } from 'src/shared/auth/auth.service';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  // form;
  // changePasswordForm: FormGroup;
  // changePasswordFormSubmited: any;
  // mismatchedPasswords = false;

  // isIOS :any = false;
  // userDetails: any;
  constructor(
    // public modelCtrl: ModalController,
    // public formBuilder: FormBuilder,
    // public navCtrl: NavController,
    // public plt : Platform,
    // public http: HttpService,
    // public mainService: MainService,
    // public auth : AuthService,
    // public keyboard : Keyboard
    
  ) { 
    // if(this.plt.is('ios')== true){
    //   this.isIOS = true;
    // }
    // this.userDetails = this.auth.getUser();
  }

  

  ngOnInit() {
    // this.changePasswordForm = this.formBuilder.group({
    //   oldPassword: ['', Validators.required],
    //   newPassword: ['', Validators.required],
    //   confirmPassword: ['', Validators.required]
    // }); 
  }

  // changePasswordClick() {
  //   this.changePasswordFormSubmited = true;
  //   this.mismatchedPasswords = false;
  //   let formvalues: any = this.changePasswordForm.value;
  //   if (this.changePasswordForm.valid) {
  //     if (formvalues.newPassword != formvalues.confirmPassword) {
  //       this.mismatchedPasswords = true;
  //     } else {
  //       this.mainService.showLoader();
  //       let params = new FormData();
  //       params.append('OldPassword', formvalues.oldPassword);
  //       params.append('NewPassword', formvalues.newPassword);
  //       params.append('ConfirmPassword', formvalues.confirmPassword);
  //       params.append('current_userid', this.userDetails.SId);
  //       this.http.postApiData(APIconstants.CHANGE_PASS, params)
  //         .subscribe(data => {
  //           this.mainService.dismissLoading();
  //           let res: any = data
  //           if (res.status === true) {
  //             this.modelCtrl.dismiss();
  //             this.mainService.showToast(res.message);
  //           } else {
  //             this.mainService.showToast(res.message);
  //           }
  //         }, err => {
  //           this.mainService.showToast('Something went wrong.try again.');
  //         })
  //     }
  //   } else {
  //     this.mainService.showToast('Email and password is required');
  //     return false;
  //   }
  // }

  // dismissModel() {
  //   this.modelCtrl.dismiss();
  // }

  // onEnter($event) {
  //   this.keyboard.hide();
  // }

  // onPress() {
  //   this.mismatchedPasswords = false;
  // }

}

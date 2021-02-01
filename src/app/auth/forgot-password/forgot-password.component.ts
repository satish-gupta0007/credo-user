import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Keyboard } from '@ionic-native/keyboard/ngx';
// import { APIconstants } from 'src/shared/constants';
// import { HttpService } from 'src/shared/http/http.service';
// import { MainService } from 'src/shared/main/main.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {

  // form;
  // forgotPasswordForm: FormGroup;
  // forgotPasswordFormSubmited: any;

  // isIOS: any = false;
  constructor(
    public modelCtrl: ModalController,
    // public formBuilder: FormBuilder,
    // public plt: Platform,
    // public http: HttpService,
    // public mainService: MainService,
    // public keyboard : Keyboard

  ) {
    // if (this.plt.is('ios') == true) {
    //   this.isIOS = true;
    // }
   }

  ngOnInit() {
    // this.forgotPasswordForm = this.formBuilder.group({
    //   email: ['', [Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required]]
    // });
  }

  dismissModel() {
    this.modelCtrl.dismiss();
  }

  // forgotPasswordClick() {
  //   this.forgotPasswordFormSubmited = true;
  //   let formvalues: any = this.forgotPasswordForm.value;
  //   if (this.forgotPasswordForm.valid) {
  //     this.mainService.showLoader();
  //     let params = new FormData();
  //     params.append('SchoolEmail', formvalues.email);
  //     this.http.postApiData(APIconstants.FORGOT_PASS, params)
  //       .subscribe(data => {
  //         this.mainService.dismissLoading();
  //         let res: any = data
  //         if (res.status === true) {
  //           this.modelCtrl.dismiss();
  //           this.mainService.showToast(res.message);
  //         } else {
  //           this.mainService.showToast(res.message);
  //         }
  //       }, err => {
  //         this.mainService.showToast('Something went wrong.try again.');
  //       })
  //   } else {
  //     return false;
  //   }
  // }

  // onEnter($event){
  //   this.keyboard.hide();
  // }
}

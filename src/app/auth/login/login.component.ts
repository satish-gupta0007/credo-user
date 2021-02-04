import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController, IonRouterOutlet, Platform,ToastController} from '@ionic/angular';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
// import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { MainService } from 'src/shared/main/main.service';
// import { Keyboard } from '@ionic-native/keyboard/ngx';
// import { HttpService } from '../../../shared/http/http.service';
// import { APIconstants } from '../../../shared/constants';
// import { AuthService } from '../../../shared/auth/auth.service';
// import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  lastTimeBackPress = 0;
  timePeriodToExit = 2000;
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
  form;
  loginForm: FormGroup;
  loginFormSubmited: any;

  constructor(
    public modelCtrl: ModalController,
    public formBuilder: FormBuilder,
    public navCtrl: NavController,
    public plt: Platform,
    public router: Router,
    private toastController: ToastController
    // public mainService: MainService,
    // public keyboard: Keyboard,

    // public http: HttpService,

    // public auth : AuthService

  ) {
    
    this.plt.ready().then(() => {
      document.addEventListener('backbutton', async () => {
        console.log('called.login page',this.router.url)
      
        if (this.router.url == '/auth/login') {
          if (new Date().getTime() - this.lastTimeBackPress >= this.timePeriodToExit) {
            this.lastTimeBackPress = new Date().getTime();
            // this.mainService.showToast('press again back button to exit app.')
            
          } else {
            navigator['app'].exitApp();
          }
        }
      })
    })
  }



  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required]],
      password: ['', Validators.required]
    });
  }

  async openForgotPassword() {
    const modal = await this.modelCtrl.create({
      component: ForgotPasswordComponent
    });
    await modal.present();
  }

 async signInClick() {
//NEW CODE
const toast = await this.toastController.create({
  color: 'light',
  duration: 2000,
  keyboardClose:true,
  message: 'Login Successfull!!',
});
await toast.present();
this.router.navigate(['/home']);
    //OLD CODE 
  //   this.loginFormSubmited = true;
  //   let formvalues: any = this.loginForm.value;
  //   if (this.loginForm.valid) {
  //     this.mainService.showLoader();
  //     let params = new FormData();
  //     params.append('SchoolEmail', formvalues.email);
  //     params.append('SchoolPassword', formvalues.password);
  //     this.http.postApiData(APIconstants.SIGNIN,params)
  //     .subscribe(data=>{
  //       debugger
  //       let res:any = data
  //       if (res.scholldata){
  //         this.mainService.dismissLoading();
  //         this.auth.login(res.scholldata);
  //         this.mainService.showToast(res.message)
  //         this.navCtrl.navigateRoot(['/tabs'])
  //       }else{
  //         this.mainService.showToast(res.message);
  //       }
  //     },err=>{
  //         this.mainService.showToast('Something went wrong.try again.');
  //     })
      
  //   } else {
  //     this.mainService.showToast('Email and password is required');
  //     return false;
  //   }
  }

  // onEnter(e){
  //   debugger
  //   this.keyboard.hide();
  // }

}
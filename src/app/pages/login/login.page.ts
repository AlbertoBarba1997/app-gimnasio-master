import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private utilities: UtilitiesService,
    private apiService: ApiService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      dni: ['', Validators.required],
      contraseña: ['', Validators.required]
    });
  }

  public submitForm(): void {
    this.utilities.showLoading('Iniciando...');
    this.apiService.login(this.form.value).subscribe((response) => {
      this.utilities.dismissLoading();
      this.apiService.setUsuario(response.usuario)
      this.navCtrl.navigateRoot('/tabs')
    }, (err) => {
      console.log(err);
      this.utilities.dismissLoading();
      if (err.error.message) {
        this.utilities.showToast(err.error.message);
      } else {
        this.utilities.showToast('Ha ocurrido un error al hacer el login');
      }
    });
  }

}

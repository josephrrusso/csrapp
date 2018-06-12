// src/app/formdata-upload/base64-upload.component.ts
import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {ImageService} from '../../providers/image-service';
import {AuthHttp, JwtHelper, tokenNotExpired} from 'angular2-jwt';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'base64-upload',
  templateUrl: '../../pages/users/base.html'
})
export class BasePage extends ProtectedPage {
  form: FormGroup;
  loading: boolean = false;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder,
  	public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public imageService: ImageService,
    private camera: Camera) {

  	super(navCtrl, navParams, storage);

    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      file: null
    });
  }

  getImage() {
  	const options: CameraOptions = {
		  quality: 50,
		  targetWidth: 100,
      targetHeight: 100,
		  destinationType: this.camera.DestinationType.DATA_URL,
		  encodingType: this.camera.EncodingType.JPEG,
		  mediaType: this.camera.MediaType.PICTURE
		}

		this.camera.getPicture(options).then((imageData) => {
		  // imageData is either a base64 encoded string or a file URI
		  // If it's base64:
		  let base64Image = 'data:image/jpeg;base64,' + imageData;
		  /*
		  console.log(base64Image)
		  this.form.get('file').setValue({
        filename: 'test.jpg',
        filetype: 'jpg',
        value: imageData
      })
      */
		}, (err) => {
		 // Handle error
		});

		/*
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
    }, (err) => {
      console.log(err);
      this.presentToast(err);
    });
    */
  }

  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.get('file').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        })
      };
    }
  }

  onSubmit() {
    const formModel = this.form.value;
    console.log(formModel)

    this.imageService.send(formModel)
      .then()
      .catch(e => console.log("image error", e));

    /*
    this.loading = true;
    // In a real-world app you'd have a http request / service call here like
    // this.http.post('apiUrl', formModel)
    setTimeout(() => {
      console.log(formModel);
      alert('done!');
      this.loading = false;
    }, 1000);
    */
  }

  clearFile() {
    this.form.get('avatar').setValue(null);
    this.fileInput.nativeElement.value = '';
  }
}

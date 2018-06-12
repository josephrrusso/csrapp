import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController, IonicPage, NavParams, MenuController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-home',
  providers: [ FilePath ],
  templateUrl: '../../pages/users/image.html'
})
export class ImagePage {

  imageURI:any;
  imageFileName:any;

  constructor(
    public navCtrl: NavController,
    private transfer: FileTransfer,
    private camera: Camera,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private filePath: FilePath
  ) {}

  getImage() {
    const options: CameraOptions = {
      
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
      /*
      quality: 50,
      targetWidth: 100,
      targetHeight: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
      */
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
      alert(this.imageURI)
      this.convertIfAndroidGalleryImage();
    }, (err) => {
      console.log(err);
      this.presentToast(err);
    });
  }

  convertIfAndroidGalleryImage() {
    // android bug, sometimes returns an image starting with content: or /storage/ which won't upload. 
    // Convert to a filepath.
    if(this.imageURI.startsWith('content') || this.imageURI.startsWith('/storage/')) {
        if(this.imageURI.startsWith('/storage/')) {
            this.imageURI = 'file://'+this.imageURI;
        }
        this.filePath.resolveNativePath(this.imageURI).then(filePath => {
            this.imageURI = filePath;
            alert(filePath)

        }).catch(err => { alert(JSON.stringify(err)) });
    }
  }

  getImageComputer() {
    this.imageURI = "/home/nate/Downloads/20170901_143150.jpg";
  }

  uploadFile() {
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();

    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: 'ionicfile',
      fileName: '20170901_143150.jpg',
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: { "Authorization": "Bearer "+"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsImV4cCI6MTUxODA3NDk4N30.xNqSWyW2w-mwDf8aU2-nT5xMyV_7tlykaIURN96WwTw" }
    }

    // https://stackoverflow.com/questions/43470478/filetransfer-returns-error-with-all-properties-null

    fileTransfer.upload(this.imageURI, 'http://affordableai.com/api/v1/users/image', options)
      .then((data) => {
      alert(" Uploaded Successfully");
      this.imageFileName = "http://affordableai.com/img.jpg"
      loader.dismiss();
      this.presentToast("Image uploaded successfully");
    }, (err) => {
      alert(JSON.stringify(err));
      alert("nope")
      loader.dismiss();
      this.presentToast(err);
    });
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 6000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { PhotoService } from '../services/photo.service';

//esempio di interpolazione
@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss']
})
export class Tab2Page {

  //interpolazione
  title = "Photo Gallery";
  //color = "red";
  getTitle(): string{
    return this.title;
  }

  //fotocoamera
  currentImage: any;
  constructor(public photoService: PhotoService) {  }

  ngOnInit() {
    this.photoService.loadSaved();
  }
}

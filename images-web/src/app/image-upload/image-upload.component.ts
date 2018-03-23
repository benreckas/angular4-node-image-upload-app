import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageService } from '../services/image.service'

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})

export class ImageUploadComponent implements OnInit {
  // Properties
  images: Array<File>;
  errorMessage: string;

  // Methods
  constructor(
    private imageService: ImageService,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  upload() {
    this.imageService.uploadImages(this.images).then(result => {
      this.activeModal.close(true);
    }, (error) => {
      this.errorMessage = 'An error has occured. Please try again.';
    });
  }

  fileChangeEvent(fileInput: any) {
    this.images = <Array<File>> fileInput.target.files;
  }

}

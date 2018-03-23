import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';

import { AuthorizationService } from './authorization.service';
import { Image } from '../models/image';

@Injectable()
export class ImageService {
  // Properties

  // Methods
  constructor(
    private authorizationService: AuthorizationService,
    private authHttp: AuthHttp) { }

  getImages() {
    return this.authHttp.get('http://localhost:3001/images').map(res => res.json());
  }

  deleteImage(id: string) {
    return this.authHttp.delete(`http://localhost:3001/images/image${id}`).map(res => res.json());
  }

  updateImage(image: Image) {
    return this.authHttp.put('http://localhost:3001/images/image', image).map(res => res.json());
  }

  uploadImages(files: Array<File>) {
    return new Promise((resolve, reject) => {
      const formData: any = new FormData();
      const xhr = new XMLHttpRequest();

      for (let i = 0; i < files.length; i++) {
        formData.append('images', files[i]);
      }

      // xhr = XML HTTP Request - Vanilla Ajax Call
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private http: HttpClient) { }


    inputFileChange(event){
      if(event.target.files && event.target.files[0]){
        const foto= event.target.files[0];

        const formData = new FormData();
        formData.append('foto',foto);

        this.http.post('http://localhost:8080/api/v1/fotos/1',formData).subscribe(resposta=>console.log('Upload OK.'));
      }
    }


  ngOnInit() {
  }

}

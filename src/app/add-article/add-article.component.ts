import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  private addForm: FormGroup;
  private result: number;
  private sentArticleGuid: string;
private received: boolean;

  constructor(private formBuilder: FormBuilder, private articleService: ArticleService) {
    this.result = 0;
    this.sentArticleGuid = '';
    this.received = false;
  }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      value: ['', Validators.maxLength(200)]
    });
  }

  send() {
    const formValues = this.addForm.value;
    this.result = 0;
    this.received = false;
    this.sentArticleGuid = '';
    this.articleService.send(formValues.value).subscribe(d => { 
      this.sentArticleGuid = <string>d; 
      setTimeout(() => {this.articleService.getResult(this.sentArticleGuid).subscribe(d2 => {
         this.result = Number.parseInt(d2); 
         this.received = true;
        })}, 5000);
    });
  }
}

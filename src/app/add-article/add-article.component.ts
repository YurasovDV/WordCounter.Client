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

  constructor(private formBuilder: FormBuilder, private articleService: ArticleService) {
    this.result = 0;
    this.sentArticleGuid = '';
  }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      value: ['', Validators.maxLength(200)]
    });
  }

  send() {
    const formValues = this.addForm.value;
    this.articleService.send(formValues.value['value']).subscribe(d => this.sentArticleGuid = <string>d );
  }
}

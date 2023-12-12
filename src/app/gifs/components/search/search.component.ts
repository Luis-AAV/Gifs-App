import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search',
  template: `
    <h4>Buscar: </h4>
    <input type="text"
      class="form-control"
      placeholder="Buscar Gifs.."
      (keyup.enter)="searchTag()"
      #textTagInput
    >
  `
})

export class SearchComponent {

  @ViewChild('textTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor( private gifsService: GifsService){}

  searchTag( ){

    const newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';

  }

}

import { Component } from '@angular/core';

//esempio di interpolazione
@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss']
})
export class Tab2Page {

  title = "Photo Gallery";
  getTitle(): string{
    return this.title;
  }

}

/*
@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss']
})
export class AppComponent {
  title = "Photo Gallery";
  getTitle(): string{
    return this.title;
  }
}
*/

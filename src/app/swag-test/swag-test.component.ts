import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import  SwaggerUI from 'swagger-ui';
// import { SwaggerUIBundle } from 'swagger-ui-dist';



@Component({
  selector: 'app-swag-test',
  templateUrl: './swag-test.component.html',
  styleUrls: ['./swag-test.component.css']
})
export class SwagTestComponent implements OnInit {
  public swaggerUrl = 'https://petstore.swagger.io/v2/swagger.json';
  @ViewChild('customersapidocumentation', { static: true })
  custApiDocElement: ElementRef | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    const ui = SwaggerUI({
      url: this.swaggerUrl,
      domNode: this.custApiDocElement?.nativeElement,
    });
  }

}

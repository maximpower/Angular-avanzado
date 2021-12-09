import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo! : String;
  public titleSubs$!: Subscription;

  constructor( private router: Router ) {
    this.titleSubs$ = this.getArgumentosRuta();
  }
  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
    // throw new Error('Method not implemented.');
  }

  getArgumentosRuta(): Subscription {
    return this.router.events
      .pipe(
        filter<any>( event => event instanceof ActivationEnd ),
        filter( (event : ActivationEnd) => event.snapshot.firstChild === null ),
        map( (event : ActivationEnd) => event.snapshot.data ),
      )
      .subscribe( ({ titulo }) => {
        this.titulo = titulo;
        document.title = `Adminpro - ${ titulo }`
      })
  }

}

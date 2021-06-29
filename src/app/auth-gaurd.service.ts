import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

export class authGaurd implements CanActivate {
  public display:boolean = false;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return !this.display
  }
}

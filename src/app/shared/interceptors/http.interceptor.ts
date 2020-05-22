import { Injectable } from '@angular/core';
import {
    HttpErrorResponse,
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpInterceptor,
    HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from '../../shared/services/data.service';

@Injectable()
export class HTTPInterceptor implements HttpInterceptor {
    private requests: HttpRequest<any>[] = [];

    constructor(private dataService: DataService) { }

    removeRequest(req: HttpRequest<any>) {
        const i = this.requests.indexOf(req);
        if (i >= 0) {
            this.requests.splice(i, 1);

        }
        this.dataService.loading = false;
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.dataService.loading = true;
        this.requests.push(req);
        return Observable.create(observer => {
            const subscription = next.handle(req)
                .subscribe(
                    event => {
                        if (event instanceof HttpResponse) {
                            this.removeRequest(req);
                            observer.next(event);
                        }
                    },
                    err => {
                        this.removeRequest(req); observer.error(err);
                    },
                    () => { this.removeRequest(req); observer.complete(); });
            return () => {
                this.removeRequest(req);
                subscription.unsubscribe();
            };
        });
    }

    isEmptyObject(obj) {
        return (obj && (Object.keys(obj).length === 0));
    }
}




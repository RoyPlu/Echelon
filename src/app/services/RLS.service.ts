import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';

const API_KEY = "QDQOV7OV1J0OOKKSPUU7SZDJHXLRPCLB";

const headers = new Headers({
    'Authorization': API_KEY
});

const options = new RequestOptions({
    headers: headers
});


@Injectable()
export class RLSService {
    constructor(private http: Http) { }

    getProfile(){

        var unique_id = 76561198043101035;

        var platform_id = 1;

        return this.http.get("https://api.rocketleaguestats.com/v1/player?unique_id=76561198043101035&platform_id=1", options).map(res => res.json());
    }
}
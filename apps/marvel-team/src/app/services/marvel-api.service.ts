import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";



@Injectable({ providedIn: 'root' })
export class MarvelApiService {

  constructor(private apiService: ApiService) {

  }

  public fetchMovies () {
      return this.apiService.get(`/v1/public/comics`)
  }
}

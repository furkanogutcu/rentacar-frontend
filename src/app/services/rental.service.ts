import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from '../models/entities/rental';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { SingleResponseModel } from '../models/responseModels/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44372/api/';
  constructor(private httpClient: HttpClient) { }

  getRentals(): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + 'rentals/getdetails';
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  CheckIfCanCarBeRentedNow(carId: number): Observable<SingleResponseModel<boolean>> {
    let newPath = this.apiUrl + 'rentals/checkifcancarberentednow?carid=' + carId;
    return this.httpClient.get<SingleResponseModel<boolean>>(newPath);
  }

  checkIfAnyReservationsBetweenSelectedDates(carId: number, rentDate: string, returnDate: string): Observable<SingleResponseModel<boolean>> {
    let newPath = this.apiUrl + 'rentals/checkifanyreservationsbetweenselecteddates?carid=' + carId + '&rentdate=' + rentDate + '&returndate=' + returnDate;
    return this.httpClient.get<SingleResponseModel<boolean>>(newPath);
  }
}

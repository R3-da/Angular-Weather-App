import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private baseUrl = 'https://localhost:5001/api';

  constructor(private http: HttpClient) {}

  addWeather(cityName: string, weatherData: unknown): Observable<unknown> {
    return this.http.post(`${this.baseUrl}/weather/add-weather/${cityName}`, weatherData);
  }

  deleteWeatherData(weatherId: number): Observable<unknown> {
    return this.http.delete(`${this.baseUrl}/weather/delete-weather/${weatherId}`);
  }

  updateWeatherData(weatherId: number, weatherData: unknown): Observable<unknown> {
    return this.http.put(`${this.baseUrl}/weather/update-weather/${weatherId}`, weatherData);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {RespuestaMultiple, Usuario} from '../models';
import { ManagerService } from './Manager.Service';

@Injectable({ providedIn: 'root' })
export class RespuestaMultipleService {
  public defaultHeaders = new HttpHeaders();

  constructor(
    private http: HttpClient,
    private manager: ManagerService
  ) { }

  public listarRespuestaMultiples(): Observable<RespuestaMultiple[]> {
    // Params
    let params = new HttpParams();
    //ALGO MAS AQUI

    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.get<RespuestaMultiple[]>(`${this.manager.API_URL}/respuestaMultiple`, { params, headers } );

  }

  public crearRespuestaMultiple(respuestaMultiple: RespuestaMultiple): Observable<any> {

    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.post<RespuestaMultiple>(`${this.manager.API_URL}/respuestaMultiple`, respuestaMultiple, { headers } );

  }

  public obtenerRespuestaMultiple(idRespuestaMultiple: number): Observable<RespuestaMultiple> {


    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.get<RespuestaMultiple>(`${this.manager.API_URL}/respuestaMultiple/${idRespuestaMultiple}`, { headers } );

  }

  public actualizarRespuestaMultiple(idRespuestaMultiple: number, respuestaMultiple: RespuestaMultiple): Observable<any> {
    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');

    // Request
    return this.http.put<RespuestaMultiple>(`${this.manager.API_URL}/respuestaMultiple/${idRespuestaMultiple}`, respuestaMultiple, { headers } );

  }

  public eliminarRespuestaMultiple(idRespuestaMultiple: number): Observable<any> {


    // Headers
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');


    // Request
    return this.http.delete(`${this.manager.API_URL}/respuestaMultiple/${idRespuestaMultiple}`, { headers } );

  }

}

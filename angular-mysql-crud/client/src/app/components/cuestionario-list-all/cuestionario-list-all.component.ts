import {Component, HostBinding, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { CuestionarioService } from '../../services/Cuestionario.Service';
@Component({
  selector: 'app-cuestionario-list-all',
  templateUrl: './cuestionario-list-all.component.html',
  styleUrls: ['./cuestionario-list-all.component.css']
})
export class CuestionarioListAllComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  cuestionarios: any = [];

  constructor(private cuestionarioService: CuestionarioService, private router: Router ) {
    localStorage.setItem('rout', router.url) ;
  }

  ngOnInit(): void {
    this.getCuestionarios();
  }

  getCuestionarios() {
    this.cuestionarioService.listarCuestionarios(null).subscribe(
      res => {
        this.cuestionarios = res;
        console.log(this.cuestionarios);
      },
      err => {
        console.log(err);

      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {
  total=0
  pedidos=<any>[];
  constructor(private pedidoService: PedidosService) { }
//Cambiar por la mesa dinámica
  ngOnInit(): void {
    this.pedidoService.getPedidos("mesa_10")
     .subscribe(
      res=>{
        this.pedidos=res
        this.total=0
    console.log(this.pedidos)
    this.pedidos.forEach(element => {
      let precio=element.precio
      let cantidad=element.cantidad

      this.total+=(parseInt(precio)*parseInt(cantidad))
    });
      
      
      
      },
      err=>console.log(err)
    )
    
  }
  pay(){
    alert("En un momento llegará un mesero a cobrar")
  }
  getWaiter(){
    alert("En un momento llega tu mesero")
  }

  
}
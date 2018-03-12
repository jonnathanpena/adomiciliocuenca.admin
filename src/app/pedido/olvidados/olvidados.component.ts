import { Component, ViewEncapsulation} from '@angular/core';
import {NgbProgressbarConfig, NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'ngbd-modal',
	templateUrl: './olvidados.component.html',
	encapsulation: ViewEncapsulation.None
})
export class OlvidadosComponent{
	closeResult: string;
	
  constructor(private modalService: NgbModal) {} 

  open2(content) { 
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
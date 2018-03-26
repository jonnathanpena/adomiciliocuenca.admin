import { Component} from '@angular/core';
import {NgbProgressbarConfig, NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
	templateUrl: './comentariosSugerencias.component.html'
})
export class ComentariosSugerenciasComponent{
	
  constructor() {} 

  recentcomments: Object[] = [{
    image: 'assets/images/users/1.jpg',
    name: 'James Anderson',
    comment: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.',    
    date: '26 Marzo 2018',
    status: 'Pending',
    labelcolor: 'label-light-info'  
}, {
    image: 'assets/images/users/2.jpg',
    name: 'Michael Jorden',
    comment: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.',    
    date: '25 Marzo 2018',
    status: 'Approved',
    labelcolor: 'label-light-success'  
}, {
    image: 'assets/images/users/4.jpg',
    name: 'Johnathan Doeting',
    comment: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.',    
    date: '24 Marzo 2018',
    status: 'Rejected',
    labelcolor: 'label-light-danger'  
}, {
    image: 'assets/images/users/5.jpg',
    name: 'James Anderson',
    comment: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.',    
    date: '23 Marzo 2018',
    status: 'Pending',
    labelcolor: 'label-light-info'  
}];

}
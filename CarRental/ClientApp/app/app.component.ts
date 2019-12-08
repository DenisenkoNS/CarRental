import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Car } from './car';
import { User } from './user';
import { Order } from './Order';

@Component({
	selector: 'app',
	templateUrl: './app.component.html',
	providers: [DataService]
})
export class AppComponent implements OnInit {

	car: Car = new Car();   
	cars: Car[];                
	user: User = new User();
	users: User[];
	order: Order = new Order();
	orders:Order[]
	carshow: boolean = false;
	usershow: boolean = false;
	ordershow: boolean = true;
	orderAddShow: boolean = true;
	userModalshow: boolean = false;
	orderModalShow: boolean = false;
	searchFilter: number;
	userName: string;
	

	constructor(private dataService: DataService) { }

	ngOnInit() {
		this.loadCars();     
		this.loadUsers();
		this.loadOrders();
	}
	loadOrders() {
		this.dataService.getOrders().subscribe((data:Order[])=>this.orders=data)
	}
	loadUsers() {
		this.dataService.getUsers().subscribe((data: User[]) => this.users=data)
	}

	loadCars() {
		this.dataService.getCars().subscribe((data: Car[]) => this.cars = data);
	}
	saveUser() {
			this.dataService.createUser(this.user)
			.subscribe((data: User) => this.users.push(data));
		
		this.cancelUser();
		this.usershow = false;
		this.carshow = false;
		this.userModalshow = false;
		this.orderModalShow = true;
	}
	
	saveOrder() {
		if (this.order.id == null) {
			this.dataService.createOrder(this.order)
				.subscribe((data:Order) => this.orders.push(data));
		} else {
			this.dataService.updateOrder(this.order)
				.subscribe(data => this.loadOrders());
		}
		this.cancelOrder();
		this.usershow = false;
		this.carshow = false;
		this.ordershow = true;
	}
	
	editOrder(p: Order) {
		this.order = p;
	}
	cancelOrder() {
		this.order = new Order();
		this.orderModalShow = false;
		this.ordershow = true;
		
		
	}
	cancelUser() {
		this.user = new User();
		
	}
	deleteOrder(p: Order) {
		this.dataService.deleteOrder(p.id)
			.subscribe(data => this.loadOrders());
	}
	
	showUsers() {
		this.user = new User();
		this.usershow = true;
		this.carshow = false;
		this.ordershow = false;
	}
	showCars() {
		this.car = new Car();
		this.carshow = true;
		this.usershow = false;
		this.ordershow = false;
	}
	showOrder() {
		this.order = new Order();
		this.carshow = false;
		this.usershow = false;
		this.ordershow = true;
	}
	showUModal() {
		this.user = new User();
		this.userModalshow = true;
		this.ordershow = false;
	}
	closeModal() {
		this.userModalshow = false;
		this.orderModalShow = false;
		this.ordershow = true;
	}
	
	
}
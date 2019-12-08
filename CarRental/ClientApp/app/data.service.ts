import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './car';
import { User } from './user';
import {Order}from './order'

@Injectable()
export class DataService {

	private carUrl = "/api/cars";
	private userUrl = "/api/users"
	private orderUrl="/api/orders"
	constructor(private http: HttpClient) {
	}
	getOrders() {
		return this.http.get(this.orderUrl);
	}
	getUsers() {
		return this.http.get(this.userUrl);
	}
	createUser(user: User) {
		return this.http.post(this.userUrl, user);
	}
	getCars() {
		return this.http.get(this.carUrl);
	}
	createOrder(order: Order) {
		return this.http.post(this.orderUrl, order);
	}
	updateOrder(order: Order) {

		return this.http.put(this.orderUrl + '/' + order.id, order);
	}
	deleteOrder(id: number) {
		return this.http.delete(this.orderUrl + '/' + id);
	}
}
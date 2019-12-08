var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Car } from './car';
import { User } from './user';
import { Order } from './Order';
var AppComponent = /** @class */ (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.car = new Car();
        this.user = new User();
        this.order = new Order();
        this.carshow = false;
        this.usershow = false;
        this.ordershow = true;
        this.orderAddShow = true;
        this.userModalshow = false;
        this.orderModalShow = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loadCars();
        this.loadUsers();
        this.loadOrders();
    };
    AppComponent.prototype.loadOrders = function () {
        var _this = this;
        this.dataService.getOrders().subscribe(function (data) { return _this.orders = data; });
    };
    AppComponent.prototype.loadUsers = function () {
        var _this = this;
        this.dataService.getUsers().subscribe(function (data) { return _this.users = data; });
    };
    AppComponent.prototype.loadCars = function () {
        var _this = this;
        this.dataService.getCars().subscribe(function (data) { return _this.cars = data; });
    };
    AppComponent.prototype.saveUser = function () {
        var _this = this;
        this.dataService.createUser(this.user)
            .subscribe(function (data) { return _this.users.push(data); });
        this.cancelUser();
        this.usershow = false;
        this.carshow = false;
        this.userModalshow = false;
        this.orderModalShow = true;
    };
    AppComponent.prototype.saveOrder = function () {
        var _this = this;
        if (this.order.id == null) {
            this.dataService.createOrder(this.order)
                .subscribe(function (data) { return _this.orders.push(data); });
        }
        else {
            this.dataService.updateOrder(this.order)
                .subscribe(function (data) { return _this.loadOrders(); });
        }
        this.cancelOrder();
        this.usershow = false;
        this.carshow = false;
        this.ordershow = true;
    };
    AppComponent.prototype.editOrder = function (p) {
        this.order = p;
    };
    AppComponent.prototype.cancelOrder = function () {
        this.order = new Order();
        this.orderModalShow = false;
        this.ordershow = true;
    };
    AppComponent.prototype.cancelUser = function () {
        this.user = new User();
    };
    AppComponent.prototype.deleteOrder = function (p) {
        var _this = this;
        this.dataService.deleteOrder(p.id)
            .subscribe(function (data) { return _this.loadOrders(); });
    };
    AppComponent.prototype.showUsers = function () {
        this.user = new User();
        this.usershow = true;
        this.carshow = false;
        this.ordershow = false;
    };
    AppComponent.prototype.showCars = function () {
        this.car = new Car();
        this.carshow = true;
        this.usershow = false;
        this.ordershow = false;
    };
    AppComponent.prototype.showOrder = function () {
        this.order = new Order();
        this.carshow = false;
        this.usershow = false;
        this.ordershow = true;
    };
    AppComponent.prototype.showUModal = function () {
        this.user = new User();
        this.userModalshow = true;
        this.ordershow = false;
    };
    AppComponent.prototype.closeModal = function () {
        this.userModalshow = false;
        this.orderModalShow = false;
        this.ordershow = true;
    };
    AppComponent = __decorate([
        Component({
            selector: 'app',
            templateUrl: './app.component.html',
            providers: [DataService]
        }),
        __metadata("design:paramtypes", [DataService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map
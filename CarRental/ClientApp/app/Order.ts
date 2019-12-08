import { User } from "./user";
import { Car } from "./car";

export class Order {
	constructor(
		public id?: number,
		public title?: string,
		public startRent?: Date,
		public endRent?: Date,
		public discription?: string,
		public userId?: number,
		public user?: User,
		public carId?: number,
		public car?:Car

	){ }
}
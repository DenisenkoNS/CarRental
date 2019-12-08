using CarRent.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace CarRental.Controllers
{
	[Route("/api/orders")]
	public class OrderController:Controller
	{
		
		CarRentContext db;
		public OrderController(CarRentContext context)
		{
			db = context;
		}
		[HttpGet]
		public IEnumerable<Order> Get()
		{
			var mas = db.Orders.ToList();
			foreach (var item in mas)
			{
				item.User = db.Users.FirstOrDefault(a => a.Id == item.UserId);
				item.Car = db.Cars.FirstOrDefault(a => a.Id == item.CarId);
			}
			return mas;
		}
		[HttpGet("{id}")]
		public Order Get(int id)
		{
			Order order = db.Orders.FirstOrDefault(x => x.Id == id);
			return order;
		}
		[HttpPost]
		public IActionResult Post([FromBody]Order order)
		{
			if (ModelState.IsValid)
			{
				order.User = db.Users.FirstOrDefault(a => a.Id == order.UserId);
				order.Car = db.Cars.FirstOrDefault(a => a.Id == order.CarId);
				db.Orders.Add(order);
				db.SaveChanges();
				return Ok(order);
			}
			return BadRequest(ModelState);
		}

		[HttpPut("{id}")]
		public IActionResult Put(int id, [FromBody]Order order)
		{
			if (ModelState.IsValid)
			{
				db.Update(order);
				db.SaveChanges();
				return Ok(order);
			}
			return BadRequest(ModelState);
		}

		[HttpDelete("{id}")]
		public IActionResult Delete(int id)
		{
			Order order = db.Orders.FirstOrDefault(x => x.Id == id);
			if (order != null)
			{
				db.Orders.Remove(order);
				db.SaveChanges();
			}
			return Ok(order);
		}
		


	}
}

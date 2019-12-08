using CarRent.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarRental.Controllers
{
	[Route("api/cars")]
	public class CarController:Controller
	{
		CarRentContext db;
		
		public CarController(CarRentContext context)
		{
			db = context;
			
			
		}
		[HttpGet]
		public IEnumerable<Car> Get()
		{
			return db.Cars.ToList();
		}
		[HttpGet("{id}")]
		public Car Get(int id)
		{
			Car car = db.Cars.FirstOrDefault(x => x.Id == id);
			return car;
		}
		



	}
}

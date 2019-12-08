using CarRent.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarRental.Controllers
{
	
	[Route("/api/users")]
	public class UserController:Controller
	{
		CarRentContext db;
		public UserController(CarRentContext context)
		{
			db = context;
			
		}
		[HttpGet]
		public IEnumerable<User> Get()
		{
			return db.Users.ToList();
		}
		[HttpGet("{id}")]
		public User Get(int id)
		{
			User user = db.Users.FirstOrDefault(x => x.Id == id);
			return user;
		}
		[HttpPost]
		public IActionResult Post([FromBody]User user)
		{
			if (ModelState.IsValid)
			{
				db.Users.Add(user);
				db.SaveChanges();
				return Ok(user);
			}
			return BadRequest(ModelState);
		}
	}
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CarRent.Models
{
	public class Order
	{
		[Key]
		public int Id { get; set; }
		[Required]
		public string Title { get; set; }
		[Required]
		public DateTime StartRent { get; set; }
		[Required]
		public DateTime EndRent { get; set; }

		public string Discription { get; set; }
		
		public int UserId { get; set; }
		public User User { get; set; }
		public int CarId { get; set; }
		public Car Car { get; set; }

	}
}

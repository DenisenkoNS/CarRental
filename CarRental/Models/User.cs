using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CarRent.Models
{
	public class User
	{
		public int Id { get; set; }
		[Required]
		public string Surname { get; set; }
		[Required]
		public string Name { get; set; }
		[Required]
		public DateTime Birthdate  { get; set; }
		[Required]
		[Column(TypeName = "varchar(9)")]
		public string NumberBY { get; set; }

	}
}

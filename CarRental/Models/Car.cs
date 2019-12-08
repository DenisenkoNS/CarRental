using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;


namespace CarRent.Models
{
	public class Car
	{
		[Key]
		public int Id { get; set; }
		[Required]
		public string Mark { get; set; }
		[Required]
		public string Model { get; set; }
		[Required]
		public string Type { get; set; }
		
		public int Released { get; set; }
		
		public string RegistryNumber { get; set; }
		public string CarImage { get; set; }

	}
}

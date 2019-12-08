using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarRent.Models
{
	public class CarRentContext: DbContext
	{
		
		public DbSet<Car> Cars { get; set; }
		public DbSet<User>Users { get; set; }
		public DbSet<Order> Orders { get; set; }
        public CarRentContext(DbContextOptions<CarRentContext> options) : base(options)
        {
            Database.EnsureCreated();

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(
            new User[]
            {
            new User {Id=1, Surname = "Денисенко", Name = "Никита", Birthdate = new DateTime(1998, 6, 24), NumberBY = "965lhk678" },
            new User {Id=2, Surname = "Дунько", Name = "Егор", Birthdate = new DateTime(1997, 10, 20), NumberBY = "911lhk678" },
            new User {Id=3, Surname = "Ложенков", Name = "Владислав", Birthdate = new DateTime(1997, 11, 17), NumberBY = "96tyhk678" },
            new User {Id=4, Surname = "Козел", Name = "Елена", Birthdate = new DateTime(1997, 11, 17), NumberBY = "96tyhk141" }
            }
            );

            modelBuilder.Entity<Car>().HasData(
            new Car[]
            {
            new Car {Id=1, Mark = "Audi", Model = "A8", Type = "F-class", RegistryNumber = "JH-786-AS", Released = 2017 },
            new Car {Id=2, Mark = "Bentley", Model = "Mulsanne", Type = "F-classr", RegistryNumber = "FK-569-JK", Released = 2016},
            new Car {Id=3, Mark = "Aston martin", Model = "Rapide", Type = "F-class", RegistryNumber = "MQ-451-SD", Released = 2015 },
            new Car {Id=4, Mark = "Porsche", Model = "Panamera", Type = "F-class", RegistryNumber = "VC-215-FG", Released = 2014 }
            });
            base.OnModelCreating(modelBuilder);
        }

    }
}

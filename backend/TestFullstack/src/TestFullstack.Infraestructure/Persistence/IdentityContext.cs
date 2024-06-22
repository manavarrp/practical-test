using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using TestFullstack.Domain.Entities.Customer;
using TestFullstack.Domain.Entities.Identity;
using TestFullstack.Domain.Entities.Master;

namespace TestFullstack.Infraestructure.Persistence
{
    public class IdentityContext : IdentityDbContext<User, Role, Guid>
    {
        public IdentityContext(DbContextOptions<IdentityContext> options): base(options) {}

        public DbSet<Occupation> Occupations { get; set; }
        public DbSet<Customer> Customers { get; set; }
    }
}

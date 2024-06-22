using Microsoft.AspNetCore.Identity;
using TestFullstack.Domain.Entities.Identity;

namespace TestFullstack.Infraestructure.Persistence.Seeds
{
    public static class RoleSeeder
    {
        public static async Task SeedData(IdentityContext context, RoleManager<Role> roleManager)
        {
            if(!await roleManager.RoleExistsAsync("Admin"))
            {
                Role admin = new()
                {
                    Id = Guid.NewGuid(),
                    Name = "admin",
                };
                await roleManager.CreateAsync(admin);
            }

            if (!await roleManager.RoleExistsAsync("User"))
            {
                Role user = new()
                {
                    Id = Guid.NewGuid(),
                    Name = "user",
                };
                await roleManager.CreateAsync(user);
            }

            await context.SaveChangesAsync();
        }
    }
}

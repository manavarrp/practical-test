using Microsoft.AspNetCore.Identity;
using TestFullstack.Domain.Entities.Identity;

namespace TestFullstack.Infraestructure.Persistence.Seeds
{
    public static class UserSeeder
    {
        public static async Task SeedData(IdentityContext context, UserManager<User> userManager)
        {
            if(await userManager.FindByEmailAsync("admin@admin.com") == null)
            {
                User adminUser = new()
                {
                    Name = "admin",
                    LastName = "admin",
                    CreatedAt = DateTime.UtcNow,
                    UserName = "admin@admin.com",
                    Email = "admin@admin.com",
                    PhoneNumber = "1234567890",
                };
                await userManager.CreateAsync(adminUser, "Admin@123");
                await userManager.AddToRoleAsync(adminUser, "admin");

                await context.SaveChangesAsync();
            }

        }
    }
}

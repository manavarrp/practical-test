using Microsoft.AspNetCore.Identity;
using TestFullstack.Domain.Entities.Identity;
using TestFullstack.Infraestructure.Persistence.Seeds;
using TestFullstack.Infraestructure.Persistence;
using Microsoft.EntityFrameworkCore;

namespace TestFullstack.Api.Extensions
{
    public static class SeedDataBuilderExtensions
    {
        public static void MigrateDatabase(this WebApplication webApp)
        {
            // Crear un scope para la vida útil del servicio - contexto de base de datos
            using var scope = webApp.Services.CreateScope();
            using var context = scope.ServiceProvider.GetRequiredService<IdentityContext>();
            using var userManager = scope.ServiceProvider.GetRequiredService<UserManager<User>>();
            using var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<Role>>();
            // Aplicar migraciones pendientes en la base de datos
            context.Database.Migrate();
            //Master
            OccupationSeeder.SeedData(context).Wait();
            //Identity
            RoleSeeder.SeedData(context, roleManager).Wait();
            UserSeeder.SeedData(context, userManager).Wait();
        }
    }
}

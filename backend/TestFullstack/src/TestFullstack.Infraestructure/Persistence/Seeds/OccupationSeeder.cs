using TestFullstack.Domain.Entities.Master;

namespace TestFullstack.Infraestructure.Persistence.Seeds
{
    public static class OccupationSeeder
    {
        public static async Task SeedData(IdentityContext context)
        {
            if (!context.Occupations.Any())
            {
                List<Occupation> occupationsList = new()
                {
                    new Occupation() { Name = "Ingeniero(a)"},
                    new Occupation() { Name = "Estudiante"},
                    new Occupation() { Name = "Comerciante"},
                    new Occupation() { Name = "Agricultor"}
                };
                // Esta línea agrega las ocupaciones al contexto del DbContext.
                context.Occupations.AddRange(occupationsList);

                // Esta línea guarda los cambios en la base de datos.
                await context.SaveChangesAsync();
            }

          
        }
    }
}

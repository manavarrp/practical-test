using TestFullstack.Infraestructure.Extension;
using TestFullstack.Application;
using TestFullstack.Api.Extensions;

var builder = WebApplication.CreateBuilder(args);
var Cors = "Cors";
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
// Configurar la base de datos
builder.Services.ConfigureDatabase(builder.Configuration);
// Configurar la autenticación y autorización
builder.Services.ConfigureIdentity();
builder.Services.AddDataProtection();
// Configurar servicios de la aplicación
builder.Services.AddAplicationServices();
//Add authentication to Swagger UI
builder.Services.ConfigureSwagger();

// Configurar CORS para permitir cualquier origen, método y cabecera
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: Cors,
        builder =>
        {
            builder.WithOrigins("http://localhost:3000"); // Permitir solo desde localhost:3000
            builder.AllowAnyMethod();
            builder.AllowAnyHeader();
        });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
// Aplicar política CORS
app.UseCors(Cors);
// Habilitar la autorización - autenticación
app.UseAuthentication();
app.UseAuthorization();
// Aplicar migraciones de base de datos
app.MigrateDatabase();

app.MapControllers();

app.Run();

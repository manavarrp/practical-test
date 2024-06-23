using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TestFullstack.Infraestructure.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class ADDFieldNumberIdenOnCustomer : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "IdentificationNumber",
                table: "Customers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IdentificationNumber",
                table: "Customers");
        }
    }
}

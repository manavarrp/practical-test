namespace TestFullstack.Application.Features.Queries.GetCustomer
{
    public class GetCustomerDto
    {
        public int Id { get; set; }
        public string IdentificationNumber { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string OccupationName { get; set; }
    }
}

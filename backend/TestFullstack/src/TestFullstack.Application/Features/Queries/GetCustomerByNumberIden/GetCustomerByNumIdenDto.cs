namespace TestFullstack.Application.Features.Queries.GetCustomerByNumberIden
{
    public class GetCustomerByNumIdenDto
    {
        public int Id { get; set; }
        public string IdentificationNumber { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string OccupationName { get; set; }
    }
}

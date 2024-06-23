using MediatR;

namespace TestFullstack.Application.Features.Queries.GetCustomerByNumberIden
{
    public class GetCustomerByNumIdenQuery : IRequest<GetCustomerByNumIdenDto>
    {
        public string IdentificationNumber { get; set; }

        public GetCustomerByNumIdenQuery( string identificacionNumber)
        {
            IdentificationNumber = identificacionNumber;
        }
    }
}

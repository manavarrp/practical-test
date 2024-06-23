using MediatR;

namespace TestFullstack.Application.Features.Queries.GetCustomer
{
    public class GetCustomerQuery : IRequest<IEnumerable<GetCustomerDto>>
    {
    }
}

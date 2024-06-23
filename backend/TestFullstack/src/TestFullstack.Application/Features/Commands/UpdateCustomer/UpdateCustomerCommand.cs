using MediatR;
using TestFullstack.Application.Commons.Bases.Response;

namespace TestFullstack.Application.Features.Commands.UpdateCustomer
{
    public class UpdateCustomerCommand : IRequest<BaseResponse>
    {
        public string IdentificationNumber { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public int OccupationId { get; set; }
    }
}
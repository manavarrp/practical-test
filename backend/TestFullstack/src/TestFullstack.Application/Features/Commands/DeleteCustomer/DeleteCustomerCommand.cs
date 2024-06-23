using MediatR;
using TestFullstack.Application.Commons.Bases.Response;

namespace TestFullstack.Application.Features.Commands.DeleteCustomer
{
    public class DeleteCustomerCommand : IRequest<BaseResponse>
    {
        public int Id { get; set; }
    }
}

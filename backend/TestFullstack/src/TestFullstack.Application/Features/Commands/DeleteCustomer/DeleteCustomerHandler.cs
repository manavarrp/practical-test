using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TestFullstack.Application.Commons.Bases.Response;
using TestFullstack.Application.Interface;
using TestFullstack.Domain.Entities.Customer;

namespace TestFullstack.Application.Features.Commands.DeleteCustomer
{
    public class DeleteCustomerHandler : IRequestHandler<DeleteCustomerCommand, BaseResponse>
    {
        private readonly ICustomerApplication _customerApplication;

        public DeleteCustomerHandler(ICustomerApplication customerApplication)
        {
            _customerApplication = customerApplication;
        }

        public async Task<BaseResponse> Handle(DeleteCustomerCommand request, CancellationToken cancellationToken)
        {
            try
            {
                await _customerApplication.DeleteAsync(new Customer() { Id = request.Id });
                return new BaseResponse(true, "Customer eliminado");
            }
            catch (Exception ex)
            {

                return new BaseResponse(false, $"Error al eliminar el customer: {ex.Message}");
            }
        }
    }
}

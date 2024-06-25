using AutoMapper;
using MediatR;
using SendGrid.Helpers.Errors.Model;
using TestFullstack.Application.Interface;

namespace TestFullstack.Application.Features.Queries.GetCustomerByNumberIden
{
    public class GetCustomerByNumIdenQueryHandler : IRequestHandler<GetCustomerByNumIdenQuery, GetCustomerByNumIdenDto>
    {
        private readonly ICustomerApplication _customerApplication;
        private readonly IMapper _mapper;

        public GetCustomerByNumIdenQueryHandler(ICustomerApplication customerApplication, IMapper mapper)
        {
            _customerApplication = customerApplication;
            _mapper = mapper;
        }

        public async Task<GetCustomerByNumIdenDto> Handle(GetCustomerByNumIdenQuery request, CancellationToken cancellationToken)
        {
            var customer = await _customerApplication.GetCustomerByNumberIden(request.IdentificationNumber);

            if (customer == null)
            {
                throw new NotFoundException("Customer no encontrado");
            }

            return _mapper.Map<GetCustomerByNumIdenDto>(customer);
        }
    }
}

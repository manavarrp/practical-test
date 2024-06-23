using AutoMapper;
using MediatR;
using TestFullstack.Application.Interface;

namespace TestFullstack.Application.Features.Queries.GetCustomer
{
    public class GetCustomerHandler : IRequestHandler<GetCustomerQuery, IEnumerable<GetCustomerDto>>
    {
        private readonly ICustomerApplication _customerApplication;
        private readonly IMapper _mapper;

        public GetCustomerHandler(ICustomerApplication customerApplication, IMapper mapper)
        {
            _customerApplication = customerApplication;
            _mapper = mapper;
        }

        public async Task<IEnumerable<GetCustomerDto>> Handle(GetCustomerQuery request, CancellationToken cancellationToken)
        {
            var customers = await _customerApplication.GetCustomerAll();
            return _mapper.Map<IEnumerable<GetCustomerDto>>(customers);
        }
    }
}

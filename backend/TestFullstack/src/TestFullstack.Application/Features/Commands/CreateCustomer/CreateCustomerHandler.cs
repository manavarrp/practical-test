using AutoMapper;
using FluentValidation.Results;
using MediatR;
using TestFullstack.Application.Commons.Bases.Response;
using TestFullstack.Application.Helpers;
using TestFullstack.Application.Interface;
using TestFullstack.Domain.Entities.Customer;

namespace TestFullstack.Application.Features.Commands.CreateCustomer
{
    public class CreateCustomerHandler : IRequestHandler<CreateCustomerCommand, BaseResponse>
    {
        private readonly ICustomerApplication _customerApplication;
        private readonly IMapper _mapper;

        public CreateCustomerHandler(ICustomerApplication customerApplication, IMapper mapper)
        {
            _customerApplication = customerApplication;
            _mapper = mapper;
        }

        public async Task<BaseResponse> Handle(CreateCustomerCommand request, CancellationToken cancellationToken)
        {
            try
            {
                CreateCustomerValidator validator = new();
                ValidationResult validationResult = validator.Validate(request);
                var errors = ValidationHelper.ConvertValidationErrorsToDictionary(validationResult);

                if (errors == null || errors.Count > 0)
                {
                    return new BaseResponse(false, "No fue posible crear el customer", errors);
                }

                var customer = _mapper.Map<Customer>(request);
                customer.CreatedAt = DateTime.UtcNow;
                await _customerApplication.AddCustomer(customer);
                return new BaseResponse(true, "Customer Creado");

            }
            catch (Exception ex) 
            {
                return new BaseResponse(false, $"Error al crear el customer: {ex.Message}");
            }
        }
    }
}

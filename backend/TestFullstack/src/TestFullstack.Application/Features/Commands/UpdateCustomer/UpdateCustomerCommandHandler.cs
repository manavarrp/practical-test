using AutoMapper;
using MediatR;
using TestFullstack.Application.Commons.Bases.Response;
using TestFullstack.Application.Features.Commands.UpdateCustomer;
using TestFullstack.Application.Interface;

public class UpdateCustomerCommandHandler : IRequestHandler<UpdateCustomerCommand, BaseResponse>
{
    private readonly ICustomerApplication _customerApplication;
    private readonly IMapper _mapper;

    public UpdateCustomerCommandHandler(ICustomerApplication customerApplication, IMapper mapper)
    {
        _customerApplication = customerApplication;
        _mapper = mapper;
    }

    public async Task<BaseResponse> Handle(UpdateCustomerCommand request, CancellationToken cancellationToken)
    {
        try
        {
            var existingCustomer = await _customerApplication.GetCustomerByNumberIden(request.IdentificationNumber);

            if (existingCustomer == null)
            {
                return new BaseResponse(false, "No se encontro ningun customer.");
            }


            // Map updated fields
            _mapper.Map(request, existingCustomer);
            existingCustomer.UpdateAt = DateTime.UtcNow;



            await _customerApplication.UpdateAsync(existingCustomer);

            return new BaseResponse(true, "Customer actualizado.");
        }
        catch (Exception ex)
        {
            return new BaseResponse(false, $"Error al actualizar el customer: {ex.Message}");
        }
    }
}

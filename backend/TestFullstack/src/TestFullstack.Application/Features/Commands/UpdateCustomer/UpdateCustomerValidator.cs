using FluentValidation;

namespace TestFullstack.Application.Features.Commands.UpdateCustomer
{
    public class UpdateCustomerValidator : AbstractValidator<UpdateCustomerCommand>
    {
        public UpdateCustomerValidator()
        {
            RuleFor(x => x.Name)
            .NotEmpty().WithMessage("Nombre es obligatorio.");
            RuleFor(x => x.LastName)
               .NotEmpty().WithMessage("Apellido es obligatorio.");
        }
    }
}

using FluentValidation;

namespace TestFullstack.Application.Features.Commands.CreateCustomer
{
    public class CreateCustomerValidator : AbstractValidator<CreateCustomerCommand>
    {
        public CreateCustomerValidator()
        {
            RuleFor(x => x.Name)
              .NotEmpty().WithMessage("Nombre es obligatorio.");
            RuleFor(x => x.LastName)
               .NotEmpty().WithMessage("Apellido es obligatorio.");
            RuleFor(x => x.IdentificationNumber)
              .NotEmpty().WithMessage("Número de identificación es obligatoria.");
            RuleFor(x => x.OccupationId)
             .NotEmpty().WithMessage("Ocupación es obligatoria.");
        }
    }
}

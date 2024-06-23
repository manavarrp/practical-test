using AutoMapper;
using TestFullstack.Application.Features.Commands.CreateCustomer;
using TestFullstack.Application.Features.Commands.UpdateCustomer;
using TestFullstack.Application.Features.Queries.GetCustomer;
using TestFullstack.Application.Features.Queries.GetCustomerByNumberIden;
using TestFullstack.Domain.Entities.Customer;

namespace TestFullstack.Application.Mapping
{
    public class CustomerMappingsProfile : Profile
    {
        public CustomerMappingsProfile()
        {
            CreateMap<Customer, CreateCustomerCommand>().ReverseMap();

            CreateMap<Customer, GetCustomerDto>()
                .ForMember(dest => dest.OccupationName, opt => opt.MapFrom(src => src.Occupation.Name));

            CreateMap<Customer, GetCustomerByNumIdenDto>()
            .ForMember(dest => dest.OccupationName, opt => opt.MapFrom(src => src.Occupation.Name));

            CreateMap<UpdateCustomerCommand, Customer>().ReverseMap();



        }
    }
}

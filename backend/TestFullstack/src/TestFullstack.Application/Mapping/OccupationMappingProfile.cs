using AutoMapper;
using TestFullstack.Application.Features.Queries.Occupation;
using TestFullstack.Domain.Entities.Master;

namespace TestFullstack.Application.Mapping
{
    public class OccupationMappingProfile : Profile
    {
        public OccupationMappingProfile()
        {
            CreateMap<Occupation, GetOccupationDto>().ReverseMap();
        }
    }
}

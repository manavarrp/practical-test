using AutoMapper;
using MediatR;
using TestFullstack.Application.Interface;

namespace TestFullstack.Application.Features.Queries.Occupation
{
    public class GetOccupationHandler : IRequestHandler<GetOccupationQuery, IEnumerable<GetOccupationDto>>
    {
        private readonly IOccupationApplication _occupationApplication;
        private readonly IMapper _mapper;

        public GetOccupationHandler(IOccupationApplication occupationApplication, IMapper mapper)
        {
            _occupationApplication = occupationApplication;
            _mapper = mapper;
        }

        public async Task<IEnumerable<GetOccupationDto>> Handle(GetOccupationQuery request, CancellationToken cancellationToken)
        {
            var occupations = await _occupationApplication.GetAllAsync();
            return _mapper.Map<IEnumerable<GetOccupationDto>>(occupations);
        }
    }
}

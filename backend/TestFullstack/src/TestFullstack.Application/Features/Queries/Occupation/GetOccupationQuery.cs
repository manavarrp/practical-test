using MediatR;

namespace TestFullstack.Application.Features.Queries.Occupation
{
    public class GetOccupationQuery : IRequest<IEnumerable<GetOccupationDto>>
    {
    }
}

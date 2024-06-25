using MediatR;
using Microsoft.AspNetCore.Mvc;
using TestFullstack.Application.Features.Queries.Occupation;

namespace TestFullstack.Api.Controllers.Master
{
    [Route("api/[controller]")]
    [ApiController]
    public class OccupationController : ControllerBase
    {
        private readonly IMediator _mediator;

        public OccupationController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<IActionResult> GetOccupations()
        {
            var response = await _mediator.Send(new GetOccupationQuery());
            return Ok(response);
        }
    }
}

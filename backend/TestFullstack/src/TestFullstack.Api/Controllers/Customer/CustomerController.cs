using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TestFullstack.Application.Features.Commands.CreateCustomer;
using TestFullstack.Application.Features.Commands.DeleteCustomer;
using TestFullstack.Application.Features.Commands.UpdateCustomer;
using TestFullstack.Application.Features.Queries.GetCustomer;
using TestFullstack.Application.Features.Queries.GetCustomerByNumberIden;

namespace TestFullstack.Api.Controllers.Customer
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly IMediator _mediator;

        public CustomerController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> GetCustomer()
        {
            var response = await _mediator.Send(new GetCustomerQuery());
            return Ok(response);
        }

        [Authorize]
        [HttpGet("/api/Customer/Identification")]
        public async Task<IActionResult> GetCustomerByNumIden(string numberIden)
        {
            var response = await _mediator.Send(new GetCustomerByNumIdenQuery(numberIden));
            return Ok(response);
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> CreateCustomer([FromBody] CreateCustomerCommand command)
        {
            var response = await _mediator.Send(command);
            return Ok(response);
        }

        [Authorize]
        [HttpPut]
        public async Task<IActionResult> UpdateCustomer([FromBody] UpdateCustomerCommand command)
        {
            var response = await _mediator.Send(command);
            return Ok(response);
        }

        [Authorize]
        [HttpDelete("/api/Customer/delete/{id:int}")]
        public async Task<IActionResult> DeleteCustomer(int id)
        {
            var response = await _mediator.Send(new DeleteCustomerCommand { Id = id });
            return Ok(response);
        }
    }
}

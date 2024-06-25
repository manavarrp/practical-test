using Microsoft.AspNetCore.Mvc;
using TestFullstack.Application.Dto.Identity;
using TestFullstack.Application.Interface.Identity;

namespace TestFullstack.Api.Controllers.Identity
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountApplication _accountApplication;

        public AccountController(IAccountApplication accountApplication)
        {
            _accountApplication = accountApplication;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(CreateUserRequestDTO userDTO)
        {

            var response = await _accountApplication.CreateUserAsync(userDTO);
            if (!response.Flag) return BadRequest(response);

            return Ok(response);
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDTO loginDTO)
        {

            var response = await _accountApplication.LoginAccount(loginDTO);

            if (!response.Flag) return BadRequest(response);


            return Ok(response);
        }

    }
}


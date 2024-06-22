using TestFullstack.Application.Commons.Bases.Response;
using TestFullstack.Application.Dto.Identity;

namespace TestFullstack.Application.Interface.Identity
{
    public interface IAccountApplication
    {
        Task<BaseResponse> CreateUserAsync(CreateUserRequestDTO request);

        Task<LoginResponse> LoginAccount(LoginDTO request);
    }
}

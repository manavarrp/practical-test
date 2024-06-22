namespace TestFullstack.Application.Dto.Identity
{
    public record UserSession(Guid Id, string Name, string Email, string Role);
}

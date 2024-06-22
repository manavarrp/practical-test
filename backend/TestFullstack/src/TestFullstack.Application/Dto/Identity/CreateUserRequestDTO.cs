using System.ComponentModel.DataAnnotations;

namespace TestFullstack.Application.Dto.Identity
{
    public class CreateUserRequestDTO
    {
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        [Compare(nameof(Password))]
        public string ConfirmPassword { get; set; }
    }
}

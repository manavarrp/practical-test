using Microsoft.AspNetCore.Identity;

namespace TestFullstack.Domain.Entities.Identity
{
    public class User : IdentityUser<Guid>
    {
        public string Name { get; set; }
        public string LastName { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdateAt { get; set; }

        public string? DeletedBy { get; set; }
        public DateTime? DeleteAt { get; set; }
    }
}

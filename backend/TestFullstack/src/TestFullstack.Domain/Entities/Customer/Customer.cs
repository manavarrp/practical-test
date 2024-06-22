using TestFullstack.Domain.Entities.Master;

namespace TestFullstack.Domain.Entities.Customer
{
    public class Customer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public Occupation Occupation { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime? UpdateAt { get; set; }

        public string? DeletedBy { get; set; }
        public DateTime? DeleteAt { get; set; }
    }
}

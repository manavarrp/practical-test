using EF.Core.Repository.Interface.Repository;
using TestFullstack.Domain.Entities.Master;

namespace TestFullstack.Application.Interface
{
    public interface IOccupationApplication : ICommonRepository<Occupation>
    {
        Task<IEnumerable<Occupation>> GetAllAsync();
        Task<Occupation?> GetByIdAsync(int id);
    }
}

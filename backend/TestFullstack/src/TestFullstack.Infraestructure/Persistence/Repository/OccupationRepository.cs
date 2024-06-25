using EF.Core.Repository.Repository;
using Microsoft.EntityFrameworkCore;
using TestFullstack.Application.Interface;
using TestFullstack.Domain.Entities.Master;

namespace TestFullstack.Infraestructure.Persistence.Repository
{
    public class OccupationRepository : CommonRepository<Occupation>, IOccupationApplication
    {
        private readonly IdentityContext _identityContext;

        public OccupationRepository(IdentityContext identityContext) : base(identityContext)
        {
            _identityContext = identityContext;
        }
        public async Task<IEnumerable<Occupation>> GetAllAsync()
        {
            var listOccupation = await _identityContext.Occupations.ToListAsync();
            return listOccupation;
        }

        public async Task<Occupation?> GetByIdAsync(int id)
        {
            return await _identityContext.Occupations
          .FirstOrDefaultAsync(c => c.Id == id);
        }
    }
}

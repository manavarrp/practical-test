using EF.Core.Repository.Repository;
using Microsoft.EntityFrameworkCore;
using SendGrid.Helpers.Mail;
using TestFullstack.Application.Commons.Bases.Response;
using TestFullstack.Application.Interface;
using TestFullstack.Domain.Entities.Customer;


namespace TestFullstack.Infraestructure.Persistence.Repository
{
    public class CustomerRepositoy : CommonRepository<Customer>, ICustomerApplication
    {
        private readonly IdentityContext _identityContext;

        public CustomerRepositoy(IdentityContext identityContext): base(identityContext)
        {
            _identityContext = identityContext;
        }

        public async Task AddCustomer(Customer customer)
        {
            if (await _identityContext.Customers.AnyAsync(c => c.IdentificationNumber == customer.IdentificationNumber))
            {
                throw new InvalidOperationException("Ya existe un usuario con ese número de identificación.");
            }

            _identityContext.Customers.Add(customer);
            await _identityContext.SaveChangesAsync();
        }

        public async Task<IEnumerable<Customer>> GetCustomerAll()
        {
            var customerList = await _identityContext.Customers.Include(o => o.Occupation).ToListAsync();
            return customerList;
        }

        public async Task<Customer> GetCustomerByNumberIden(string numberIdentification)
        {

            return  await _identityContext.Customers
            .Include(c => c.Occupation)
            .FirstOrDefaultAsync(c => c.IdentificationNumber == numberIdentification);
        }
    }
}


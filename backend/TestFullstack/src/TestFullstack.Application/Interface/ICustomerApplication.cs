using EF.Core.Repository.Interface.Repository;
using TestFullstack.Application.Commons.Bases.Response;
using TestFullstack.Domain.Entities.Customer;

namespace TestFullstack.Application.Interface
{
    public interface ICustomerApplication : ICommonRepository<Customer>
    {
        Task<IEnumerable<Customer>> GetCustomerAll();

        Task<Customer> GetCustomerByNumberIden(string numberIdentification);
        Task AddCustomer(Customer customer);
    }
}

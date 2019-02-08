using System.Collections.Generic;
using System.Threading.Tasks;
using API.Models;

namespace API.Data
{
    public interface ITravelersRepository
    {
        Task<User> GetUser(int id);
        Task<Country> GetCountry(int id);
        Task<ICollection<Country>> GetAllCountries();
        Task<bool> SaveAll();
    }
}
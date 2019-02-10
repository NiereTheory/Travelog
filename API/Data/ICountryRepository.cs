using System.Collections.Generic;
using System.Threading.Tasks;
using API.Models;

namespace API.Data
{
    public interface ICountryRepository
    {
        Task<Country> GetCountry(int id);
        Task<ICollection<Country>> GetAllCountries();
    }
}
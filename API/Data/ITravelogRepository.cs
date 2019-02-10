using System.Collections.Generic;
using System.Threading.Tasks;
using API.Helpers;
using API.Models;

namespace API.Data
{
    public interface ITravelogRepository
    {
        Task<List<Travel>> GetAllTravelog(SearchParams searchParams);
        Task<Travel> GetOneTravelog(int id);
        void DeleteOneTravelog(Travel t);
        void AddOneTravelog(Travel t);
        Task<bool> SaveAll();
    }
}
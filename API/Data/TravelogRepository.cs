using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Helpers;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class TravelogRepository : ITravelogRepository
    {
        private readonly DataContext _context;

        public TravelogRepository(DataContext context)
        {
            this._context = context;
        }

        public async void AddOneTravelog(Travel t)
        {
            await _context.Travels.AddAsync(t);
        }

        public void DeleteOneTravelog(Travel t)
        {
            _context.Travels.Remove(t);
        }

        public async Task<List<Travel>> GetAllTravelog(SearchParams searchParams)
        {
            var travels = _context.Travels
                .Include(c => c.Country)
                .Where(c => c.Country.Id == searchParams.CountryId)
                .AsQueryable();

            switch (searchParams.OrderBy.ToLower())
            {
                case "rating":
                    travels = travels.OrderByDescending(t => t.Rating);
                    break;
                default:
                    travels = travels.OrderByDescending(t => t.TravelDate);
                    break;
            }

            return await travels.ToListAsync();
        }

        public async Task<Travel> GetOneTravelog(int id)
        {
            return await _context.Travels
                .Include(u => u.User)
                .Include(c => c.Country)
                .FirstOrDefaultAsync(t => t.Id == id);
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
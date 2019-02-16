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
                .Include(u => u.User)
                .AsQueryable();

            if (searchParams.CountryId != null)
            {
                travels = travels.Where(c => c.Country.Id == searchParams.CountryId);
            }

            if (searchParams.UserId != null)
            {
                travels = travels.Where(u => u.UserId == searchParams.UserId);
            }

            if (searchParams.OrderBy == "rating")
            {
                travels = travels.OrderByDescending(t => t.Rating);
            }
            travels = travels.OrderByDescending(t => t.TravelDate);

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
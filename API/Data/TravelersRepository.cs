using System.Collections.Generic;
using System.Threading.Tasks;
using API.Data;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class TravelersRepository : ITravelersRepository
    {
        private readonly DataContext _context;

        public TravelersRepository(DataContext context)
        {
            this._context = context;
        }

        public async Task<User> GetUser(int id)
        {
            var user = await _context.Users.Include(t => t.Travels).ThenInclude(c => c.Country).FirstOrDefaultAsync(u => u.Id == id);
            return user;
        }
    }
}
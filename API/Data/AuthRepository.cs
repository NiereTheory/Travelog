using System;
using System.Threading.Tasks;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class AuthRepository : IAuthRepository
    {
        private readonly DataContext _context;

        public AuthRepository(DataContext context)
        {
            this._context = context;
        }
        public async Task<User> Login(string email, string password) // email coming in as lower case
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => string.Equals(u.Email, email, StringComparison.OrdinalIgnoreCase));

            if (user == null)
                return null;

            if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
                return null;

            return user;
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != passwordHash[i])
                        return false;
                }
            }
            return true;
        }

        public async Task<User> Register(User user, string password)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                user.PasswordSalt = hmac.Key;
                user.PasswordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return user;
        }

        public async Task<bool> UserExists(string username, string email) // coming in as lower case
        {
            if (await _context.Users.AnyAsync(u => string.Equals(u.Username, username, StringComparison.OrdinalIgnoreCase) || string.Equals(u.Email, email, StringComparison.OrdinalIgnoreCase)))
                return true;

            return false;
        }
    }
}
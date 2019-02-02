using System;

namespace API.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string PasswordHash { get; set; }
        public string PasswordSalt { get; set; }
        public DateTime LastLogin { get; set; }
        public DateTime LastMapCreation { get; set; }
        public DateTime JoinDate { get; set; }
    }
}
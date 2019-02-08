using System;
using System.Collections.Generic;
using API.Models;

namespace API.Dtos
{
    public class UserOutLoginDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public DateTime LastLogin { get; set; }
        public DateTime Created { get; set; }
        // public ICollection<Travel> Travels { get; set; }
    }
}
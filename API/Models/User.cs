using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace API.Models
{
    public class User
    {
        public int Id { get; set; }
        [Required]
        public string Username { get; set; }
        [Required]
        [JsonIgnore]
        public byte[] PasswordHash { get; set; }
        [Required]
        [JsonIgnore]
        public byte[] PasswordSalt { get; set; }
        public DateTime LastLogin { get; set; }
        public DateTime Created { get; set; }
        [JsonIgnore]
        public DateTime LastMapCreation { get; set; }
        public ICollection<Travel> Travels { get; set; }
    }
}
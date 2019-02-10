using System;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace API.Models
{
    public class Travel
    {
        public int Id { get; set; }
        public DateTime TravelDate { get; set; }
        public string TravelCity { get; set; }
        [Required]
        [Range(1, 10)]
        public byte Rating { get; set; }
        [Required]
        [StringLength(500)]
        public string Comments { get; set; }
        [JsonIgnore]
        public DateTime Created { get; set; }
        [JsonIgnore]
        public User User { get; set; }
        public int UserId { get; set; }
        public Country Country { get; set; }
    }
}
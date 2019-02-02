using System;

namespace API.Models
{
    public class Travel
    {
        public int TravelId { get; set; }
        public User FKUser { get; set; }
        public Country FKCountry { get; set; }
        public DateTime TravelDate { get; set; }
        public string TravelCity { get; set; }
        public byte Rating { get; set; }
        public string Comments { get; set; }
        public DateTime Created { get; set; }
    }
}
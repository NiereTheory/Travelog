using System;

namespace API.Dtos
{
    public class TravelogInCreateDto
    {
        public DateTime TravelDate { get; set; }
        public string TravelCity { get; set; }
        public byte Rating { get; set; }
        public string Comments { get; set; }
        public int CountryId { get; set; }
        public DateTime Created { get; set; } = DateTime.Now;
    }
}
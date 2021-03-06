using System.Collections.Generic;
using API.Models;

namespace API.Dtos
{
    public class TravelogOutDto
    {

        public int Id { get; set; }
        public string Username { get; set; }
        public ICollection<Travel> Travels { get; set; }
    }
}
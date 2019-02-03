using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class Country
    {
        public int Id { get; set; }
        [Required]
        public string ShortName { get; set; }
        [Required]
        public string LongName { get; set; }
        public string FlagUrl { get; set; }
        [Required]
        public string Continent { get; set; }
        [Required]
        public string Region { get; set; }

    }
}
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace API.Models
{
    public class Country
    {
        public int Id { get; set; }
        [Required]
        public string ShortName { get; set; }
        [Required]
        [JsonIgnore]
        public string LongName { get; set; }
        public string FlagUrl { get; set; }
        [Required]
        [JsonIgnore]
        public string Continent { get; set; }
        [Required]
        [JsonIgnore]
        public string Region { get; set; }

    }
}
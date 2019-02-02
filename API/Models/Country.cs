namespace API.Models
{
    public class Country
    {
        public int CountryId { get; set; }
        public string ShortName { get; set; }
        public string LongName { get; set; }
        public string FlagUrl { get; set; }
        public string Continent { get; set; }
        public string Region { get; set; }

    }
}
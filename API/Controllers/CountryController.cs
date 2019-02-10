using System.Security.Claims;
using System.Threading.Tasks;
using API.Data;
using API.Dtos;
using API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/countries")]
    [ApiController]
    public class CountryController : ControllerBase
    {
        private readonly ICountryRepository _countryRepository;

        public CountryController(ICountryRepository repo)
        {
            this._countryRepository = repo;
        }

        [HttpGet]
        public async Task<IActionResult> ReturnAllCountries()
        {
            var countries = await _countryRepository.GetAllCountries();
            return Ok(countries);
        }
    }
}

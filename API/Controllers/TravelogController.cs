using System.Security.Claims;
using System.Threading.Tasks;
using API.Data;
using API.Dtos;
using API.Helpers;
using API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/travelogs")]
    [ApiController]
    public class TravelogController : ControllerBase
    {
        private readonly ITravelogRepository _travelogRepository;
        private readonly ICountryRepository _countryRepository;
        private readonly ITravelersRepository _travelersRepository;
        private readonly IMapper _mapper;

        public TravelogController(ITravelogRepository trepo, ICountryRepository crepo, ITravelersRepository urepo, IMapper mapper)
        {
            this._travelogRepository = trepo;
            this._countryRepository = crepo;
            this._travelersRepository = urepo;
            this._mapper = mapper;
        }

        [HttpPost]
        public async Task<IActionResult> AddTravelogEntry(int userId, [FromBody]TravelogInCreateDto travelogInCreateDto)
        {
            // if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            //     return Unauthorized();

            var user = await _travelersRepository.GetUser(travelogInCreateDto.UserId);

            var country = await _countryRepository.GetCountry(travelogInCreateDto.CountryId);

            var travelogEntry = _mapper.Map<Travel>(travelogInCreateDto);

            travelogEntry.Country = country;
            user.Travels.Add(travelogEntry);

            // _travelogRepository.AddOneTravelog(travelogEntry);

            if (await _travelogRepository.SaveAll())
                return StatusCode(201);
            // return CreatedAtRoute()

            return BadRequest("Failed to add new travelog entry");
        }

        [HttpDelete("{travelId}")]
        public async Task<IActionResult> DeleteTravelogEntry(int travelId)
        {
            var travelogEntryToDelete = await _travelogRepository.GetOneTravelog(travelId);

            _travelogRepository.DeleteOneTravelog(travelogEntryToDelete);

            if (await _travelogRepository.SaveAll())
                return NoContent();

            return BadRequest("Failed to add new travelog entry");
        }

        [HttpGet]
        public async Task<IActionResult> ReturnAllTravelogs([FromQuery] SearchParams searchParams)
        {
            var travelogs = await _travelogRepository.GetAllTravelog(searchParams);
            var totalItems = travelogs.Count;
            return Ok(new
            {
                travelogs,
                totalItems
            });
        }

        // [HttpGet("countries")]
        // public async Task<IActionResult> GetAllCountries()
        // {
        //     var countries = await _travelogRepository.GetAllCountries();
        //     return Ok(countries);
        // }

        // [HttpGet("country/{id}")]
        // public async Task<IActionResult> GetCountry(int countryId)
        // {
        //     var country = await _travelogRepository.GetCountry(countryId);
        //     return Ok(country);
        // }
    }
}

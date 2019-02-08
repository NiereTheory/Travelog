using System.Security.Claims;
using System.Threading.Tasks;
using API.Data;
using API.Dtos;
using API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/travelers/{userId}/travelog")]
    [ApiController]
    public class TravelogController : ControllerBase
    {
        private readonly ITravelersRepository travelersRepository;
        private readonly IMapper _mapper;

        public TravelogController(ITravelersRepository repo, IMapper mapper)
        {
            this.travelersRepository = repo;
            this._mapper = mapper;
        }

        [HttpPost]
        public async Task<IActionResult> AddTravelogEntry(int userId, [FromBody]TravelogInCreateDto travelogInCreateDto)
        {
            // if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            //     return Unauthorized();

            var user = await travelersRepository.GetUser(userId);

            var country = await travelersRepository.GetCountry(travelogInCreateDto.CountryId);

            var travelogEntry = _mapper.Map<Travel>(travelogInCreateDto);
            travelogEntry.Country = country;

            user.Travels.Add(travelogEntry);
            if (await travelersRepository.SaveAll())
                return Ok();

            return BadRequest("Failed to add new travelog entry");
        }


    }
}

using System.Threading.Tasks;
using API.Data;
using API.Dtos;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TravelersController : ControllerBase
    {
        private readonly ITravelersRepository travelersRepository;
        private readonly IMapper _mapper;

        public TravelersController(ITravelersRepository repo, IMapper mapper)
        {
            this.travelersRepository = repo;
            this._mapper = mapper;
        }

        [HttpGet("{id}", Name = "GetUser")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await travelersRepository.GetUser(id);
            return Ok(user);
        }
    }
}
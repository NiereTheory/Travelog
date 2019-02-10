using System.Threading.Tasks;
using API.Data;
using API.Models;
using API.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using AutoMapper;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _authRepository;
        private readonly IConfiguration _config;
        private readonly IMapper _mapper;

        public AuthController(IAuthRepository repo, IConfiguration config, IMapper mapper)
        {
            this._authRepository = repo;
            this._config = config;
            this._mapper = mapper;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] UserInRegisterDto userInRegisterDto)
        {
            if (await _authRepository.UserExists(userInRegisterDto.Username.ToLower(), userInRegisterDto.Email.ToLower()))
                return BadRequest("User credentials already exists");

            var userToCreate = _mapper.Map<User>(userInRegisterDto);
            userToCreate.Created = DateTime.Now;

            var createdUser = await _authRepository.Register(userToCreate, userInRegisterDto.Password);

            // var userToReturn = _mapper.Map<UserOutLoginDto>(createdUser);

            return StatusCode(201);

            // return CreatedAtRoute("GetUser", new { controller = "Travelers", id = createdUser.Id }, userToReturn);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(UserInLoginDto userInLoginDto)
        {
            var userFromRepo = await _authRepository.Login(userInLoginDto.Email.ToLower(), userInLoginDto.Password);

            if (userFromRepo == null)
                return Unauthorized();

            var claims = new Claim[] {
                new Claim(ClaimTypes.NameIdentifier, userFromRepo.Id.ToString()),
                new Claim(ClaimTypes.Name, userFromRepo.Username)
            };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(2),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            var user = _mapper.Map<UserOutLoginDto>(userFromRepo);

            return Ok(new
            {
                token = tokenHandler.WriteToken(token),
                user
            });
        }
    }
}
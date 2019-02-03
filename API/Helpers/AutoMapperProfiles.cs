using API.Models;
using API.Dtos;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<UserInRegisterDto, User>();
            CreateMap<User, UserOutDetailDto>();
        }
    }
}
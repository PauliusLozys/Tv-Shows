using AutoMapper;
using showsBackend.DTOs;
using showsBackend.Models;

namespace showsBackend.Profiles
{
    public class ShowsProfile : Profile
    {
        public ShowsProfile()
        {
            CreateMap<Show, ShowReadDTO>();
            CreateMap<ShowCreateDTO, Show>();
        }
    }
}

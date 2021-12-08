using AutoMapper;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using showsBackend.Data;
using showsBackend.DTOs;
using showsBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace showsBackend.Controllers
{
    [Route("api/shows")]
    [ApiController]
    [EnableCors("MyCordsPolicy")]
    public class ShowsController : ControllerBase
    {
        private readonly IShowRepo _repository;
        private readonly IMapper _mapper;

        public ShowsController(IShowRepo repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<IEnumerable<ShowReadDTO>> GetAllShows()
        {
            var shows = _repository.GetAllShows();

            return Ok(_mapper.Map<IEnumerable<ShowReadDTO>>(shows));
        }

        [HttpGet("{id}")]
        public ActionResult<ShowReadDTO> GetShowById(int id)
        {
            var show = _repository.GetShow(id);
            if(show is not null)
                return Ok(_mapper.Map<ShowReadDTO>(show));

            return NotFound(); // return 404
        }
    }
}

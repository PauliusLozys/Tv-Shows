using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using showsBackend.Data;
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

        public ShowsController(IShowRepo repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Show>> GetAllShows()
        {
            var shows = _repository.GetShows();

            return Ok(shows);
        }

        [HttpGet("{id}")]
        public ActionResult<Show> GetShowById(int id)
        {
            var show = _repository.GetShow(id);

            return Ok(show);
        }
    }
}

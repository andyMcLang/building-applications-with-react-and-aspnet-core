
using Microsoft.AspNetCore.Mvc;
using MoviesAPI.Entities;
using MoviesAPI.Filters;

namespace MoviesAPI.Controllers
{
    [Route("api/genres")]
    [ApiController]
    public class GenresController : ControllerBase
    {
        private readonly ILogger<GenresController> logger;

        public GenresController(ILogger<GenresController> logger)
        {
            this.logger = logger;
        }

        [HttpGet] // api/genres 
        public async Task<ActionResult<List<Genre>>> Get()
        {
            logger.LogInformation("Haetaan kaikki genret");

            return new List<Genre>()
            {
                new Genre() {
                    Id = 1,
                    Name = "Komedia",
                }
            };
        }

        [HttpGet("{Id:int}", Name = "getGenre")] // api/genres/example
        public ActionResult<Genre> Get(int id)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public ActionResult Post([FromBody] Genre genre)
        {
            throw new NotImplementedException();
        }

        [HttpPut]
        public ActionResult Put([FromBody] Genre genre)
        {
            throw new NotImplementedException();
        }

        [HttpDelete("{id:int}")]
        public ActionResult Delete(int id)
        {
            throw new NotImplementedException();
        }
    }
}

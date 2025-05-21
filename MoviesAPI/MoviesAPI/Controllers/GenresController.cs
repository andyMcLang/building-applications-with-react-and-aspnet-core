
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoviesAPI.DTOs;
using MoviesAPI.Entities;
using MoviesAPI.Filters;
using System.Threading.Tasks;

namespace MoviesAPI.Controllers
{
    [Route("api/genres")]
    [ApiController]
    public class GenresController : ControllerBase
    {
        private readonly ILogger<GenresController> logger;
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public GenresController(ILogger<GenresController> logger, ApplicationDbContext context, IMapper mapper)
        {
            this.logger = logger;
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet] // api/genres 
        public async Task<ActionResult<List<GenreDTO>>> Get()
        {
            logger.LogInformation("Haetaan kaikki genret");

            var genres = await context.Genres.ToListAsync();
            return mapper.Map<List<GenreDTO>>(genres);
        }

        [HttpGet("{Id:int}", Name = "getGenre")] // api/genres/example
        public ActionResult<Genre> Get(int id)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] GenreCreationDTO genreCreationDTO genre)
        {
            var genre = mapper.Map<Genre>(genreCreationDTO);
            context.Add(genre);
            await context.SaveChangesAsync();
            return NoContent();
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


using Microsoft.AspNetCore.Mvc;
using MoviesAPI.Entities;
using MoviesAPI.Services;

namespace MoviesAPI.Controllers
{
    [Route("api/genres")]
    [ApiController]
    public class GenresController : ControllerBase
    {
        private readonly IRepository repository;
        private readonly ILogger<GenresController> logger;

        public GenresController(IRepository repository, ILogger<GenresController> logger)
        {
            this.repository = repository;
            this.logger = logger;
        }

        [HttpGet] // api/genres
        [Route("list")] // api/genres/list
        [Route("/all")] // allgenres
        [ResponseCache(Duration = 60)]
        public async Task<ActionResult<List<Genre>>> Get()
        {
            logger.LogInformation("Haetaan kaikki genret");
            var genres = await repository.GetAllGenres();
            return Ok(genres);
        }

        [HttpGet("{Id:int}")] // api/genres/example
        public ActionResult<Genre> GetById(int id)
        {
            logger.LogInformation($"Haetaan genre id:llä {id}");

            var genre = repository.GetGenreById(id);

            if (genre == null)
            {
                logger.LogWarning($"Genreä id:llä {id} ei löytynyt");
                return NotFound();
            }
            return Ok(genre);
        }

        [HttpPost]
        public ActionResult Post([FromBody] Genre genre)
        {
            repository.AddGenre(genre);
            logger.LogInformation($"Lisättiin uusi genre: {genre.Name}");

            return CreatedAtAction(nameof(GetById), new { id = genre.Id }, genre);
        }

        [HttpPut("{id:int}")]
        public ActionResult Put(int id, [FromBody] Genre genre)
        {
            var existing = repository.GetGenreById(id);
            if (existing == null)
            {
                return NotFound();
            }

            existing.Name = genre.Name;
            logger.LogInformation($"Genre id {id} päivitetty nimeksi {genre.Name}");
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public ActionResult Delete(int id)
        {
            var existing = repository.GetGenreById(id);
            if (existing == null)
            {
                return NotFound();
            }

            logger.LogInformation($"Genre id {id} poistettu (oletettavasti)");
            return NoContent();
        }
    }
}

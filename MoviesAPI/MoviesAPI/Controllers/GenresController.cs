// Test push repository from Visual Studio to GitHub
using Microsoft.AspNetCore.Mvc;
using MoviesAPI.Entities;
using MoviesAPI.Services;

namespace MoviesAPI.Controllers
{
    [Route("api/genres")]
    public class GenresController: ControllerBase
    {
        private readonly IRepository repository;
        public GenresController(IRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public List<Genre> Get()
        {
            return repository.GetAllGenres();
        }

        [HttpGet]
        public Genre Get(int id)
        {
            var genre = repository.GetGenreById(id);
            if (genre == null)
            {
                // return NotFound();
            }
            return genre;
        }

        [HttpPost]
        public void Post()
        {
            // Add a new genre
        }

        [HttpPut]
        public void Put()
        {
            // Update a genre
        }

        [HttpDelete]
        public void Delete()
        {
            // Delete a genre
        }
    }
}

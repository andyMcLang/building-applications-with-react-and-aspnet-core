using MoviesAPI.Entities;

namespace MoviesAPI.Services
{
    public class InMemoryRepository : IRepository
    {
        private List<Genre> _genres;
        public InMemoryRepository()
        {
            _genres = new List<Genre>()
            {
                new Genre() { Id = 1, Name = "Komedia" },
                new Genre() { Id = 2, Name = "Toiminta" },
                new Genre() { Id = 3, Name = "Seikkailu" },
                new Genre() { Id = 4, Name = "Animaatio" },
                new Genre() { Id = 5, Name = "Rikos" },
                new Genre() { Id = 6, Name = "Draama" },
                new Genre() { Id = 7, Name = "Fantasia" },
                new Genre() { Id = 8, Name = "Historiallinen" },
                new Genre() { Id = 9, Name = "Kauhu" },
                new Genre() { Id = 10, Name = "Mysteria" },
                new Genre() { Id = 11, Name = "Romanssi" },
                new Genre() { Id = 12, Name = "Tiede" },
                new Genre() { Id = 13, Name = "Trilleri" },
                new Genre() { Id = 14, Name = "Lannenelokuva" }
            };
        }
        public List<Genre> GetAllGenres()
        {
            return _genres;
        }

        public Genre GetGenreById(int Id)
        {
            return _genres.FirstOrDefault(x => x.Id == Id);
        }
    }
}

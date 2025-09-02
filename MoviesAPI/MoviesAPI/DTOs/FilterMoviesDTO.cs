namespace MoviesAPI.DTOs
{
    public class FilterMoviesDTO
    {
        public int Page { get; set; } = 1;
        public int RecordsPerPage { get; set; } = 10;
        public string? Title { get; set; }    // 🔹 nyt nullable
        public int? GenreId { get; set; }     // 🔹 nyt nullable
        public bool? InTheaters { get; set; } // 🔹 nyt nullable
        public bool? UpcomingReleases { get; set; } // 🔹 nyt nullable
    }
}
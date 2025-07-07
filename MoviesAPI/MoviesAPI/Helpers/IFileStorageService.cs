namespace MoviesAPI.Helpers
{
    public interface IFileStorageService
    {
        Task<string> SaveFile(string container, IFormFile file);
        Task<string> EditFile(string container, IFormFile file, string path);
        Task DeleteFile(string path, string container);
    }
}

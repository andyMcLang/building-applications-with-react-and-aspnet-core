

using MoviesAPI.Helpers;

namespace MoviesAPI.Helpers
{
    public class InAppStorageService : IFileStorageService
    {
        private readonly IWebHostEnvironment env;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly string containerName = "actors";

        public InAppStorageService(IWebHostEnvironment env, IHttpContextAccessor httpContextAccessor)
        {
            this.env = env;
            this.httpContextAccessor = httpContextAccessor;
        }

        public async Task<string> SaveFile(string container, IFormFile file)
        {
            var extension = Path.GetExtension(file.FileName);
            var fileName = $"{Guid.NewGuid()}{extension}";
            string folder = Path.Combine(env.WebRootPath, containerName);

            if (!Directory.Exists(folder))
            {
                Directory.CreateDirectory(folder);
            }

            string route = Path.Combine(folder, fileName);

            using (var ms = new MemoryStream())
            {
                await file.CopyToAsync(ms);
                var content = ms.ToArray();
                await File.WriteAllBytesAsync(route, content);
            }

            var currentUrl = $"{httpContextAccessor.HttpContext.Request.Scheme}://{httpContextAccessor.HttpContext.Request.Host}";
            var dbPath = Path.Combine(containerName, fileName).Replace("\\", "/");
            return $"{currentUrl}/{dbPath}";
        }

        public Task DeleteFile(string path, string container)
        {
            var fileName = Path.GetFileName(path);
            string fileDirectory = Path.Combine(env.WebRootPath, containerName, fileName);
            if (File.Exists(fileDirectory))
            {
                File.Delete(fileDirectory);
            }
            return Task.CompletedTask;
        }

        public async Task<string> EditFile(string container, IFormFile file, string path)
        {
            await DeleteFile(path, container);
            return await SaveFile(container, file);
        }
    }
}

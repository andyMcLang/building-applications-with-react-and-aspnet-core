﻿using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoviesAPI.DTOs;
using MoviesAPI.Entities;
using MoviesAPI.Helpers;


namespace MoviesAPI.Controllers
{
    [Route("api/actors")]
    [ApiController]
    public class ActorsController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;
        private readonly IFileStorageService fileStorageService;
        private readonly string containerName = "actors";

        public ActorsController(ApplicationDbContext context, IMapper mapper, IFileStorageService fileStorageService)
        {
            this.context = context;
            this.mapper = mapper;
            this.fileStorageService = fileStorageService;
        }

        [HttpGet]
        public async Task<ActionResult<List<ActorDTO>>> Get([FromQuery] PaginationDTO paginationDTO)
        {
            var queryable = context.Actors.AsQueryable();
            await HttpContext.InsertParametersPaginationInHeader(queryable);
            var actors = await queryable.OrderBy(x => x.Name).Paginate(paginationDTO).ToListAsync();
            return mapper.Map<List<ActorDTO>>(actors);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<ActorDTO>> Get(int id)
        {
            var actor = await context.Actors.FirstOrDefaultAsync(x => x.Id == id);

            if (actor == null)
            {
                return NotFound();
            }

            return mapper.Map<ActorDTO>(actor);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromForm] ActorCreationDTO actorCreationDTO)
        {
            var actor = mapper.Map<Actor>(actorCreationDTO);

            actor.DateOfBirth = DateTime.SpecifyKind(actor.DateOfBirth, DateTimeKind.Utc);

            if (actorCreationDTO.Picture != null)
            {
                actor.Picture = await fileStorageService.SaveFile(containerName, actorCreationDTO.Picture);
            }

            context.Add(actor);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, [FromForm] ActorCreationDTO actorCreationDTO)
        {
            var actor = await context.Actors.FirstOrDefaultAsync(x => x.Id == id);

            if (actor == null)
            {
                return NotFound();
            }

            actor = mapper.Map(actorCreationDTO, actor);

            actor.DateOfBirth = DateTime.SpecifyKind(actorCreationDTO.DateOfBirth, DateTimeKind.Utc);

            if (actorCreationDTO.Picture != null)
            {
                actor.Picture = await fileStorageService.EditFile(containerName,
                    actorCreationDTO.Picture, actor.Picture);
            }

            await context.SaveChangesAsync();
            return NoContent();
        }



        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var actor = await context.Actors.FirstOrDefaultAsync(x => x.Id == id);
            if (actor == null) return NotFound();

            context.Remove(actor);
            await context.SaveChangesAsync();
            await fileStorageService.DeleteFile(actor.Picture, containerName);
            return NoContent();
        }
    }
}

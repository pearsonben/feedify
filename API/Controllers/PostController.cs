using API.Core;
using API.Features.Posts.Handlers;
using API.Features.Posts.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class PostController : ApiControllerBase
{
    [HttpPost]
    public async Task<ActionResult<Result<SubmitPostResponse>>> SubmitPost([FromBody] SubmitPostCommand command)
        => await Mediator.Send(command);

    [HttpGet]
    public async Task<ActionResult<Result<List<PostResponse>>>> ListPosts()
        => await Mediator.Send(new ListPostsQuery());
}
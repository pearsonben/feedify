using API.Core;
using API.Features.Posts.Handlers;
using API.Features.Posts.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;
[Authorize]
public class PostController : ApiControllerBase
{
    [HttpPost]
    public async Task<ActionResult<Result<SubmitPostResponse>>> SubmitPost([FromBody] SubmitPostCommand command)
        => HandleResult(await Mediator.Send(command));

    [HttpGet]
    public async Task<ActionResult<Result<List<PostResponse>>>> ListPosts()
        => HandleResult(await Mediator.Send(new ListPostsQuery()));

    [HttpGet("healthcheck")]
    public IActionResult Test()
    {
        Console.WriteLine(User.Identity.Name);

        return Ok();
    }
}
using API.Core;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;
[Route("api/[controller]")]
public class ApiControllerBase : Controller
{    
    private ISender _mediator;
    protected ISender Mediator => _mediator ??= HttpContext.RequestServices.GetService<ISender>();

    protected ActionResult<Result<T>> HandleResult<T>(Result<T> result)
        => result switch
        {
            { IsSuccess: true } => Ok(result),
            { IsSuccess: false } => BadRequest(result)
        };
}
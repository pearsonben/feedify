using System.Security.Claims;
using API.Auth;
using API.Core;
using API.Domain.Entities;
using API.Features.Posts.Models;
using API.Persistence;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Identity;

namespace API.Features.Posts.Handlers;

public class SubmitPostCommand : IRequest<Result<SubmitPostResponse>>
{
    public string Content { get; set; } = string.Empty;
}

public class SubmitPostCommandValidator : AbstractValidator<SubmitPostCommand>
{
    public SubmitPostCommandValidator()
    {
        RuleFor(x => x.Content)
            .NotNull().WithMessage("Content must not be null.");
    }
}

public class SubmitPostCommandHandler(FeedifyContext context, UserManager<User> userManager, IUserAccessor userAccessor)
    : IRequestHandler<SubmitPostCommand, Result<SubmitPostResponse>>
{
    public async Task<Result<SubmitPostResponse>> Handle(SubmitPostCommand request, CancellationToken cancellationToken)
    {

        var user = userAccessor.User;
        var userId = userManager.GetUserId(user);
        
        var post = new Post
        {
            UserId = Guid.Parse(userId),
            Content = request.Content
        };

        context.Posts.Add(post);

        var successfullyUpdated = await context.SaveChangesAsync(cancellationToken) > 0;

        if (!successfullyUpdated)
        {
            return Result<SubmitPostResponse>.Failure("Failed to create post.");
        }
        
        return Result<SubmitPostResponse>.Success(SubmitPostResponse.FromPost(post));
    }
}
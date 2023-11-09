using API.Core;
using API.Domain.Entities;
using API.Features.Posts.Models;
using API.Persistence;
using FluentValidation;
using MediatR;

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

public class SubmitPostCommandHandler : IRequestHandler<SubmitPostCommand, Result<SubmitPostResponse>>
{
    private readonly FeedifyContext _context;

    public SubmitPostCommandHandler(FeedifyContext context)
    {
        _context = context;
    }
    
    public async Task<Result<SubmitPostResponse>> Handle(SubmitPostCommand request, CancellationToken cancellationToken)
    {

        var post = new Post
        {
            Content = request.Content
        };

        _context.Posts.Add(post);

        var successfullyUpdated = await _context.SaveChangesAsync(cancellationToken) > 0;

        if (!successfullyUpdated)
        {
            return Result<SubmitPostResponse>.Failure("Failed to create post.");
        }
        
        return Result<SubmitPostResponse>.Success(SubmitPostResponse.FromPost(post));
    }
}
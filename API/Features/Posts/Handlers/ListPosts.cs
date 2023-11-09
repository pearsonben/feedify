using API.Core;
using API.Features.Posts.Models;
using API.Persistence;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace API.Features.Posts.Handlers;

public class ListPostsQuery : IRequest<Result<List<PostResponse>>>
{
}

public class ListPostsQueryValidator : AbstractValidator<ListPostsQuery>{}

internal class ListPostQueryHandler : IRequestHandler<ListPostsQuery, Result<List<PostResponse>>>
{
    private readonly FeedifyContext _context;

    public ListPostQueryHandler(FeedifyContext context)
    {
        _context = context;
    }
    
    public async Task<Result<List<PostResponse>>> Handle(ListPostsQuery request, CancellationToken cancellationToken)
    {
        var posts = await _context.Posts.Select(post => PostResponse.FromPost(post)).ToListAsync(cancellationToken);

        return Result<List<PostResponse>>.Success(posts);
    }
}
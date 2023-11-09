using API.Domain.Entities;

namespace API.Features.Posts.Models;

public record SubmitPostResponse
{
    public string Content { get; set; } = string.Empty;
    public DateTime SubmittedDate { get; set; } = DateTime.Now;
    public DateTime ModifiedDate { get; set; } = DateTime.Now;

    public static SubmitPostResponse FromPost(Post post) => new SubmitPostResponse
    {
        Content = post.Content,
        SubmittedDate = post.SubmittedDate,
        ModifiedDate = post.ModifiedDate
    };
}
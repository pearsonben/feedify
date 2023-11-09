using API.Domain.Entities;

namespace API.Features.Posts.Models;

public class PostResponse
{
    public string Content { get; set; } = string.Empty;
    public DateTime SubmittedDate { get; set; } = DateTime.Now;
    public DateTime ModifiedDate { get; set; } = DateTime.Now;
    
    public static PostResponse FromPost(Post post) => new PostResponse
    {
        Content = post.Content,
        SubmittedDate = post.SubmittedDate,
        ModifiedDate = post.ModifiedDate
    };
}
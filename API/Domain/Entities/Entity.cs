namespace API.Domain.Entities;

public class Entity : IEntity
{
    public int Id { get; set; }
    public DateTime SubmittedDate { get; set; } = DateTime.Now;
    public DateTime ModifiedDate { get; set; } = DateTime.Now;
}
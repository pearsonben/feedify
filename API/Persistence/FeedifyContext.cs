using API.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Persistence;

public class FeedifyContext : DbContext
{
    public FeedifyContext(DbContextOptions<FeedifyContext> options) : base(options)
    {
        
    }
    
    public DbSet<Post> Posts { get; set; }

    /// <summary>
    /// Custom override to set Created/Modifed dates by default.
    /// </summary>
    /// <param name="cancellationToken"></param>
    /// <returns></returns>
    public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        var entries = ChangeTracker
            .Entries()
            .Where(e => e.Entity is Entity && (
                e.State == EntityState.Added
                || e.State == EntityState.Modified));

        foreach (var entry in entries)
        {
            ((Entity)entry.Entity).ModifiedDate = DateTime.Now;

            if (entry.State == EntityState.Added)
            {
                ((Entity)entry.Entity).SubmittedDate = DateTime.Now;
            }
        }
        
        return await base.SaveChangesAsync(cancellationToken);
        
    }

    
}
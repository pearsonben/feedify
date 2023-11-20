using API.Auth;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Persistence;

public class AuthContext : IdentityDbContext<User>
{
    public AuthContext(DbContextOptions<AuthContext> options) : base(options)
    {
        
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {

        builder.Entity<User>()
            .HasMany(x => x.Followers)
            .WithMany(x => x.Following)
            
        
        base.OnModelCreating(builder);
    }
}
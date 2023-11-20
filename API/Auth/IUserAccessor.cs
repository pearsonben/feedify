using System.Security.Claims;

namespace API.Auth;

public interface IUserAccessor
{
    public ClaimsPrincipal User { get; }
}
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace API.Auth;

public class User : IdentityUser
{
    public List<User> Following { get; set; } = new();
    public List<User> Followers { get; set; } = new();
}
using API.Auth;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class UserController : ApiControllerBase
{
    private readonly UserManager<User> _userManager;

    public UserController(UserManager<User> userManager)
    {
        _userManager = userManager;
    }
    
    // [HttpPost]
    // public async Task<IActionResult> SubscribeToUser(string userName)
    // {
    //
    //     var user = _userManager.Users.FirstOrDefaultAsync(x => x.UserName == userName);
    //
    //     if (user is not null)
    //     {
    //         
    //     }
    // }
    
}
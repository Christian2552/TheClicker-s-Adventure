using Microsoft.AspNetCore.Mvc;
using UserInfo.Models;

namespace UserInfo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        [HttpPost("register")]
        public IActionResult Register([FromBody] User userData)
        {
            Console.WriteLine($"Регистриран потребител: {userData.UserName}");

            return Ok(new { message = "Успешна регистрация!" });
        }
    }
}
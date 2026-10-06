namespace UserInfo.Models
{
    public class User
    {
        public string UserName { get; set; } = string.Empty;
        public string Gender { get; set; } = string.Empty;
        public int Age { get; set; } = 0;
        public string Password { get; set; } = string.Empty;
    }
}
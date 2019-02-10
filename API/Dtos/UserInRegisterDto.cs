using System;
using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class UserInRegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [EmailAddress(ErrorMessage = "A valid email is required")]
        public string Email { get; set; }
        [Required]
        [StringLength(50, MinimumLength = 6, ErrorMessage = "Password must be longer than 6 characters")]
        public string Password { get; set; }
        public DateTime Created { get; set; } = DateTime.Now;

    }
}

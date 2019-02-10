using System;
using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class UserInLoginDto
    {
        public string Email { get; set; }
        [Required]
        [StringLength(50, MinimumLength = 6, ErrorMessage = "Password must be longer than 6 characters")]
        public string Password { get; set; }
        // public DateTime LastLogin { get; set; } = DateTime.Now;

    }
}

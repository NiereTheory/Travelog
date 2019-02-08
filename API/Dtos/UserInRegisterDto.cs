using System;
using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class UserInRegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(50, MinimumLength = 6, ErrorMessage = "You must specify a password longer than 6 characters")]
        public string Password { get; set; }
        public DateTime LastLogin { get; set; } = DateTime.Now;
        public DateTime Created { get; set; } = DateTime.Now;

    }
}

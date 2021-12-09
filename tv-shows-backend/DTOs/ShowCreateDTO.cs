using System.ComponentModel.DataAnnotations;

namespace showsBackend.DTOs
{
    public class ShowCreateDTO
    {
        [Required]
        [MaxLength(250)]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
    }
}

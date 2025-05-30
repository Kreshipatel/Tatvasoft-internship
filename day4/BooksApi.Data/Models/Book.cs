using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BooksApi.Models
{
    public class Book
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]  // This is key
        public int Id { get; set; }

        public string Title { get; set; }
        public string Description { get; set; }
        public string Author { get; set; }
    }
}

using System.ComponentModel.DataAnnotations;

namespace MVCUsingAjax.Models
{
    public class ProductModel
    {
        [Key]

        public int productID { get; set; }

        [Required]
        public string ProductName { get; set; }

        public string Price { get; set; }

        public int Quantity { get; set; }

        public string Category { get; set; }



    }
}
